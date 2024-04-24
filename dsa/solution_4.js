// Counting Sort
function countingSort(arr) {
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  const output = new Array(arr.length);
  
  // Count occurrences
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  
  // Transform count array
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  
  // Build output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  
  return output;
}