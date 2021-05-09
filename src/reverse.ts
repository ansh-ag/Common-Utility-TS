export function reverse(string : string){
    const length = string.length;

// charCodeAtcharCodeAt will always return a value that is less than 65,536.
// Uint16Array - 0 TO 65535    

    const byteArray = new ArrayBuffer(length*2);
    const U16ByteArray= new Uint16Array(byteArray);


    for(let i = 0; i< length;i++){
        const charCodeFromString = string.charCodeAt(i);
        U16ByteArray[length-1-i] = charCodeFromString
    }
    return String.fromCharCode.apply(null, U16ByteArray)

}

