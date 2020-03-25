/* Longest substring of given string containing distinct characters

Given a string, find the longest substring of given string containing distinct characters.

For Example:

string = 'findlongestsubstring'
The longest substring with all distinct characters is 'dlongest' or 'ubstring'

string = 'longestsubstr'
The longest substring with all distinct characters is 'longest'

string = 'abbcdafeegh'
p1                8
p2                  10
start     2
end       7
The longest substring with all distinct characters is 'bcdafe'

string = 'aaaaaa'
The longest substring with all distinct characters is 'a' */

/**
 * Time Complexity O(n)
 * Additional Space Complexity 0(n) 
 * */
function longSubstring(str) {
    let substringMap = {};
    let result = {
        start: 0,
        end: 0
    }

    for( let p1 = 0, p2 = 0; p2 < str.length; p2++ ) {
        let ch = str[p2];

        if( substringMap.hasOwnProperty(str[p2]) && substringMap[str[p2]] >= p1 ) {
            p1 = substringMap[str[p2]] + 1;
        }

        if( p2 - p1 > result.end - result.start ) {
            result.start = p1;
            result.end = p2;
        }

        substringMap[ch] = p2;
    }
    
    return str.substring(result.start, result.end+1);
}

function test(fn) {
    const s1 = 'findlongestsubstring'
    const s2 = 'longestsubstr'
    const s3 = 'abbcdafeegh'
    const s4 = 'aaaaaa'

    console.log( fn(s1) , ' expected to be: ', 'dlongest or ubstring' );
    console.log( fn(s2) , ' expected to be: ', 'longest');
    console.log( fn(s3) , ' expected to be: ', 'bcdafe');
    console.log( fn(s4) , ' expected to be: ', 'a');

}

test(longSubstring);