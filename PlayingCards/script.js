
let arr = [
    "♢3", "♣10", "♠3", "♣8", "♢4", "♣4", "♣5", "♠Q", "♢8", "♢9", "♢K", "♡J", "♢A", "♢2", "♡2", "♡7", "♡6", "♡3", "♠5", "♣Q", "♣J", "♣7", "♠7", "♢7", "♠J", "♡A", "♠6", "♢5", "♡Q", "♣9", "♡9", "♢J", "♠8", "♡8", "♡4", "♣3", "♣6", "♢10", "♡5", "♠4", "♣A", "♡10", "♠2", "♡K", "♢Q", "♠K", "♢6", "♠A", "♠9", "♣2", "♠10", "♣K"
];

let arr2 = arr.slice();
Shuffle(arr2);
let history = [];

let dispHistory = document.getElementById("dealingHistory");
let deck = document.getElementById("cardDeck");
let card = document.getElementById("cardDealt");

deck.innerHTML = arr2;
dispHistory.innerHTML = history;

function toName(num) {
    switch (num) {
        case "A":
            return "Ace"
            break;
        case "1":
            return "One"
            break;
        case "2":
            return "Two"
            break;
        case "3":
            return "Three"
            break;
        case "4":
            return "Four"
            break;
        case "5":
            return "Five"
            break;
        case "6":
            return "Six"
            break;
        case "7":
            return "Seven"
            break;
        case "8":
            return "Eight"
            break;
        case "9":
            return "Nine"
            break;
        case "10":
            return "Ten"
            break;
        case "J":
            return "Jack"
            break;
        case "Q":
            return "Queen"
            break;
        case "K":
            return "King"
            break;
    }
}

function dealCard(arr) {
    let arr3 = arr;
    let randomCard = arr3[Math.floor((Math.random() * arr2.length))];
    // let rem = arr3.splice(1, 1);
    let rem = arr3.splice(arr3.indexOf(randomCard), 1);

    let num;
    if (randomCard[2] != undefined) {

        num = randomCard[1] + randomCard[2];

    } else {
        num = randomCard[1];
    }

    if (randomCard[0] === "♣") {
        card.innerHTML = toName(num) + " of Clovers" + " - " + num + "♣";
    } else if (randomCard[0] === "♠") {
        card.innerHTML = toName(num) + " of Spades" + " - " + num + "♠";
    } else if (randomCard[0] === "♡") {
        card.innerHTML = toName(num) + " of Hearts" + " - " + num + "♡";
    } else if (randomCard[0] === "♢") {
        card.innerHTML = toName(num) + " of Diamonds" + " - " + num + "♢";
    }

    // card.innerHTML = rem;
    history.push(rem);
    deck.innerHTML = arr3;
}


function ClearHistory(arr) {
    arr.splice(0, arr.length);
}

document.getElementById('dealButton').addEventListener(
    'click',
    function (e) {
        dealCard(arr2);
        dispHistory.innerHTML = history;
        document.getElementById('selectHistory').textContent = history[0];
        nextBtn.disabled = false;
    }
);

let i = 0;

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let shflBtn = document.getElementById("reshuffle");

if (i === 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
}
else {
    prevBtn.disabled = false;
}

let selectHist = document.getElementById('selectHistory');

selectHist.textContent = history[0];

function nextItem() {
    i = i + 1; // increase i by one
    i = i % history.length; // if we've gone too high, start from `0` again
    if (i === history.length - 1) {
        nextBtn.disabled = true;
    }
    else {
        nextBtn.disabled = false;
    }
    return history[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = history.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    if (i === 0) {
        prevBtn.disabled = true;
    }
    else {
        prevBtn.disabled = false;
    }
    return history[i]; // give us back the item of where we are now
}


prevBtn.addEventListener(
    'click',
    function (e) {
        document.getElementById('selectHistory').textContent = prevItem();
        nextBtn.disabled = false;
    }
);

nextBtn.addEventListener(
    'click',
    function (e) {
        document.getElementById('selectHistory').textContent = nextItem();
        prevBtn.disabled = false;
    }
);
function Shuffle(arr) {
    console.log("Shuffled");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}
shflBtn.addEventListener(
    'click',
    function (e) {
        if (history.length > 0) {
            let rem6 = history.splice(0, history.length);
            arr2.push(rem6);
        }


        selectHist.innerHTML = "";
        dispHistory.innerHTML = history;
        location.reload();
    }
);







