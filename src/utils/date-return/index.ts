type TFunc = (d:string | Date | null) => Date | string | null
const dateReturn:TFunc = (date) => {
  if(date) {
    if(typeof date === 'string') {
      const dd = new Date(date)
      const condition = dd instanceof Date && !isNaN(parseInt(date))
      if (condition) {
        return dd
      }
      return date
    }
    return date
  }
  return null
}
export default dateReturn