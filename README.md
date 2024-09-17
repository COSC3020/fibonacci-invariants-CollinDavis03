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

Sources: 
I looked at Nolan Tachbar's code to see how he did it because I knew he was struggling with the test not failing. I also looked at his readme file so I can have an 
idea of how to write my conclusion as you see our codes do the same thing but our invariants are different in both of them. I also used ChatGPT a couple of times
when I was trying to write the code in one function and gave up because I had it passed already with a helper function. I used ChatGPT to see what the errors 
were with my single function code because I still am learning how to read the function. Other than I watched your video and looked at the code that was provided in
class to us. 

Plagiarism Statement: 
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. 
I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
