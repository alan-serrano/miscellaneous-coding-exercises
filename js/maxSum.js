// Video: https://www.youtube.com/watch?v=ZlnZkfEcbxs

// Given an array of integers of size 'n'. Calculate the maximum sum posibble 
// for 'k' consecutive elements in the array

// Input:   [10,20,30,40,50,60,70]
//          k = 3
// Output: 180

const arr = [10, 20, 30, 40, 50, 60, 70];
const k = 4;

function maxSum(arr, k) {
    // k greater than length arr
    if( k > arr.length ) return false;

    let windowTotal = 0;

    for( let i = 0; i < k; i++ ) {
        windowTotal += arr[i];
    }

    let maxSumResult = windowTotal;

    for( let i = k; i < arr.length; i++ ) {
        windowTotal += arr[i] - arr[i-k];

        maxSumResult = Math.max( windowTotal, maxSumResult );
    }

    return maxSumResult;
}

function test(fn) {
    const arr1 = [10,20,30,40,50,60,70]; 
    const k1 = 2;
    const k2 = 3;
    const k3 = 8;

    console.log(fn(arr1, k1), ', expect: ',130);
    console.log(fn(arr1, k2), ', expect: ',180);
    console.log(fn(arr1, k3), ', expect: ',false);
}

test(maxSum);