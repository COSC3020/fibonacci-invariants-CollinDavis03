function fib(a) { 

    if (a === 0) return [0];
    if (a === 1) return [0, 1];
        
    const arr = fib(a - 1); //thought this was Invariant becasue it applies to the equation below and only allows the equation to happen if it has met up to that number in
    //sequence. 

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    
return arr; 
}
