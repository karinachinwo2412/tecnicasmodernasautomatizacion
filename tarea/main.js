function uniqueC(array) {
    let newArray = [];
    let tem;
    array.forEach(element => {
            if (newArray.length === 0) {
                newArray.push([element, 1])
                tem = element;
            } else {
                if (tem === element) {
                    let arrayElement = newArray.pop();
                    newArray.push([element, ++arrayElement[1]]);
                } else {
                    newArray.push([element, 1])
                    tem = element;
                }
            }
        }
    )
    return newArray;
}

function flatten(array) {
    return array.reduce(
        (previous, currentElement) => previous.concat(Array.isArray(currentElement) ? flatten(currentElement) : currentElement), []
    );
}

function fn(words, target) {
    const idx = {}
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (target.startsWith(word)) {
            idx[word] = i
            const suffix = target.slice(word.length)
            if (suffix in idx)
                return [suffix, word, [i, idx[suffix]]]
        }
        else if (target.endsWith(word)) {
            idx[word] = i
            const prefix = target.slice(0, target.length - word.length)
            if (prefix in idx)
                return [prefix, word, [idx[prefix], i]]
        }
    }
    return null
}


function squareNumber(number){ // 9119) ) // 811181)
    let array = String(number).split("").map((num)=>{
        return Number(num)
    })

    let newNumber = array.reduce((previousValue, currentValue) => {
        let current = currentValue * currentValue;
        return String(previousValue).concat(String(current))}, "");
    return newNumber;
}

console.log("Unique - C");
console.log(uniqueC(['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c']))

console.log("------------------------")
console.log("flatten");
console.log(flatten([1, [2, 3], 4, 5, [6, [7]]]))
console.log(flatten(['a', ['b', 2], 3, null, [[4], ['c']]]))

console.log("------------------------")
console.log("match words");
console.log(fn(['super', 'bow', 'bowl', 'tar', 'get', 'book', 'let'], "bowlsuper"))
console.log(fn(['bow','crystal','organic','ally','rain','line'], "crystalline"))
// ['crystal','line', [1,5]]

console.log(fn(['bow','crystal','organic','ally','rain','line'], "rainbow"))
// ['bow','rain',     [4,0]]

console.log(fn(['bow','crystal','organic','ally','rain','line'], "organically"))
// ['organic','ally', [2,3]]

console.log(fn(['top','main','tree','ally','fin','line'], "mainline"))
// ['main','line',    [1,5]]

console.log(fn(['top','main','tree','ally','fin','line'], "treetop"))
// ['top','tree',     [2,0]]

console.log("------------------------")
console.log("square number");
console.log(squareNumber(9119) ) // 811181)