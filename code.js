function fib(a) { 

let arr = [0,1]

if (a == 0) {
    return [0];
}

if (a == 1) {
    return [0,1]; 
} 
else { 
    for (let i = 2; i <= a; i++) { 
        arr.push(arr[i-1] + arr[i-2])
    }
}
return arr; 
}
