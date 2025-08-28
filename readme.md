# Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById -> to find an element with a specific ID we use this.  
- getElementsByClassName -> to find multiple elements with the same class we use this.  
- querySelector -> In a HTML file, we can have multiple elements with the same class name. Using querySelector, we can select the **first element** that matches that class. It returns a single object, which we can use to do a special task on that element.
- querySelectorAll -> In a HTML file, we can have multiple elements with the same class name. Using querySelectorAll, we can select **all elements** that match that class. It returns a NodeList (like an array) so we can do something on each element.
 


# Question 2: How do you create and insert a new element into the DOM?

- To create and insert a new element into the DOM, first we declare an id on a parent element in the HTML file like a `div`, `h1`, or `p`. 
<div id="parent"></div>
Secondly in the JS file, we get that parent element by its id using getElementById -> const parentDiv = document.getElementById("parent");
Thirdly, we create a new element using createElement -> const newDiv = document.createElement("div");
After that, we can add content to it using innerText or innerHTML -> newDiv.innerText = "Hello World";
Finally, we insert it into the DOM using appendChild -> parentDiv.appendChild(newDiv);



# Question 3. What is Event Bubbling and how does it work?

- Event Bubbling is when an event starts from the innermost element and then moves up to its parent element. For example, If you click a button inside a div, the click first happens on the button, then bubbles to the div, then the body, and so on until it reaches the top of the page.  
Event Bubbling is useful because parent elements can also respond to events on their child elements without adding separate event listeners to each child.



# Question 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is when we add an event listener to a parent element instead of adding it to many child elements. It works because of Event Bubbling. When a child element is clicked, the event goes up to the parent, and the parent can check which child was clicked.  

It is useful because:  
- We don’t need to add event listeners to each child separately.  
- It saves memory and works for dynamically added elements.  

Example:  
If we have a list of buttons inside a div, instead of adding a click listener to each button, we can add one listener to the div and handle clicks on any button inside it.



# Question 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() -> stops the default action of an element from happening.  
  Example: clicking on a link will not open a new page, or submitting a form will not refresh the page.  

- stopPropagation() -> stops the event from bubbling up to parent elements.  
  Example: clicking a button inside a div will not trigger the div’s click event.  

