function canMove(startPos, endPos) {
    let start = startPos.toLowerCase().split('');
    let end = endPos.toLowerCase().split('');

    if( start.length != 2 || end.length != 2 ) return 'мало/много букоф';
    if( !checkChar(start[0], 97, 122) || !isNumber(start[1]) ) return 'Неправильный первый аргумент';
    if( !checkChar(end[0], 97, 122) || !isNumber(end[1]) ) return 'Неправильный второй аргумент';
    
    let moveX = end[0].charCodeAt(0) - start[0].charCodeAt(0);

    if( moveX + +start[1] !== +end[1] && moveX - +start[1] !== +end[1] ) return false;

    return true
}

function checkChar(char, startCode, endCode) {
    return (char.charCodeAt(0) < startCode || char.charCodeAt(0) > endCode)? false: true;
}

function isNumber(i) {
    return !isNaN(parseFloat(i)) && isFinite(i);
}

console.log(canMove("c3", "e5"));
