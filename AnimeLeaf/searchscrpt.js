const SEARCHCONTAINER = document.querySelector('#searchContent');
const SEARCHTYPE = document.querySelector("#inputGroupSelect01");
const SEARCH_INPUT = document.querySelector("#search-input");
const SEARCH_BTN = document.getElementById('search-btn');
const TEMP_IMG = document.getElementById('tempImg-container');
const SEARCH_INFO = document.getElementById('result-info');
const SEARCH_QUERY = document.getElementById('query');

let scrollDiv = document.getElementById('scrollDiv');
let scrollTop = document.getElementById('scrollTop');
let cardClasses = ['col-sm-6', 'col-md-4', 'col-lg-3', 'g-4'];
let cardInfoClasses = ['card-body', 'text-center'];
let successBdgCls = ['badge', 'bg-success'];  //0-3.33
let dangerBdgCls = ['badge', 'bg-danger'];//3.34-6.66
let warningBdgCls = ['badge', 'bg-warning'];//6.67-10
let infoBdgCls = ['badge', 'bg-secondary', 'text-light'];
let infoBdgCls2 = ['badge', 'bg-info', 'text-dark'];
let primBtnCls = ['btn', 'btn-primary', 'mt-2'];
let darkBtnCls = ['badge', 'btn-dark', 'text-light'];

const maxItems = 20;
let index = 1;
let article = document.getElementById('cardArticle');
let article2 = document.getElementById('cardArticle2');
let currentPage;


scrollDiv.style.display = 'none';

scrollTop.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})


SEARCH_BTN.addEventListener(
    'click', function () {
        scrollDiv.style.display = 'flex';
        TEMP_IMG.style.display = 'none';

        if (SEARCH_INPUT.value === '') {
            alert('Empty Input Field!');
            location.reload();
        }
        else {
            SEARCH_INFO.style.display = 'block';
            /* alert('Empty Input Field!' + SEARCHTYPE.value + " " + SEARCH_INPUT.value); */

            loadSearchtoDisplay(SEARCHTYPE.value, SEARCH_INPUT.value);

            SEARCH_QUERY.innerText = SEARCH_INPUT.value;

        }

    }
)

SEARCH_INPUT.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        SEARCH_BTN.click();
    }
});

function clr() {
    while (SEARCHCONTAINER.firstChild) {
        SEARCHCONTAINER.removeChild(SEARCHCONTAINER.firstChild);
    }
}

