import { SortDescriptor } from '@progress/kendo-data-query'

type TFunc = (sort?:SortDescriptor[]) => string | undefined
const sortGeneratorQuery:TFunc = sort => {
  let sortBy = ''
  let dir = ''
  if(sort) {
    sort.forEach(s => {
      sortBy += `${s.field} `
      dir += `${s.dir} `
    })
    sortBy = sortBy + '_' + dir.toUpperCase()
    return sortBy
  } else return undefined
}
export default sortGeneratorQuery