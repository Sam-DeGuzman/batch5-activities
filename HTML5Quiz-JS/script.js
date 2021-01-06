//Made by Sam
alert("Open Console and invoke startQuiz(); to start !");

let questions = ["What does HTML stand for?",
    "How many tags are in a regular element?",
    "what is the difference in an opening tag and a closing tag?",
    "<br/> What type of tag is this?",
    "<body> Is this an opening tag or a closing tag?",
    "</body > Is this an opening tag or a closing tag?",
    "Where is the meta tag only found?",
    "Which is the correct way to tag an image?",
    "What is an element that does not have a closing tag called?",
    "Which of the following is an example of an empty element?",
    "What should values always be enclosed in?",
    "Where do all items for the same web site need to be saved?",
    "What does < a  href = ”http://www.google.com“ title = ”Link to Google ”target = ”_blank”>Google</a> do?",
    "What is always a welcome page, and explains the purpose or topic of the site?",
    "What does View Source do?"
];

function selectQuestion() {
    let select = questions.slice();

    let randomQuestion = select[Math.floor((Math.random() * select.length))];

    return select.indexOf(randomQuestion);

}

function startQuiz() {
    let selectedQuestion = selectQuestion();
    console.log(questions[selectedQuestion]);
    showChoices(selectedQuestion);

    let answer = parseInt(prompt());
    // console.log(selectedQuestion);
    // console.log(answer);
    // console.log(typeof (selectedQuestion));
    // console.log(typeof (answer));

    checkAnswer(selectedQuestion, answer);
}

function showChoices(index) {
    let choices = ["1) Hyper Text Markup Language",
        "2) Hot Mail", "3) How to Make Lasagna"];
    let choices1 = ["1) 2", "2) 1", "3) 3"];
    let choices2 = ["1) Opening tag has a / in front", "2) Closing tag has a / in front", "3) There is no difference"];
    let choices3 = ["1) Break tag", "2) A broken one", "3) An opening tag"];
    let choices4 = ["1) Opening", "2) Closing"];
    let choices5 = ["1) Opening", "2) Closing"];
    let choices6 = ["1) The last page", "2) The home page", "3) The second page"];
    let choices7 = ["1) src=”image.jpg/gif” alt=”type some text”", "2) Src=”image.jpg/gif” alt=”type some text”", "3) <img src=”image.jpg/gif” alt=”type some text”>"];
    let choices8 = ["1) Tag", "2) Empty element", "3) Closed element"];
    let choices9 = ["1) <img/>", "2) <img> </img>", "3) </img>"];
    let choices10 = ["1) Quotation marks", "2) Commas", "3) Parenthesis"];
    let choices11 = ["1) In the same folder", "2) Where ever is fine", "3) In different folders"];
    let choices12 = ["1) Adds a link to google on the page", "2) Adds a search engine to the page", "3) Nothing"];
    let choices13 = ["1) Page 4", "2) Homepage", "3) Table of contents"];
    let choices14 = ["1) Nothing", "2) Brings up a note pad with the HTML code already used for the site.", "3) Opens a new website."];

    switch (index) {
        case 0:
            for (let i = 0; i < choices.length; i++) {
                console.log(choices[i]);
            }
            break;
        case 1:
            for (let i = 0; i < choices1.length; i++) {
                console.log(choices1[i]);
            }
            break;
        case 2:
            for (let i = 0; i < choices2.length; i++) {
                console.log(choices2[i]);
            }
            break;
        case 3:
            for (let i = 0; i < choices3.length; i++) {
                console.log(choices3[i]);
            }
            break;
        case 4:
            for (let i = 0; i < choices4.length; i++) {
                console.log(choices4[i]);
            }
            break;
        case 5:
            for (let i = 0; i < choices5.length; i++) {
                console.log(choices5[i]);
            }
            break;
        case 6:
            for (let i = 0; i < choices6.length; i++) {
                console.log(choices6[i]);
            }
            break;
        case 7:
            for (let i = 0; i < choices7.length; i++) {
                console.log(choices7[i]);
            }
            break;
        case 8:
            for (let i = 0; i < choices8.length; i++) {
                console.log(choices8[i]);
            }
            break;
        case 9:
            for (let i = 0; i < choices9.length; i++) {
                console.log(choices9[i]);
            }
            break;
        case 10:
            for (let i = 0; i < choices10.length; i++) {
                console.log(choices10[i]);
            }
            break;
        case 11:
            for (let i = 0; i < choices11.length; i++) {
                console.log(choices11[i]);
            }
            break;
        case 12:
            for (let i = 0; i < choices12.length; i++) {
                console.log(choices12[i]);
            }
            break;
        case 13:
            for (let i = 0; i < choices13.length; i++) {
                console.log(choices13[i]);
            }
            break;
        case 14:
            for (let i = 0; i < choices14.length; i++) {
                console.log(choices14[i]);
            }
            break;
    }
}

function checkAnswer(question, answer) {
    if (question === 0 && answer === 1) {
        console.log("Correct!");
    }
    else if (question === 1 && answer === 1) {
        console.log("Correct!");
    }
    else if (question === 2 && answer === 2) {
        console.log("Correct!");
    }
    else if (question === 3 && answer === 1) {
        console.log("Correct!");
    }
    else if (question === 4 && answer === 1) {
        console.log("Correct!");
    }
    else if (question === 5 && answer === 2) {
        console.log("Correct!");
    }
    else if (question === 6 && answer === 2) {
        console.log("Correct!");
    }
    else if (question === 7 && answer === 3) {
        console.log("Correct!");
    }
    else if (question === 8 && answer === 2) {
        console.log("Correct!");
    }
    else if (question === 9 && answer === 1) {
        console.log("Correct!");
    }
    else if (question === 10 && answer === 1) {
        console.log("Correct!");
    }
    else if (question === 11 && answer === 1) {
        console.log("Correct!");
    }
    else if (question === 12 && answer === 1) {
        console.log("Correct!");
    }
    else if (question === 13 && answer === 2) {
        console.log("Correct!");
    }
    else if (question === 14 && answer === 2) {
        console.log("Correct!");
    }
    else {
        console.log("Wrong!");
    }
}