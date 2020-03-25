/* Find all substrings of a string that are permutations of given string

Find all substrings of a string that contains all characters of another string. In other words, find all substrings of first string that are anagrams of second string.

For example

Input:
string str1 = ‘XYYZXZYZXXYZ’;
string str2 = ‘XYZ’;

XXYZ X = 2, Y = 1, Z = 1
XYZX

Output: 
Anagram ‘YZX’ present at index 2
Anagram ‘XZY’ present at index 4
Anagram ‘YZX’ present at index 6
Anagram ‘XYZ’ present at index 9 */

function findAllAnagrams(str1, str2) {
    if(str2.length > str1.length) return;

    let window = {};
    let str2Map = {};
    let indexes = new Array( str1.length );
    indexes.length = 0;

    for(let i = 0; i < str2.length; i++ ) {
        window[str1[i]] = window[str1[i]] + 1 || 0;
        str2Map[str2[i]] = str2Map[str2[i]] + 1 || 0;
    }

    if( checkPermutation(window, str2Map) ) indexes.push(0);

    for(let p1 = 0, p2 = str2.length; p2 < str1.length; p2++, p1++) {
        // Add new value to window, and remove the first

        window[str1[p2]] = window[str1[p2]] + 1 || 0;

        if( window[ str1[p1] ] === 0 ) {
            delete window[ str1[p1] ];
        } else {
            window[ str1[p1] ]--;
        }

        if( checkPermutation(window, str2Map) ) indexes.push(p1+1);
    }

    indexes.forEach( (idx) => {
        console.log(` Anagram ${str1.substring(idx, idx + str2.length)} present at index ${idx} `);
    });
}

function checkPermutation(map1, map2) {
    // checking map1 over map2
    for( let ch in map1 ) {
        if( map1[ch] !== map2[ch] ) return false;
    }

    return true;
}

function test() {
    const str1 =  'XYYZXZYZXXYZ';
    const str2 = 'XYZ';

    const str3 = 'aaaab';
    const str4 = 'baa'

    findAllAnagrams( str1, str2 )
    findAllAnagrams( str3, str4 )
}

test();