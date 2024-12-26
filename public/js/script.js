

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

var user2 ={message:""};

var arrayofPossibleMessage = [
    {message:"hi", response:"Hello"},
    {message:"how are you?", response:"I'm doing well. How can I help you?"},
    {message:"how are you", response:"I'm doing well. How can I help you?"},
    {message:"what items do you have for sale?", response:"If you look through our website you might see a section on items we have for sale like oil filter, BMW engines, and BMW breaks."},
    {message:"what items do you have for sale", response:"If you look through our website you might see a section on items we have for sale like oil filter, BMW engines, and BMW breaks."},
    {message:"what type of cars parts do you have?", response:"We have a short selection. We currently only have BMW parts like engines, breaks, and oil filters."},
    {message:"what type of cars parts do you have", response:"We have a short selection. We currently only have BMW parts like engines, breaks, and oil filters."},
    {message:"what do you sell?", response:"Car parts. Currently only BMW parts."},
    {message:"what do you sell", response:"Car parts. Currently only BMW parts."},
    {message:"type of payments do you accept?", response:"We accept most credit cards and paypal."},
    {message:"payments?", response:"We accept most credit cards and paypal."},
    {message:"where are you located?", response:"There is a map location with our address on our website. Please refer to that for directions."},
    {message:"shipping?", response:"Currently we don't do any shipments."},
    {message:"do you do shipping?", response:"Currently we don't do any shipments."},
    {message:"do you do shipping", response:"Currently we don't do any shipments."},
    {message:"what's your name", response:"My name is chatbot."},
    {message:"what's your name?", response:"My name is chatbot."},
    {message:"what is your name?", response:"My name is chatbot."},
    {message:"your name?", response:"My name is chatbot."},
    {message:"can I speak to an agent?", response:"Sure. Let me transfer you over. One moment..."},
    {message:"any angent available?", response:"Sure. Let me transfer you over. One moment..."},
    {message:"no chatbot. agent please", response:"Sure. Let me transfer you over. One moment..."},
    {message:"who made you?", response:"Website and chatbot created by Carlos Canales"}

]

sendChatBtn.addEventListener('click', function(e){

    var smalluserMessage = chatInput.value;
    
    if(smalluserMessage == ""){
        alert('Please type in a message')
    }
    else{
        let smalluserMessageText = smalluserMessage.trim();
        user2.message = smalluserMessageText;
        chatInput.value = "";

        sendMessage2(smalluserMessageText);
        chatbotResponse2(smalluserMessageText);
    }
    
})
function sendMessage2(userMessage){
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin= "10px";

    messageElement.innerHTML = "<span> You: </span>" + "<span>" +userMessage+ "</span>";

    chatbox.appendChild(messageElement);
}

function chatbotResponse2(userMessage){

    var chatbotMessage = "";

    if(userMessage.length >= 5 || userMessage == "hi"){
        var result = arrayofPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));

        if(result.length > 0){
            var response = result[0].response;
            chatbotMessage = response;

        }
        else{
            chatbotMessage = "Couldn't understand that. Can you please send a message I can understand?";
        }
    }
    else{
        chatbotMessage = "Message was too short. Please send another message";
    }

    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span> Chatbot: </span>" + "<span>" +chatbotMessage+ "</span>";

    setTimeout(() =>{
        messageElement.animate([{easing: "ease-in", opacity: 0.4}, {opacity:1}], {duration:1000});
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000)

    
}



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  menu.classList.toggle('active');

};

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  menu.classList.toggle('active');
  
};

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
};

document.querySelector('#close-login-form').onclick =() =>{
  document.querySelector('.login-form-container').classList.remove('active');
};

window.onscroll =() =>{
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

window.onload =() =>{
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };
};

var swiper = new Swiper(".parts-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor:true,
  centeredSlide: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});