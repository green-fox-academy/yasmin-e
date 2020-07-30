/*                                    RECURSION
- What is recursion?
    When a function calls itself with different values until a given condition
    is evaluated differently as before. When the condition value changes the
    function will return a value instead of calling itself again.

- What is the base case?
    The base case is the condition that depends on the function's argument.
    There must be at least one value which will evaluate the condition
    differently so the function will return something instead of calling itself
    again.
    If the condition cannot be satisfied, the recursion won't stop and the
    application will crash. It will exceed the maximum call stack size.

- When to use recursion?
    Anytime, it is just a tool what you can use whenever you want and it solves
    the problem.

- What is the connection with for loops and recursion?
    Each for loop can be transformed into a recursion.

- What is the stack?
    It's a special region of your computer's memory that stores temporary
    variables created by each function. The stack is a "LIFO" (last in,
    first out) data structure. Every time a function declares a new variable, it
    is "pushed" onto the stack. Then every time a function exits, all of the
    variables pushed onto the stack by that function, are freed (that is to say,
    they are deleted).

- What is the connection between stack and recursion?
    You can demonstrate how the function calls fill the stack and how the final
    result is built up. The arguments "are put pn each other in the stack" and
    finally the result will calculated from the top to bottom.
  */
