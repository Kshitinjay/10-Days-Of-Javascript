'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    let a = s[0];
    // Write your code here
    switch (a) {
        case ('a' || 'e' || 'o' || 'i' || 'u'): {
            return 'A';
        }
        case ('b' || 'c' || 'd' || 'f' || 'g'): {
            return 'B';
        }
        case ('h' || 'j' || 'k' || 'l' || 'm'): {
            return 'C';
        }
        case ('n' || 'p' || 'q' || 'r' || 's' || 't' || 'u' || 'v' || 'w' || 'x' || 'y' || 'z'): {
            return 'D';
        }
    }
    return letter;
}

