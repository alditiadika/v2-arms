import moment from 'moment'
import { CompositeFilterDescriptor } from '@progress/kendo-data-query'
import { filterOperator } from 'utils/constants'


type TFunc = (filter?:CompositeFilterDescriptor, mustUpperCase?:boolean) => string
const filterGeneratorQuery:TFunc = (filter, mustUpperCase = true) => {
  let filterQuery = ''
  if(filter) {
    filter.filters.forEach(item => {
      if('field' in item) {
        const isDate = item.value instanceof Date
        const isNumber = typeof item.value === 'number'
        let val = isDate ? `"${item.value}"` : isNumber ? `${item.value}` : `"${item.value}"`
        if(mustUpperCase) val = val.toUpperCase()
        switch(item.operator) {
        case filterOperator.contains:{
          filterQuery += `${item.field}_contains: ${val}, `
          break
        }
        case filterOperator.notContains:{
          filterQuery += `${item.field}_not_contains: ${val}, `
          break
        }
        case filterOperator.startWith:{
          filterQuery += `${item.field}_starts_with: ${val}, `
          break
        }
        case filterOperator.endWith:{
          filterQuery += `${item.field}_ends_with: ${val}, `
          break
        }
        case filterOperator.eq:{
          if(isDate) {
            const startOfDay = moment(item.value).startOf('day').utc().format('YYYY-MM-DDTHH:mm:ss')
            const endOfDay = moment(item.value).endOf('day').utc().format('YYYY-MM-DDTHH:mm:ss')
            filterQuery += `${item.field}_gte : "${startOfDay}",`
            filterQuery += `${item.field}_lte : "${endOfDay}",`
          } else filterQuery += `${item.field}: ${val}, `
          break
        }
        case filterOperator.neq:{
          if(isDate) {
            const startOfDay = moment(item.value).startOf('day').utc().format('YYYY-MM-DDTHH:mm:ss')
            const endOfDay = moment(item.value).endOf('day').utc().format('YYYY-MM-DDTHH:mm:ss')
            filterQuery += 'OR : ['
            filterQuery += `{${item.field}_gt : "${startOfDay}"},`
            filterQuery += `{${item.field}_lt : "${endOfDay}"}`
            filterQuery += '],'
          } else filterQuery += `${item.field}: ${val}, `
          break
        }
        default:{
          filterQuery += `${item.field}_${item.operator}: ${val}, `
          break
        }
        }
      }
    })
  }
  return filterQuery
}
export default filterGeneratorQuery