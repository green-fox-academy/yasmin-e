//  so far we were testing with console.log()
/*
- What does 'unit' means?
    A unit is the smallest fragment in our application. Usually a single
    function or a class without any dependency. Unit testing is ensuring that
    piece is working as expected.

- What is testing?
    Ensuring that the application is doing what is expected.
    It is important because 90% of the 'job' will be touching old code and
    not making your own projects (Ex. 90GB of code written by 1.4k people over 20y).

    1/'Unit testing' is not the only way to test the code.
    2/'Component testing' ensures that the application is able to store data into the files.
    3/'Integration testing' ensures that all components work correctly together.

    Test automation devs have to think like the user, to find the case where everything
    goes to shit. They have to know the code as a whole but not everything in great detail.

- What is a 3rd party package?
    A reusable component which was developed by other developers.

- Why would we use a 3rd party package?
    We don't want to reinvent the wheel. Although sometimes its necessary but
    in many cases you can develop your software faster if you use already
    working packages.

    Not last then its the other developers responsibility to maintain that code.

- What is a package manager?
    A package manager is a collection of software tools that automates the process
    of installing, upgrading, configuring, and removing computer programs.

    Common package managers:
    - npm (or yarn) for JavaScript world
    - Gradle (or Maven) for Java world
    - NuGet for C# world

- How can we install a 3rd party package?
    It is different for every package manager, you should check the
    documentation for the exact commands.

    There are usually 2 types of dependencies.

    Development dependencies are not required for running the application.
    For example testing framework or linter.

    Meanwhile dependencies are required for running the application.
    For example web framework or database connector.

- Why do we create automated tests?
    We want to make sure that if we change something in our code the previous
    functionalities are still working as expected. We could check it manually
    but that takes a lot of time.

- How can we avoid code duplication in our tests?
    Many test runners allow us to write methods which will run before or after
    each test case but even if its not available then you can organize the code
    into functions as usual.
*/
