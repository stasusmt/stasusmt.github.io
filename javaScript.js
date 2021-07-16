// JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry
// on forms;
// with dynamic styling; with Animation, etc. This articles helps you get started with JavaScript and furthers your understanding of what is possible

/*
What is JavaScript?
javaScript ("JS" for short) is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the server-side, using a runtime such as Node.js
JavaScript should not be confused with the
 Java programming language. Although "Java" and "JavaScript"
 Although "Java" and "JavaScript" are trademarks (or registered trademarks) of Oracle in the U.S. and other countries, the two programming languages are significantly different in their syntax, semantics, and use cases.
JavaScript is primarily used in the browser, enabling developers to manipulate eebpage content through the DOM- Document Object Model,
manipulate data with AJAX and IndexedDB, draw graphics with canvas, interact with the device running the browser through various APIs, anh more
. JavaScript is one of the world's most commonly used languages, owing to the recent growth and performance improvement of APIs available in browsers.

Origins and History
Conceived as a server-side language by Brendan Eich (then employed by the Netscape Corporation), JavaScript soon came to Netscape Navigator 2.0 in September 1995.
JavaScript enjoyed immediate success and Internet Explorer 3.0 introduced JavaScript support under the name JScript in August 1996.
In November 1996, Netscape began working with ECMA International to make JavaScript an industry standard.
Since then, the standardized JavaScript is called ECMAScript and specified under ECMA-262
whose latest (eleventh, ES2020) edition is available as of June 2020.
Recently, JavaScript's popularity has expanded even further through the successful Node.js platform—the most popular cross-platform JavaScript runtime environment outside the browser.
Node.js - built using Chrome's V8 JavaScript Engine - allows developers to use JavaScript as a scripting language to automate things on a computer and build fully functional HTTP and WebSockets servers.
JavaScript is a fun and flexible programming language. It’s one of the core technologies of web development and can be used on both the front-end and the back-end.

Why we love it:
Versatile and robust
Front-End friendly
Back-End friendly

*/

/* 
Introduction
This chapter introduces JavaScript and discusses some of its fundamental concepts.

This guide assumes you have the following basic background:
    * A general understanding of the Internet and the World Wide Web (WWW).
    * Good working knowledge of HyperText Markup Language (HTML).
    *Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.

The JavaScript documentation on MDN includes the following:

    * Learn Web Development provides information for beginners and introduces basic concepts of programming and the Internet.
    * JavaScript Guide (this guide) provides an overview about the JavaScript language and its objects.
    * JavaScript Reference provides detailed reference material for JavaScript.
    * 
    * 
    * 
What is JavaScript?
JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactiv(e.g having complex animations, clickable buttons, popup menus, etc.) There are also more advanced server side versions of JavaSCript such as Node.js, which allow you to add more funtionality to a website than downloading files (such as realtime collaboration between multiple computers).
Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its
environment to provide programmatic control over them.

JavaScript contains a standard library of objects, such as Array, Date, and Math, and o core set of language elements such as operators, control structures, and statements. Core JavaSCript can be extended for a variety of purposes by suppementing it with additional objects; for example:
    Client-side JavaScript extends the core langueage by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
    Server-side JS extends the core language by supplying objects relevant to running JS on a server. For ex,
    server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.
This means that in the browser, JavaScript can change the way webpage (DOM) looks. And likewise, Node.js JS on the server can respond to custom requests from code written in the browser

JavaScript and Java

JavaScript and Java are similar in some ways but fundamentally different in some others
The JavaScript language resembles Java but does not have Java's static typing and strong type checking
. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.
In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. 
JavaSCript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaSCript also supports funtions without any special declarative requirements.
Functions can be properties of objects, executing as loosely typed methods.
JavaScript is a very free form language compared to Java, You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and  you do not to have to implement interfaces. Variables, parameters, and function return types are not explicitly typed
Java is a class-based programming language designed for fast execution and type safety.
Mean that, for instance, that you can't cast a Java integer into an object reference or access private memory by corrupting Java Bytecodes. Java's class-based model means that programs consist exclusively of classes and their methods.
Java's class inheritance and strong typing generally require tightly coupled object hierachies. These requirements make Java programming more complex than JavaScript programming.
In contrast , JavaScript descends in spirit from a line of smaller, dynamically typed languages such as HyperTalk and dBASE. The scripting languages offer programming tools to a much wider audience because of their easier syntax, specialized built-in functionality, and minimal requirements for object creation.
JavaScript compared to Java
JavaScript:
    *Object-oriented. No distinction between types of objects.
    *Inheritance is through the prototype mechanism, and properties and methods can be added to any object dynamically.
    * Variable data types are not declared (dynamic typing, loosely typed).
    * Cannot automatically write to hard disk.
    * 

Java: 
    * Class-based. Objects are divided into classes and instances with all inheritance through the class hierarchy.
    * Classes and instances cannot have properties or methods added dynamically.
    * Variable data types must be declared (static typing, strongly typed).
    * Can automatically write to hard disk.






































 */

/* 
JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms;
with dynamic styling; with animation, etc. This article helps you get started with JavaScript and furthers your understanding of what is possible.
JavaScript ("JS" for short) is a full-fledged dynamic programming language that can add interactivity to a website
It was invented by Brendan Eich (co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation).
JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!
JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:
Browser Application Programming Interfaces (APIs) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.
Third-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Twitter or Facebook.
Third-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.
It's outside the scope of this article—as a light introduction to JavaScript—to present the details of how the core JavaScript language is different from the tools listed above. You can learn more in MDN's JavaScript learning area, as well as in other parts of MDN.

The section below introduces some aspects of the core language and offers an opportunity to play with a few browser API features too. Have fun!

A Hello world! example

JavaScript is one of the most popular modern web technologies! As your JavaScript skills grow, your websites will enter a new dimension of power and creativity.
However, getting comfortable with JavaScript is more challenging than getting comfortable with HTML and CSS. You may have to start small, and progress gradually. To begin, let's examine how to add JavaScript to your page for creating a Hello world! example. (Hello world! is


*/
const myHeading = document.querySelector('h1'); 
myHeading.textContent = 'Hello world! ';

























































