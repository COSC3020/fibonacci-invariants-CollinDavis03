function fib(n, list = []){
    if(n === 0) {
        return 0; 
    } 

    if (n === 1) {
        return 1; 
    }

    if (list[n] !== undefined) {
        return list[n]; 
    }

    list[n] = fib(n - 1, list) + fib(n - 2, list);
    return list[n]; 
}

function Fibonacci(n) {
    let Fibo = []; 
    for (let i = 0; i <= n; i++){
        Fibo[i] = fib(i, Fibo); 
    }
    return Fibo;
}
