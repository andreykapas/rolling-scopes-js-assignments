'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */

function getFizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz';
    } else if (num % 5 == 0) {
        return 'Buzz';
    } else if (num % 3 == 0) {
        return 'Fizz';
    } else {
        return num;
    }
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    return rect1.top + rect1.height > rect2.top && rect1.left + rect1.width > rect2.left;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    return Math.hypot(point.x - circle.center.x, point.y - circle.center.y) < circle.radius;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
            return str.charAt(i);
        }
    }
    return null;
}

/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let answ = '';
    if (isStartIncluded) {
        answ += '[';
    } else {
        answ += '(';
    }
    if (a < b) {
        answ += a + ', ' + b;
    } else {
        answ += b + ', ' + a;
    }
    if (isEndIncluded) {
        answ += ']';
    } else {
        answ += ')';
    }
    return answ;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    //я поимаю, что задание на цикл... но не удержался попробовать накопленные знания)))
    return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    //если нужно переделаю с циклом...
    return num.toString().split('').reverse().join('');
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    let n = ccn.toString();
    let sum = 0;
    let digit;
    for (let counter = 0; counter < n.length; counter++) {
        if ((n.length - counter) % 2 == 0) {
            digit = n[counter] * 2 > 9 ? n[counter] * 2 - 9 : n[counter] * 2;
        } else digit = n[counter];
        sum += +digit;
    }
    return !(sum % 10);
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let n = num.toString();
    let sum = 0;
    for (let counter = 0; counter < n.length; counter++) {
        sum += +n[counter];
        if (counter == n.length - 1 && sum > 9) {
            n = sum;
            return getDigitalRoot(n);
        }
    }
    return sum;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    if (str.length % 2 != 0) return false;
    let counter = 2;
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case '(':
                counter *= 3;
                break;
            case ')':
                counter /= 3;
                break;
            case '[':
                counter = counter * 5 + 1;
                break;
            case ']':
                counter = (counter - 1) / 5;
                break;
            case '{':
                counter = counter * 7 + 2;
                break;
            case '}':
                counter = (counter - 2) / 7;
                break;
            case '<':
                counter = counter * 11 + 3;
                break;
            case '>':
                counter = (counter - 3) / 11;
                break;
        }
        if (!Number.isInteger(counter)) return false;
    }
    return counter == 2;
}

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let diff = endDate.getTime() - startDate.getTime();

    const msecPerSec = 1000;
    const msecPerMin = 60 * msecPerSec;
    const msecPerHour = 60 * msecPerMin;
    const msecPerDay = 24 * msecPerHour;
    const msecPerMonth = 30 * msecPerDay;
    const msecPerYear = 365 * msecPerDay;

    const sec45 = 45 * msecPerSec;
    const sec90 = 90 * msecPerSec;
    const min45 = 45 * msecPerMin;
    const min90 = 90 * msecPerMin;
    const hour22 = 22 * msecPerHour;
    const hour36 = 36 * msecPerHour;
    const day25 = 25 * msecPerDay;
    const day45 = 45 * msecPerDay;
    const day345 = 345 * msecPerDay;
    const day546 = 546 * msecPerDay;

    let answ = '';

    switch (true) {
        case diff <= sec45:
            answ = 'a few seconds ago';
            break;
        case diff <= sec90:
            answ = 'a minute ago';
            break;
        case diff <= min45:
            answ = Math.round((diff - 1) / msecPerMin) + ' minutes ago';
            break;
        case diff <= min90:
            answ = 'an hour ago';
            break;
        case diff <= hour22:
            answ = Math.round((diff - 1) / msecPerHour) + ' hours ago';
            break;
        case diff <= hour36:
            answ = 'a day ago';
            break;
        case diff <= day25:
            answ = Math.round((diff - 1) / msecPerDay) + ' days ago';
            break;
        case diff <= day45:
            answ = 'a month ago';
            break;
        case diff <= day345:
            answ = Math.round((diff - 1) / msecPerMonth) + ' months ago';
            break;
        case diff < day546:
            answ = 'a year ago';
            break;
        default:
            answ = Math.round((diff - 1) / msecPerYear) + ' years ago';
    }
    return answ;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    //здесь тоже требуется через цикл?
    return num.toString(n);
}

/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    let answ;
    let minSize = pathes.reduce((p, c) => Math.min(p, c.length), pathes[0].length);
    answ = pathes.reduce(function findCommon(one, two) {
        let str = '';
        for (let i = 0; i < minSize; i++) {
            if (one.charAt(i) == two.charAt(i)) {
                str += one.charAt(i);
            } else break;
        }
        return str;
    }, pathes[0]);
    return answ.substring(0, answ.lastIndexOf('/') + 1);
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    let product = [];

    for (let x = 0; x < m1.length; x++) {
        let arr = [];
        for (let i = 0; i < m2[0].length; i++) {
            let value = 0;
            for (let j = 0; j < m2.length; j++) {
                value += m1[x][j] * m2[j][i];
            }
            arr.push(value);
        }
        product.push(arr);
    }
    return product;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    let Xd1 = 0;
    let Od1 = 0;

    for (let i = 0; i < position.length; i++) {
        if (position[i][i] == 'X') {
            Xd1++;
        }
        if (position[i][i] == '0') {
            Od1++;
        }

        let Xrow = 0;
        let Orow = 0;
        let Xcol = 0;
        let Ocol = 0;
        for (let j = 0; j < position.length; j++) {
            if (position[i][j] == 'X') {
                Xrow++;
            }
            if (position[i][j] == '0') {
                Orow++;
            }
            if (position[j][i] == 'X') {
                Xcol++;
            }
            if (position[j][i] == '0') {
                Ocol++;
            }
        }
        if (Xrow == 3) return 'X';
        if (Orow == 3) return '0';
        if (Xcol == 3) return 'X';
        if (Ocol == 3) return '0';
    }
    if (Xd1 == 3) return 'X';
    if (Od1 == 3) return '0';

    let Xd2 = 0;
    let Od2 = 0;
    for (let i = position.length - 1, j = 0; i >= 0; i--, j++) {
        if (position[i][j] == 'X') {
            Xd2++;
        }
        if (position[i][j] == '0') {
            Od2++;
        }
    }
    if (Xd2 == 3) return 'X';
    if (Od2 == 3) return '0';
}

module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString: getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString: timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition: evaluateTicTacToePosition
};

//# sourceMappingURL=06-conditions-n-loops-tasks-compiled.js.map