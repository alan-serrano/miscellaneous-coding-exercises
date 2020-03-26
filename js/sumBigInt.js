// Mock Interview 09/03/2020 Marzo-2020
// Given two arrays that represents each a big number, implement the sum of that numbers

function sumBigInts (num1, num2) {
    let firstArray; // Array with larger length
    let secondArray; // Array with shorter length
    
    if(num1.length > num2.length) {
        firstArray = num1;
        secondArray = num2;
    } else {
        firstArray = num2;
        secondArray = num1;
    }
    
    // Saving space for the array
    let sum = new Array(firstArray.length);
    sum.length = 0;

    let carry = 0;

    for(let i = 0; i < firstArray.length; i++ ) {
    
        let value1 = firstArray[firstArray.length - 1 - i];
        let value2 = secondArray[secondArray.length - 1 - i] || 0;
        let result;

            
        // Getting the unit of the sum
        result = value1 + value2 + carry;
        result = result.toString();
        result = parseInt(result[result.length - 1]);

        // If last operation
        if( i === firstArray.length - 1 ) {
            sum.push(result);
            carry = Math.floor((value1 + value2 + carry) / 10);
            
            // If there is carry
            if(carry !== 0) {
                sum.push(carry);
            }

        } else {
            sum.push(result);
            carry = Math.floor((value1 + value2 + carry) / 10);
        }
    }

    sum = reverseArray(sum);

    return sum;
}

function reverseArray(arr) {
    const n = arr.length;
    const result = [];
    result.length = n;

    for(let i = 0; i < n; i++) {
        result[n -i - 1] = arr[i];
    }

    return result;
}

console.log(sumBigInts([9,9,9], [9,9,9,9]));