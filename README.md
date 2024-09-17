# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Here is my code
function Fiboancci(n, list = []){
    if(n < 1) {
        return n; 
    } 

    if (list[n] !== undefined) {
        return list[n]; 
    }

    list[n] = fib(n -1, list) + fib(n - 2, list);
    return list[n]; 
}

function fib(n) {
    let Fibo = []; 
    for (let i = 0; i <= n; i++){
        Fibo[i] = fib(i); 
    }
    return Fibo;
}

My invariant in my code is fib(n, list). With this, it makes sure that the array gets stored correctly in the list and also indices any of the variables less than n. 
This is important because it enables new values to be created within the list and takes the elements needed. 
