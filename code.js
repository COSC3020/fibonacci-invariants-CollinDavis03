function Fiboancci(n, list = []){
    if(n < 1) {
        return n; 
    } 

    if (list[n] !== undefined) {
        return list[n]; 
    }

    list[n] = fib(n - 1, list) + fib(n - 2, list);
    return list[n]; 
}

function fib(n) {
    let Fibo = []; 
    for (let i = 0; i <= n; i++){
        Fibo[i] = fib(i); 
    }
    return Fibo;
}
