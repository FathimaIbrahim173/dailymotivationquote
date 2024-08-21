const inspirations = [
    {
        quote: "Believe you can and you're halfway there. - Theodore Roosevelt",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCByAUeBkzbenYcP90odEqKQkeUljXgQk4CQ&s",
        trivia: "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!"
    },
    {
        quote: "Your limitation—it's only your imagination.",
        image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIM_IaG9Lpwy161Fi5jD8EXsVjfACMTl4CLQ&s",
      trivia: "Did you know? Bananas are berries, but strawberries aren't!"
    },
    {
        quote: "Push yourself, because no one else is going to do it for you.",
        image:" https://www.google.com/imgres?q=push%20yourself%20because%20no%20one%20else%20is%20going%20to%20do%20it%20for%20you&imgurl=https%3A%2F%2Fi.redd.it%2F4pos7qugemd91.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FMotivationalPics%2Fcomments%2Fw7c5er%2Fpush_yourself_because_no_one_else_is_going_to_do%2F&docid=Jepz6hPRaG0svM&tbnid=6wJLZN84EuVsuM&vet=12ahUKEwjJ6oKK_PuHAxVd9zgGHZywDNoQM3oECDMQAA..i&w=649&h=649&hcb=2&ved=2ahUKEwjJ6oKK_PuHAxVd9zgGHZywDNoQM3oECDMQAA",
        trivia: "Did you know? A group of flamingos is called a 'flamboyance'."
    },
    {
        quote: "Great things never come from comfort zones.",
        image: "https://www.google.com/imgres?q=great%20things%20never%20came%20from%20comfort%20zones&imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb3%2F96%2F93%2Fb396935fb779f9a664901c3849ba72a2.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F538391330430146057%2F&docid=mPxbEL9IbMIRZM&tbnid=6GeQbSsp5BS2NM&vet=12ahUKEwiV_5rd_fuHAxVk1jgGHQlnE5AQM3oECE0QAA..i&w=640&h=960&hcb=2&ved=2ahUKEwiV_5rd_fuHAxVk1jgGHQlnE5AQM3oECE0QAA",
        
        trivia: "Did you know? Octopuses have three hearts and blue blood."
    }
];

// Function to handle "Get Inspired!" button click
function getInspiration() {
    // Get a random inspiration object from the array
    const randomInspiration = inspirations[Math.floor(Math.random() * inspirations.length)];
    
    // Get references to the elements
    const quoteElement = document.getElementById("quotes");
    const imageElement = document.getElementById("image");
    
    
    
    // Update content after a short delay to allow for fade-out
    setTimeout(() => {
        // Update the content with new inspiration
        quoteElement.textContent = randomInspiration.quote;
        imageElement.src = randomInspiration.image;
        
        
    }, 300); // Adjust the delay as needed for smooth transitions
}
