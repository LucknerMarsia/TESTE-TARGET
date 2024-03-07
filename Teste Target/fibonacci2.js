function fibonacci(valor){

    if(valor < 1){
      return 0;   
    } else {
        let fib1 = 0
        let fib2 = 1
        let fibValor = valor

        for(let i = 0; i <= valor; i++) {
            fibValor = fib1 + fib2;
            fib2 = fib1;
            fib1 = fibValor;

            if(valor === fib1){
                console.log( 'O número ' + valor + ' pertence a sequência de fibonacci!')
            }
        }
        return fibValor;

    } 
}
console.log(fibonacci(10))
