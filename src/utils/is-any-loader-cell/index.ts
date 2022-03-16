type TParam = {
  allData:{isLoadingItem:boolean, index:number}[],
  skipStartCheck:number,
  takeData:number
}
type TFunc = (param:TParam) => { isAnyLoading:boolean, loadingStartIndex:number }
const isAnyloader:TFunc = ({ allData, skipStartCheck, takeData }) => {
  const isAnyLoading = allData.slice(skipStartCheck, skipStartCheck+takeData)
    .find(x => x.isLoadingItem)
  if(isAnyLoading) {
    return {
      isAnyLoading:true,
      loadingStartIndex:isAnyLoading.index - 1
    }
  }
  return {
    isAnyLoading:false,
    loadingStartIndex:0
  }
}
export default isAnyloader