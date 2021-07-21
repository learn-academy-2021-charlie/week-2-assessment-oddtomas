# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer: An iteration is the process of repeating code until a specified condition is met. This process can be seen with the concept of loops in programming where the loop will start at a set point, run until the set parameters are met such as the length of an array, or while "i" is less than a certain number, and it will perform an action like increase, decrease, or whatever you want each iteration. 

  Researched answer: Often in algorithms a group of statements need to be executed again and again until a condition is met, this is an iteration. Iterations are extremely useful and versitile in code. For and while loops are examples of iterations and enable more functionality in code helping us do things like search through containers like arrays or even help solve complex programs. Iterations are extremely useful to perform a lot of actions relatively quickly and take advantage of a computers processing power. 



2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: .map() takes three predefined parameters which are value, index, and array. Only one is required and it can be any of them depending on what you want out of the .map function. 

  Researched answer: The map function creates a new array populated with the results of calling a provided function. Map is a higher order function which takes a function as a parameter or returns a function. The predefined parameters are the element, index. and array. The element is required and the index and array are optional. The map function does not mutate the array.



3. What is object destructuring?

  Your answer: Object destructuring is when you essentially assign the object to a variable so that the objects attributes can be accessed from outside of the object easier. 

  Researched answer: Destructuring is a js expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables. This is useful because you can take those properties from the object and make them easily recallable/accessible from the assigned variable. Normally to call the objects value it would look something like "obj.key" but with object destructuring you can just call the variable you assign it to like if I did "var {key1, key2} = obj" I can access those keys that are in the object with something like "console.log(key1)" and see the value at key1.



4. What is the difference between an object and a class?

  Your answer: The difference between an object and a class is that the class is the blueprint for objects. The class lays a foundation for you to call upon to create different objects. The class sort of acts similarly to how functions can take in parameters to produce different outputs depending on what arguments are passed to it. Depending on what you pass to the class' constructor you will get a different object output each time. The object itself is a essentially another sort of container of information. Classes can be larely customizable to be unique and specific to something, such as a car class having specific methods or attributes that make sense to a car.

  Researched answer: A class is a blueprint/holder that defines properties, methods that objects can have. An object is an instatiated version of the class with the actual properties and methods defined. The relationship between a class and an object is similar to how a blueprint and house work. A blueprint will have the general outline and specifications and the house itself will be built with the actual specific details like color, furniture, etc. Classes use something called constructors to take in parameters to fill up and create objects. 



5. Why would you use the method super()?

  Your answer: You would use the method super() when you are dealing with inheritance and a child class. The super method allows a child class to inherit the attributes of the parent class it is inheriting from. For example if the orignal/generic/parent class has attributes like this.color, when making a child class by putting super() inside of the constructor now gives the child class the attribute of this.color.

  Researched answer: Super is used to access and call functions on an object's parent. Extends and super() is used together in a child class to pass on everything within the parent class to the child class. Super specifically will "copy" the contents of the parent class' contructor into the child class' constructor. 



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I have no idea, perhaps it has something to do with pulling stuff in; literally hoisting. 

  Researched answer: Hoisting in JS is a behavior that moves all declarations to the top of the current scope, enabling a variable to be used before it's declared. This is because in JS variables and function declarations are processed before any code is executed. However JS will not hoist initializations of variables only the declaration so an incomplete understanding of hoisting can and will cause bugs, this is why it's the best practice to declare your variables at the top of the scope in the first place. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React: React is a js library used for building small component or a piece of the user interface and combining it all together to make complex websites, apps, etc. React helps us essentially make a tree of components to make one complete product. 

2. React lifecycle methods: These methods describe the stages that a component goes through in its life cycle. The phases of a react component are mounting, updating, and unmounting. There are lifecycle methods that help the component work through each cycle. 

3. React state: In react state is an object that stores the property values that belong to a react component. The react component "reacts" to changes in the state.

4. Component invocation/call: Calling in react functions similarly to calling a function. In react you can call components from other components like from a child component to the main component because react is like a big tree of components stemming from eachother. 

5. DOM Events: DOM events allow JS to register different events on elements on an HTML document. 