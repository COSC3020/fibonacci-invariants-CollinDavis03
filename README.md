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


Answer: 
The invariant for this code is a - 1.  The reason is that with each recursive call, this function will look back at the previous call, and it will look at the sum of the previous two elements, and that will dictate that it can keep going. 

Sources: 
I looked at Nolan's repo after I wrote my statement explaining the invariants. I added the to clarify after just to make sure I touched everything. I also watched a YouTube video a while back on the C++ Fibonacci function and I took the logic from it and wrote it into javascript. Other than that I have not used anything else. I can not find the exact video I watched to put the link in here. I wrote this code in the past in C++ and I had a hard time transferring it to Java. I looked at Nolan Bergs's function and realized I did not have my invariant set up the correct way and once I changed that and set it up the code passed. The silly little mistake I overlooked. 

Plagiarism Statement: 
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
