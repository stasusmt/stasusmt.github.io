/* @ 
Adding an image changer
In this section, you will learn how to use JavaScript and DOM API features to alternate the display of one of two images. This change will happen as a user clicks the displayed image.
Choose an image you want to feature on your example site. Ideally, the image will be the same size as the image you added previously, or as close as possible.














*/
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/pc1.jpg') {
        myImage.setAttribute('src','img/t440.png');
    }
        else {
            myImage.setAttribute('src', 'img/pc1.jpg')
        }
}


/* 
This is what happened. You stored a reference to your <img> element in the myImage variable.
Next, you made this variable's onclick event handler property equal to a function with no name

(an anounymous function). So every time this element is clicked:
1. The code retrieves the value of the image's src attribute.
2. The code uses a conditional to check if the src value is equal to the path of the original image:
    1. If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
    2. if it isn't(meaning it must already have changed), the src value swaps back the the original image path, to the original state.

Adding a personalized welcome message
Next, let's change the page title to a personalized welcome message when the user first visits the site.
 This welcome message will persist. 
Should the user leave the site and return later, we will save the message using the Web Storage API. 
 We will also include an option to change the user, and therefore, the welcome message.

*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
// This takes references to the new button and the heading, storing each inside variables:

function setUserName() {
    let myName = prompt('Please enter your name. ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName + " Have a nice day!";
    }
}


// The setUserName() function contains a promt() function, which displays a dialog box, similar to alert().

/*
This prompt() function does more than alert(), asking the user to enter data, and storing it in a variable after the user clicks OK
. In this case, we are asking the user to enter a name. Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name
Finally, we set the textContent of the heading to a string plus the user's newly stored name.
Add the if .. else block (below). We could call this initializarion code, as it structures the app when it first loads.

*/
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName + " Have a nice day!";
}
/* 
This first line of this block uses the negation operator (logical NOT, represented by the !)
to check whether the name data exists. If not, the setUserName()
function runs to create it. If it exists (that is, the user set a user name during a previous visit)
we retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name
as we did inside setUserName().
5. Put this onclick event handler (below) on the button. When clicked, setUserName() runs, this Allows the user to enter a different name by pressing the button.



*/

myButton.onclick = function() {
    setUserName();
}

/* 
A user name of null?

When you run the example and get the dialog box that prompts you to enter your user name, try pressing
the Cancel button. You should end up with a title that reads Mozilla is  cool, null, This happens because-- when you cancel the prompt--
the value is set as null. NULL is a special value in JavaScript that refers to the absence of a value.

Also, try clicking OK without entering a name. You should end up with a title that reads Mozilla is cool, for fairly obvios reasons.

To avoid these problems, you could check that the user hasn't entered a blank name. Update your setUserName() function to this:
In human language, this means: If myName has no value, run setUserName() again from the start. If it does have a value (if the above statement is not true), then store the value in localStorage and set it as the heading's text.
Conclusion
If you have followed all the instructions in this article, you should end up with a page that looks something like the image below. You can also view our version.





























*/