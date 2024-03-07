function inverterString(string){
    let palavra = string.split('')
    console.log(palavra.length)
    for(let i = palavra.length; i >= 0; i--){
        console.log(palavra[i])  
    }
}

inverterString('olá, mundo')