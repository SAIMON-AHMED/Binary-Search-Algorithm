// Time -> O(logn) | Space -> O(1) where n is the number of elements in the array. 

function binarySearch(array, target) {

  let startIndex = 0;
  let endIndex = array.length - 1;
  

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    
    if (array[middleIndex] == target) {
      return middleIndex;
    } else if (array[middleIndex] > target) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  return -1;
}
