// JavaScript for any interactive elements can go here
// Example: Change text on button click

document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.querySelector('.welcome-section h1');
    
    welcomeMessage.addEventListener('click', () => {
        welcomeMessage.textContent = "Have a great day!";
});
});

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const MineBotToggler = document.querySelector(".MineBot-toggler");
const MineBotCloseBtn = document.querySelector(".close-btn");


let userMessage;
const API_KEY ="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";


const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;

    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
    }

    const generateResponse = (incomingChatLi) => {
        const API_URL = "https://api.openai.com/v1/chat/completions";
        const messageElement = incomingChatLi.querySelector("p");
        // Define the properties and message for the API request
        const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: userMessage}]
        })
    }
        fetch(API_URL, requestOptions).then(res => res.json()).then(data =>{
            messageElement.textContent = data.choices[0].message.content;
            }).catch((error) => {  
                messageElement.classList.add("error");
            messageElement.textContent = "Oops! Something went wrong. Please try again.";
            }).finally(() =>  chatbox.scrollTo(0, chatbox.scrollHeight));
    }
    const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi (userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLi); 
         generateResponse(incomingChatLi);
    }, 600);
    }

   
    sendChatBtn.addEventListener("click", handleChat);
    MineBotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-Minebot"));
    MineBotToggler.addEventListener("click", () => document.body.classList.toggle("show-Minebot"));





