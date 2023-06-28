import image from "./images/chatbot.png";
import { useState, useRef } from "react";

function ChatBot() {

    const humanMessage = useRef();
    const botmessage = useRef();
    const input = useRef();

    const date = new Date();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [time, setTime] = useState(`${hours}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
    const [dateTime, setDateTime] = useState(
        `${days[day]}, ${months[month]} ${year}`
    ); //using the useState hook to get the data from the local date and set it to the dateTime variable

    const checkStatus = (e) => {
        let isActive = true;
        if (dateTime === "Wednesday, April 01 2023") {
            //if the dateTime is Mondayday, April 01 2023, the bot will be inactive
            isActive = false;
        }
        const status = document.querySelector(".status");
        // selecting the status class
        if (isActive === true) {
            //if the bot is active
            status.innerHTML = "Active";
            status.style.color = "green";
        } else {
            status.innerHTML = "Not Active";
            status.style.color = "red";
        }
    };
    
    const handleInput = () => {

        const inputRef = input.current;
        const getHumanMessage = humanMessage.current;
        const getBotMessage = botmessage.current;

        let badwords = ["fuck|bad|stupid|useless|sex|crazy|nonsense|mad"];
        let words = new RegExp(badwords);
        if (words.test(document.querySelector("#input").value)) {
            // if the input contains bad words
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "Please do not use bad words"; // display the message
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        let welcome = [
            "hi|hello|Hello|hey|hi|yo|wassup|whats up|hallo|greetings|good morning|good afternoon|good evening|hy"];
        let words2 = new RegExp(welcome);
        if (words2.test(document.querySelector("#input").value)) {
            const status = document.querySelector(".status");
            // if the input contains welcome words
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "Hello There, how may I help you?"; // display the message
                status.innerText = "Active";
                status.style.color = "green";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        let bye = ["bye|Bye|goodbye|see you later|tata|good night|good bye|I am done|end|by"];
        let words3 = new RegExp(bye);
        if (words3.test(document.querySelector("#input").value)) {
            const status = document.querySelector(".status");
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "Bye, have a nice day";
                inputRef.value = ""; // clear the input
            }, 2000);
            setTimeout(() => {
                status.innerText = "Not active";
                status.style.color = "red";
            }, 3000);
        }
        let thanks = [
            "Thanks|thanks|thank you|thank you very much|Thank you very much|Thank You|thnx",
        ];
        let words4 = new RegExp(thanks);
        if (words4.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "You are most welcome";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        let how = [
            "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
        ];
        let words5 = new RegExp(how);
        if (words5.test(document.querySelector("#input").value)) {
            const status = document.querySelector(".status");
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "I am fine, thank you";
                status.innerText = "Active";
                status.style.color = "green";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        let good = [
            "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
        ];
        let words6 = new RegExp(good);
        if (words6.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "😁";
                inputRef.value = ""; // clear the input
            }, 1000);
        }

        let response = [
            "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great|Good|good|fine|Fine",
        ];
        let words7 = new RegExp(response);
        if (words7.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "That is good";
                inputRef.value = ""; // clear the input
            }, 2000);
        }

        let nameAsk = [
            "What's your name|what's your name|What is your name|what is your name",
        ];
        let words8 = new RegExp(nameAsk);
        if (words8.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "My name is Bot";
                inputRef.value = ""; // clear the input
            }, 2000);
        }

        let owner = [
            "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
        ];
        let words9 = new RegExp(owner);
        if (words9.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "The owner of this bot is Complain Department";
                inputRef.value = ""; // clear the input
            }, 2000);
        }

        let ageAsk = [
            "What's your name|what's your name|What is your name|what is your name|your name| Your name",
        ]; //adding the age-question
        let words10 = new RegExp(ageAsk);
        if (words10.test(document.querySelector("#input").value)) {
            // if the input contains some question
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "My name is Bot";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        getHumanMessage.innerText = inputRef.value; // display the message


        let question1 = [
            "How to file complain|how to complain|How to complain|where to complain|Where to complain|complain how|Complain how",
        ]; //adding the age-question
        let words11 = new RegExp(question1);
        if (words11.test(document.querySelector("#input").value)) {
            // if the input contains some question
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "To file a new complain select an department from the available list of departments on homepage and fill the given form.";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        getHumanMessage.innerText = inputRef.value; // display the message

        let question2 = [
            "How to register|how to register|How to signup|how to signup|Where to register|where to register|register how|Register how| how register|How register",
        ]; //adding the age-question
        let words12 = new RegExp(question2);
        if (words12.test(document.querySelector("#input").value)) {
            // if the input contains some question
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "To Register to the website, visit the registration page using the navigation bar and fill the given form.";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        getHumanMessage.innerText = inputRef.value; // display the message

        let question3 = [
            "How to login|how to login|How to logged in|how to logged in|Where to login|where to login|login how|Login how| how login|How login",
        ]; //adding the age-question
        let words13 = new RegExp(question3);
        if (words13.test(document.querySelector("#input").value)) {
            // if the input contains some question
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "To Login to the website, visit the login page using the navigation bar and enter correct email & password.";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        getHumanMessage.innerText = inputRef.value; // display the message

        let question4 = [
            "Which department select|which department select|select which department|Select which department|choose which department|Choose which department",
        ]; //adding the age-question
        let words14 = new RegExp(question4);
        if (words14.test(document.querySelector("#input").value)) {
            // if the input contains some question
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "Select the correct department as per your complaint under smart city, the selected department is visible in complain form as well.";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        getHumanMessage.innerText = inputRef.value; // display the message

        let question5 = [
            "My department is not there|my department is not there|My department not visible|my department not visible|My department not available|my department not available|My department is not available|my department is not available",
        ]; //adding the age-question
        let words15 = new RegExp(question5);
        if (words15.test(document.querySelector("#input").value)) {
            // if the input contains some question
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "If your desired department is not available then you can visit the File Complain using navigation bar and the complain will be sent to the admin.";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        getHumanMessage.innerText = inputRef.value; // display the message

        let Other = [
            "Other|other|nothing|Nothing|nothing much|Not an issue|not an issue|not found|Not found|leave|Leave",
        ]; //adding the age-question
        let words16 = new RegExp(Other);
        if (words16.test(document.querySelector("#input").value)) {
            // if the input contains some question
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "You can visit Contact Us page and fill the given form for other queries.";
                inputRef.value = ""; // clear the input
            }, 2000);
        }
        getHumanMessage.innerText = inputRef.value; // display the message





    };





    return (
        <div className="App container-lg" onLoad={checkStatus}>
            <div className="wrapper">
                <div className="content">
                    <div className="header">
                        <div className="img">
                            <img src={image} alt="" />
                        </div>
                        <div className="right">
                            <div className="name">ChatBot</div>
                            <div className="status">Active</div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="main_content">
                            <div className="messages">
                                <div
                                    className="bot-message"
                                    id="message1"
                                    ref={botmessage}
                                ></div>
                                <div
                                    className="human-message"
                                    id="message2"
                                    ref={humanMessage}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="btm row">
                            <div className="input col">
                                <input
                                    type="text"
                                    id="input"
                                    placeholder="Enter your message"
                                    ref={input}
                                />
                            </div>
                            <div className="btn col">
                                <button onClick={handleInput}>
                                    <i className="fas fa-paper-plane"></i> Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBot;
