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
I am going to go more in-depth with this by reading my code and using examples. First, if we do fib(0) or fib(1), it will return either [0] or [0,1]. That is what the code tells us. For example when we fo fib(4) the code will call fib(3), fib(2), fib(1). It will start at fib(1) and work its way up to fib(4). Which will go through the const arr = fib(a-1) and store the elements in the array. Then it calls the certain element from the length of the array, adding those two values together and putting it back into the array. It will keep doing this until it reaches whatever value you put for a. In this case, the arr is the invariant, and the reason why is because contains all the values in the sequence up to fib(a-1). It stores all the values in the array. When we go to the math part of the code. It calls back that array takes whatever the length of the array is and substracts it by 1 or 2 in order to get the two elements it needs to add it together and adds that new value to the array to be stored. 

Sources: 
I looked at Nolan's repo after I wrote my statement explaining the invariants. I added the to clarify after just to make sure I touched everything. I also watched a YouTube video a while back on the C++ Fibonacci function and I took the logic from it and wrote it into javascript. Other than that I have not used anything else. I can not find the exact video I watched to put the link in here. I talked to the TA and this is what we came up with. 

Plagiarism Statement: 
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