function loadSearchtoDisplay(type, query) {
    /*   var origStr = query;
      var slicedStr = origStr.substring(1, origStr.length - 1); */
    var obj;
    fetch(`https://api.jikan.moe/v3/search/${type}?q=${query}&page=1&genre=12,9&genre_exclude=0`)
        .then(response => response.json())
        .then(data => obj = data)
        .then(() => currentPage = obj['results'])
        .then(() => clearSearchDiv())
        .then(() => {
            console.log(currentPage);
            for (i = 0; i < currentPage.length; i++) {
                let cardArticle = document.createElement("article");
                cardArticle.classList.add(...cardClasses);
                cardArticle.id = 'cardArticle';
                let cardDiv = document.createElement('div');
                cardDiv.classList.add('card');

                let ribbonDiv = document.createElement('div');
                ribbonDiv.classList.add('ribbon-wrapper-green');
                let ribbonInner = document.createElement('div');
                ribbonInner.classList.add('ribbon-green');
                ribbonInner.innerHTML = 'TOP';

                ribbonDiv.appendChild(ribbonInner);

                let cardImg = document.createElement('img');
                cardImg.classList.add('card-img-top');
                cardImg.alt = '...';
                cardImg.src = currentPage[i].image_url;
                let cardBodyDiv = document.createElement('div');
                cardBodyDiv.classList.add(...cardInfoClasses);
                cardBodyDiv.style.backgroundColor = "#f2f2f2";

                let cardTitle = document.createElement('h6');
                cardTitle.classList.add('card-text');
                let title = currentPage[i].title;
                if (title.length > 36) {
                    cardTitle.style.fontSize = "12px";
                }
                else {
                    cardTitle.style.fontSize = "13px";
                }
                cardTitle.innerHTML = title;

                let typeSpan = document.createElement('span');
                let typ = currentPage[i].type;
                typeSpan.classList.add(...infoBdgCls2);
                typeSpan.innerHTML = 'Type : ' + typ;

                let r18Span = document.createElement('span');
                R = currentPage[i].rated;

                if (R === 'G') {
                    r18Span.classList.add(...successBdgCls);
                }
                else if (R === 'PG-13') {
                    r18Span.classList.add(...warningBdgCls);
                }
                else {
                    r18Span.classList.add(...dangerBdgCls);
                }


                r18Span.innerHTML = 'Rating : ' + R;

                let pubSpan = document.createElement('span');
                pub = currentPage[i].publishing;
                if (pub === true) {
                    pubSpan.classList.add(...successBdgCls);
                }
                else {
                    pubSpan.classList.add(...infoBdgCls);
                }
                pubSpan.innerHTML = 'Pub : ' + pub;

                let ratingSpan = document.createElement('span');
                let rating = currentPage[i].score;

                if (rating === null) {
                    ratingSpan.classList.add(...dangerBdgCls);
                }
                else if (rating < 3.33) {
                    ratingSpan.classList.add(...dangerBdgCls);
                }
                else if (rating >= 3.34 && rating < 6.66) {
                    ratingSpan.classList.add(...warningBdgCls);
                }
                else if (rating >= 6.67 && rating <= 10) {
                    ratingSpan.classList.add(...successBdgCls);
                }
                ratingSpan.innerHTML = 'Rating : ' + rating;


                let epSpan = document.createElement('span');
                let episodes = currentPage[i].episodes
                if (episodes === null) {
                    epSpan.classList.add(...dangerBdgCls);
                }
                else {
                    epSpan.classList.add(...darkBtnCls);
                }
                epSpan.innerHTML = 'Episodes : ' + episodes;

                let chapSpan = document.createElement('span');
                let chapters = currentPage[i].chapters;

                if (chapters === null || chapters === undefined) {
                    chapSpan.classList.add(...dangerBdgCls);
                }
                else {
                    chapSpan.classList.add(...darkBtnCls);
                }

                chapSpan.innerHTML = 'Chap. : ' + chapters;

                let moreBtn = document.createElement('a');
                moreBtn.id = "moreBtn";
                moreBtn.href = currentPage[i].url;
                moreBtn.classList.add(...primBtnCls);
                moreBtn.innerHTML = 'Read More at AnimeList';
                moreBtn.style.margin = 'auto';
                moreBtn.style.width = '60%';
                moreBtn.style.fontSize = '12px';
                moreBtn.style.display = 'block'
                cardBodyDiv.appendChild(cardTitle);
                cardBodyDiv.appendChild(typeSpan);

                if (type === 'anime') {
                    cardBodyDiv.append(r18Span);
                }
                else {
                    cardBodyDiv.appendChild(pubSpan);
                }

                cardBodyDiv.appendChild(ratingSpan);

                if (type === 'anime') {
                    cardBodyDiv.appendChild(epSpan);
                }
                else {
                    cardBodyDiv.appendChild(chapSpan);
                }

                cardBodyDiv.appendChild(moreBtn);

                cardDiv.append(cardImg);
                cardDiv.append(cardBodyDiv);
                cardArticle.append(cardDiv);
                SEARCHCONTAINER.appendChild(cardArticle)
            }
            let containerChildren = SEARCHCONTAINER.children;

            for (let i = 0; i < containerChildren.length; i++) {
                containerChildren[i].classList.remove("show");
                containerChildren[i].classList.add("hide");
                if (i >= (index * maxItems) - maxItems && i < index * maxItems) {
                    containerChildren[i].classList.remove("hide");
                    containerChildren[i].classList.add("show");
                }
            }

        })
}

function clearSearchDiv() {
    while (SEARCHCONTAINER.firstChild) {
        SEARCHCONTAINER.removeChild(SEARCHCONTAINER.firstChild);
    }
}

/* loadSearchtoDisplay('anime', 'Naruto'); */