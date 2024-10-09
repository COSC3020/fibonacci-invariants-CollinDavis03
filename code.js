function fib(a, i, arr) { 

    if (a == 0) {
        return [0];
    }
    
    if (a == 1) {
        return [0,1]; 
    } 
    if ( i <= a ) {
        arr.push(arr[i-1] + arr[i-2]);
        fib(i + 1, a, arr); 
    }
    return arr; 
}
