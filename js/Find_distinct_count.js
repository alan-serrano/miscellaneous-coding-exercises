/* 
    9. Find count of distinct elements in every sub-array of size k
    https://www.techiedelight.com/count-distinct-elements-every-sub-array-size-k-array/
*/

/* 
    Using set
    Time Complexity: nk
    Space complexity: k
*/
function findDistinctCount1(arr, k) {
    if( k > arr.length ) return;
    if( k < 1 ) return;

    for(let i = 0; i < arr.length - k + 1; i++) {
        let subArr = arr.slice( i, i + k );
        let setArr = new Set(subArr);

        console.log(`The console of distinct elements in the subarray {${subArr.join(',')}} is ${setArr.size}`);
    }
}


/* 
    Using windows technique
    Time Complexity O(n)
    Space Complexity O(n)
*/

function findDistinctCount2(arr, k) {
    if( k > arr.length ) return;
    if( k < 1 ) return;

    const freq = {};
    let distinct = 0;

    for( let i = 0; i < arr.length; i++ ) {
        if( i >= k ) {
            freq[arr[i - k]]--;

            if( freq[ arr[i-k] ] === 0 ) {
                distinct--;
            }
        }

        freq[arr[i]] = freq[arr[i]] + 1 || 1;

        if( freq[arr[i]] === 1 ) {
            distinct++;
        }
    
        if( i >= k - 1 ) {
            console.log(`The count of distinct elements in the subarray[${i-k+1}, ${i}] is ${distinct}`);
        }
    }
}



(function test() {
    const arr1 = [2,1,2,3,2,1,4,5];
    const k1 = 5;

    findDistinctCount1(arr1, k1);
    findDistinctCount2(arr1, k1);
})();
