function specChar(string) {
    let count = 0;
    let newStr = string.split(' ')
    for(let i = 0; i < newStr.length; i++){
        if(!newStr[i].match(/\W|_/)){
        count +=1
        }
    }

    return count
}

const string = 'Kemarin Shopia per[gi ke mall'
console.log(specChar(string))