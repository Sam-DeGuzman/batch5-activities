const SEARCHCONTAINER = document.querySelector('#searchContent');
const SEARCHTYPE = document.querySelector("#inputGroupSelect01");
const SEARCH_INPUT = document.querySelector("#search-input");
const SEARCH_BTN = document.getElementById('search-btn');
const TEMP_IMG = document.getElementById('tempImg-container');
const SEARCH_INFO = document.getElementById('result-info');
const SEARCH_QUERY = document.getElementById('query');


let article = document.getElementById('cardArticle');
let article2 = document.getElementById('cardArticle2');


SEARCH_BTN.addEventListener(
    'click', function () {
        TEMP_IMG.style.display = 'none';

        if (SEARCH_INPUT.value === '') {
            alert('Empty Input Field!');
            location.reload();
        }
        else {
            SEARCH_INFO.style.display = 'block';
            if (SEARCH_INPUT.value === 'SNK') {
                article2.style.display = 'none';
                article.style.display = 'block';
            }
            if (SEARCH_INPUT.value === 'HXH') {
                article.style.display = 'none';
                article2.style.display = 'block';
            }

            SEARCH_QUERY.innerText = SEARCH_INPUT.value;

        }

    }
)
function clr() {
    while (SEARCHCONTAINER.firstChild) {
        SEARCHCONTAINER.removeChild(SEARCHCONTAINER.firstChild);
    }
}



function loadSearchtoDisplay(type,) {
    var ids = target_id;
    var obj;
    fetch(`https://api.jikan.moe/v3/search/${type}?q=${query}&page=1&genre=12&genre_exclude=0`)
        .then(response => response.json())
        .then(data => obj = data)
        .then(() => currentPage = obj['top'])
        .then(() => clearRankingDiv())
        .then(() => {
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
                    epSpan.classList.add(...infoBdgCls);
                }
                epSpan.innerHTML = 'Episodes : ' + episodes;

                let volSpan = document.createElement('span');
                let volumes = currentPage[i].volumes;

                if (volumes === null || volumes === undefined) {
                    volSpan.classList.add(...dangerBdgCls);
                }
                else {
                    volSpan.classList.add(...infoBdgCls);
                }

                volSpan.innerHTML = 'Volumes : ' + volumes;

                let moreBtn = document.createElement('a');
                moreBtn.id = "moreBtn";
                moreBtn.href = currentPage[i].url;
                moreBtn.classList.add(...primBtnCls);
                moreBtn.innerHTML = 'Read More';
                moreBtn.style.margin = 'auto';
                moreBtn.style.width = '40%';
                moreBtn.style.fontSize = '12px';
                moreBtn.style.display = 'block'
                cardBodyDiv.appendChild(cardTitle);
                cardBodyDiv.appendChild(ratingSpan);

                if (ids === 'anime') {
                    cardBodyDiv.appendChild(epSpan);
                }
                else {
                    cardBodyDiv.appendChild(volSpan);
                }
                cardBodyDiv.appendChild(moreBtn);

                let rank = currentPage[i].rank;
                if (rank === 1) {
                    cardDiv.appendChild(ribbonDiv);
                }

                cardDiv.append(cardImg);
                cardDiv.append(cardBodyDiv);
                cardArticle.append(cardDiv);
                SEARCHCONTAINER.appendChild(cardArticle)
            }

        })
}