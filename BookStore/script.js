let booksArr = [];

//book Object constructor
function book(title, quantity, value) {
    this.title = title;
    this.quantity = quantity;
    this.value = value;
}

// 'store' object with store name, inventory list, and the earnings
const store = {
    storeName: "Sam Book Store",
    inventory: booksArr,
    earnings: 0
}


//Functions

//Book Adding
function addBook(title, quantity, value) {
    let constVar = new book(title, quantity, value);
    let namesArr = searchTitle();

    if (namesArr.includes(title)) {
        console.log("Sorry But this book: '" + title + "' already exists in the library, Please process restocking instead...");
    }
    else {
        console.log("Book titled: '" + title + "' Adding Successful !");
        booksArr.push(constVar);
    }
}


//Book Restocking
function restockBook(title, quantity) {
    let namesArr = searchTitle();

    if (namesArr.includes(title)) {
        for (i = 0; i < booksArr.length; i++) {
            if (booksArr[i].title === title) {
                booksArr[i].quantity = booksArr[i].quantity + quantity;
            }
        }
        console.log("Restocking of book titled: '" + title + "' Successful ! ");
    }
    else {
        console.log("Cannot Restock non-existing book, Please add it first...");
    }
}

//Book Selling

function sellBook(title, quantity) {
    let namesArr = searchTitle();
    let total = 0;
    let inventoryStock = 0;

    if (namesArr.includes(title)) {
        for (i = 0; i < booksArr.length; i++) {
            inventoryStock = booksArr[i].quantity;

            total = quantity * booksArr[i].value;

            if (quantity > inventoryStock) {
                console.log("Only " + inventoryStock + " Stocks Left");
            }
            else {
                if (booksArr[i].title === title) {
                    booksArr[i].quantity = booksArr[i].quantity - quantity;

                    store.earnings += total;
                    console.log("Successful Transaction!\nBook Title: " + title + "\nTotal price: " + total);
                }
            }
        }

    }
    else {
        console.log("'" + title + "' Out of Stock...");
    }
}


//Show Store Total Earning

function totalEarnings() {
    console.log(store.storeName);
    console.log("Total Earnings: " + store.earnings);
}

function searchTitle() {
    let namesArr = [];

    for (i = 0; i < booksArr.length; i++) {
        namesArr.push(booksArr[i].title)
    }

    return namesArr;
}

function listInventory() {
    console.log("Books Inventory/Library\n")
    for (i = 0; i < booksArr.length; i++) {
        console.log("Book Title: '" + booksArr[i].title + "'  Qty: " + booksArr[i].quantity + "  Value: " + booksArr[i].value)
    }
}

//Logic for adding books

/*  let elem = new book("Sam Book", 10, 15);
 let elem2 = new book("Sam2", 10, 30);

booksArr.push(elem);
booksArr.push(elem2); */


//Logic for getting book titles
/* let namesArr = [];
 for (i = 0; i < booksArr.length; i++) {
     namesArr.push(booksArr[i].title)
}

console.log(namesArr);

console.log(namesArr.includes("Sam Book"));
 */


//Display books inventory Array
/* console.log(booksArr); */

//Logic for adding/restocking book quantity
/* for (i = 0; i < booksArr.length; i++) {
    if (booksArr[i].title === "Sam2") {
        booksArr[i].quantity = booksArr[i].quantity + 100;
   }
} */


console.log(store);
