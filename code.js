function fib(a) { 

    if (a === 0) return [0];
    if (a === 1) return [0, 1];
        
    const arr = fib(a - 1);

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    
return arr; 
}
