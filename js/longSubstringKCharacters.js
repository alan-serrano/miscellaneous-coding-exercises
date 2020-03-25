/* 
Longest substring of given string containing k distinct characters

Given a string and a positive number k, find the longest substring of given string containing k distinct characters. If k is more than number of distinct characters in the string, return the whole string.

For example, consider string "abcbdbdbbdcdabd"

For k = 2, o/p  is 'bdbdbbd'
For k = 3, o/p is ‘bcbdbdbbdcd’
For k = 5, o/p is ‘abcbdbdbbdcdabd’

*/

/**
 * 
 * @param {String} str All in lower case 
 * @param {Number} k
 * 
 * Run Time Complexity O(k*n)
 * Additional Space O(k) 
 */

function longSubstring1(str, k) {
    let counter = 0;
    let strings = {};
    
    let longString = {
        long: 0,
        p1: 0,
    }

    for( let p1 = 0, p2 = 0; p2 < str.length; p2++ ) {
        let ch = str[p2];
        
        if( !strings.hasOwnProperty(ch)) {
            counter++;
        }

        if( counter > k ) {
            counter--;
            
            // removing a ch for the map
            let min = Number.MAX_VALUE;

            for(let ch in strings) {
                if( strings[ch] < min ) {
                    min = ch;
                }
            }

            p1 = strings[min] + 1;

            delete strings[min];
        }

        if( p2 - p1 + 1 > longString.long ) {
            longString.long = p2 - p1 + 1;
            longString.p1 = p1;
        }

        strings[ch] = p2;
    }

    if (counter < k) {
        return false;
    }

    let result = str.substring(longString.p1, longString.p1 + longString.long);

    return result;
}

/**
 * 
 * @param {String} str All in lower case 
 * @param {Number} k
 * 
 * Run Time Complexity O(k*n)
 * Additional Space O(k)
 * Using a Javascript Map
 */

function longSubstring2(str, k) {
    let strings = new Map();
    
    let longString = {
        long: 0,
        p1: 0,
    }

    for( let p1 = 0, p2 = 0; p2 < str.length; p2++ ) {
        let ch = str[p2];
        
        strings.set(ch, p2);

        if( strings.size > k ) {
            // removing a ch for the map
            let min = Number.MAX_VALUE;

            strings.forEach( (idx, ch) => {
                if( idx < min ) {
                    min = ch;
                }
            });

            p1 = strings.get(min) + 1;

            strings.delete(min);
        }

        if( p2 - p1 + 1 > longString.long ) {
            longString.long = p2 - p1 + 1;
            longString.p1 = p1;
        }
    }

    if (strings.size < k) {
        return false;
    }

    let result = str.substring(longString.p1, longString.p1 + longString.long);

    return result;
}

function test(fn) {
    const str1 = 'abcbdbdbbdcdabd';
    const k1 = 2;
    const k2 = 3;
    const k3 = 4;
    const k4 = 5;

    console.log(fn(str1, k1), ', expect: ','bdbdbbd');
    console.log(fn(str1, k2), ', expect: ','bcbdbdbbdcd');
    console.log(fn(str1, k3), ', expect: ','abcbdbdbbdcdabd');
    console.log(fn(str1, k4), ', expect: ','false');
}

test(longSubstring1);