# Binary Search Algorithm

**Overview**

This repository contains a JavaScript implementation of the Binary Search algorithm. Binary Search is an efficient algorithm used to find the position of a target element in a sorted array. It repeatedly divides the search interval in half, allowing for logarithmic time complexity, making it much faster than linear search for large datasets.

**Problem Definition**

Given a sorted array of integers and a target value, the Binary Search function determines the index of the target value in the array. If the target is not found, the function returns -1.



**Function Signature**

function binarySearch(array, target) { ... }

**Parameters**:

1. array: A sorted array of integers.
2. target: The integer value to be searched for in the array.


**Returns**: If the target is found, returns the index of the target in the array. If the target is not found, returns -1.

**Time and Space Complexity**

**Time Complexity**: O(log n) where n is the number of elements in the array. The time complexity is logarithmic because the search space is halved with every iteration.

**Space Complexity**: O(1) since the algorithm only uses a constant amount of extra space.

**How the Function Works**

1. Initialize two pointers: startIndex (at the beginning of the array) and endIndex (at the end of the array).
2. Compute the middle index: (startIndex + endIndex) / 2.
3. Compare the middle element with the target:
4. If the middle element is equal to the target, return the middleIndex.
5. If the middle element is greater than the target, narrow the search to the left half by updating endIndex.
6. If the middle element is less than the target, narrow the search to the right half by updating startIndex.
7. Repeat the process until the startIndex exceeds the endIndex. If no match is found, return -1.


Example 1:

	Input: [1, 2, 3, 4, 5, 6, 7], target = 5
	Output: 4
 
Example 2:

	Input: [1, 3, 5, 7, 9, 11, 13], target = 8
	Output: -1 (target not found)
 
**Limitations**

The array must be sorted for Binary Search to work.

**License**: This project is licensed under the MIT License. Feel free to use or modify it for your own purposes.






