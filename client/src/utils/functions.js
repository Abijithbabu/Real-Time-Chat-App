export function moveToTop(array, targetId,msg,selected) {
    console.log(targetId)
    const newArray = array.slice()
    const targetIndex = newArray.findIndex(item => item._id === targetId);
    console.log(newArray)
    
    if (targetIndex !== -1) {
      const targetItem = newArray.splice(targetIndex, 1)[0];
    console.log(newArray)
     targetItem.lastMsg= msg
  if(targetId !== selected){
    const count = targetItem?.unRead? ++targetItem.unRead.count : 1
    targetItem.unRead = targetItem?.unRead?.id === selected ? {id:selected,count:count} : {id:selected,count:1}
  }
      newArray.unshift(targetItem);
    }
    
    return newArray;
  }