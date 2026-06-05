// In your index.js file, using DOM manipulation, add a 'footer' child element to your index.html. 
// Be careful on this step, as different DOM methods (append, appendChild, lastChild, etc.) have different placements.
// Remember that you can store the elements in variables to reference the variables and call methods on them to more easily follow your code.
//  (It's easier to read body.innerHTML than it is to read document.getElementsByTagName("body").innerHTML)//

//the document keyword represents the html as an object and includes all of the elements on the html as objects as well. 
// console.log(document.body);


//creating a footer child element in the html, adding content, and adding it to the html page
const footer = document.createElement("footer");
// footer.textContent = "HELLO FOOTER!"
document.body.appendChild(footer); //selected document body and added the footer element as a child to the body element.

//changing the style of an element - footer
footer.style.color = 'rgb(239, 242, 249)';
document.body.style.background ="#000000";
footer.style.textAlign = 'center';

//create a new variable and add the date, then we want to extract the year and assign it to a variable, then we will use that variable to add the year to the footer content.
const today = new Date();
const thisYear = today.getFullYear();

//assign the date to the footer using DOM selection to grab the footer node and modify the content 

const footerDate =  document.querySelector('footer'); //this selects the footer element and stores it in a variable

//ADDING THE COPYRIGHT TEXT TO THE FOOTER
const c = "\u00A9"; // unicode for the copyright symbol

const copyright = document.createElement('p'); //creates a p element within a var 
copyright.textContent = ` Copyright ${c} ${thisYear} Faith M. Lewis. All Rights Reserved. `; //adding the text content as a template literal 
//Append (add) the copyright element to the footer using "DOM Manipulation" - Select the footer and add the copyright element as a child to the footer element.
footerDate.appendChild(copyright); //this adds the copyright element as a child to the footer element.


//creating a skills array for the skills section of the html page 

const skills = ["☆", "HTML", "☆", "CSS", "☆", "JavaScript","☆", "Project Management", "☆", "Marketing & Communications", "☆"];

const skillsSection = document.getElementById("skills") //select the skills section in the document using the id, store in a var
const skillsList = skillsSection.querySelector("#skillsList"); //create a var for the ul element in the html 

//  Create a variable named skillsSection and use "DOM Selection" to select the skills section by id
// hint: querySelector or getElementById method
//  Create a variable named skillsList and use "DOM Selection" to query the skillsSection (instead of the entire document) to select the <ul> element you created earlier in this assignment

//create a for loop to iterate over the skills array, then create a skill variable inside to create a new list item
for(let i=0; i < skills.length; i++){

     const skill = document.createElement('li');  //creating our list element within the skillsList ul 
     skill.textContent = skills[i];                  //adding the value at the index 
     skillsList.appendChild(skill);                 //append to the page
}; 

skillsList.style.color = 'rgb(239, 242, 249)';




//  Create a for loop to iterate over your skills Array
//  Inside the loop, create a variable named skill to create a new list item (li) element
// hint: createElement method
//  Still inside the loop, use the skill variable to set the inner text to the current Array element
// hint: access the Array element using bracket notation
//  The last thing we'll do inside the loop is append the skill element to the skillsList element
// hint: appendChild method
// Save and refresh your browser (or just check your browser for changes if using live extension)
// You should see your list of skills beneath the "Skills" heading

//Q: Why are we creating a variable instead of just work directly on the skill section; is it because skills in a variable? Are we turning
//the skills section into a variable, so it can be used in the function?

//HANDLING A MESSAGE FORM SUBMISSION

//create a variable that uses DOM selection to select the name attribute of the message form
const messageForm = document.querySelector('form[name="leave-message"]');

//add an event listener that handles the "submit" event
//inside the callback function, create three new variables (one for each of the three form fields) and retrieve the value from the event
messageForm.addEventListener('submit', event => {
     event.preventDefault();

     const usersName = event.target.usersName.value;    //we use .target because we have already referenced the form
     const usersEmail = event.target.usersEmail.value;            //It means Get the name of the element where the event occurred: shorthand for the query process
     const usersMessage = event.target.usersMessage.value;

     console.log("Name:",usersName, "Email:", usersEmail, "Message:",usersMessage);

     const messageSection = document.getElementById("messages")
     const messageList = messageSection.querySelector("#message-list")
     const newMessage = document.createElement('li');

     newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
     <span> ${usersMessage}</span>`;

     const removeButton = document.createElement("button");
     removeButton.innerText = "remove";
     removeButton.type = "button";

     removeButton.addEventListener("click", (event) => {
  const entry = event.target.parentNode;
  entry.remove();
     });

     newMessage.appendChild(removeButton);
     messageList.appendChild(newMessage);
     messageForm.reset(); //clears form fields after submission

} );