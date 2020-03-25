# Coding Exercises

## maxSum

src: https://www.youtube.com/watch?v=ZlnZkfEcbxs

Given an array of integers of size 'n'. Calculate the maximum sum posibble 
for 'k' consecutive elements in the arr

Example:
```
Input:   [10,20,30,40,50,60,70]
         k = 3
Output: 180
```

## Sliding Window Algorithm - Practice Problems

src: https://www.techiedelight.com/sliding-window-problems/

### Longest substring of given string containing k distinct characters

Given a string and a positive number k, find the longest substring of given string containing k distinct characters. If k is more than number of distinct characters in the string, return the whole string.

For example, consider string "abcbdbdbbdcdabd"

```
For k = 2, o/p  is 'bdbdbbd'
For k = 3, o/p is 'bcbdbdbbdcd'
For k = 5, o/p is 'abcbdbdbbdcdabd'
```

### Find all substrings of a string that are permutations of given string

Find all substrings of a string that contains all characters of another string. In other words, find all substrings of first string that are anagrams of second string.

For example

Input:
string str1 = 'XYYZXZYZXXYZ';
string str2 = 'XYZ';

Output: 
Anagram 'YZX' present at index 2
Anagram 'XZY' present at index 4
Anagram 'YZX' present at index 6
Anagram 'XYZ' present at index 9

### Longest substring of given string containing distinct characters

Given a string, find the longest substring of given string containing distinct characters.

For Example:

string = 'findlongestsubstring'
The longest substring with all distinct characters is 'dlongest' or 'ubstring'

string = 'longestsubstr'
The longest substring with all distinct characters is 'longest'

string = 'abbcdafeegh'
The longest substring with all distinct characters is 'bcdafe'

string = 'aaaaaa'
The longest substring with all distinct characters is 'a'