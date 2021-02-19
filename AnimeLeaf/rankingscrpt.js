const RANKINGCONTAINER = document.querySelector('#rankingContent');

let animeBtnDisp = document.getElementById('anime-btns');
let mangaBtnDisp = document.getElementById('manga-btns');
let animeBtns = document.querySelectorAll('#anime-btns button');
let mangaBtns = document.querySelectorAll('#manga-btns button');
let optionBtns = document.querySelectorAll('#option-btns button');
let scrollTop = document.getElementById('scrollTop');
let prevBtn = document.getElementById('prev');
let pgNum = document.getElementById('pgNum');
let nextBtn = document.getElementById('next');


let cardClasses = ['col-sm-6', 'col-md-4', 'col-lg-3', 'g-4'];
let cardInfoClasses = ['card-body', 'text-center'];
let primBtnCls = ['btn', 'btn-primary', 'mt-2'];
let successBdgCls = ['badge', 'bg-success'];  //0-3.33
let dangerBdgCls = ['badge', 'bg-danger'];//3.34-6.66
let warningBdgCls = ['badge', 'bg-warning'];//6.67-10
let infoBdgCls = ['badge', 'bg-secondary', 'text-light'];
let infoBdgCls2 = ['badge', 'bg-info', 'text-dark'];
let darkBtnCls = ['badge', 'btn-dark', 'text-light'];

let target;
let currentPage;
let typeVariable;

const maxItems = 10;
let index = 1;


mangaBtnDisp.style.display = "none";
loadReleasetoDisplay("anime");

animeBtns.forEach(item => {
    item.addEventListener('click', event => {
        currentPage = undefined;
        deactOtherBtns(event.target.id, animeBtns);
        setActive = document.getElementById(`${event.target.id}`);
        setActive.classList.add('active');
        loadReleasetoDisplay("anime", event.target.id);
    })
});

mangaBtns.forEach(item => {
    item.addEventListener('click', event => {
        currentPage = undefined;
        deactOtherBtns(event.target.id, mangaBtns);
        setActive = document.getElementById(`${event.target.id}`);
        setActive.classList.add('active');
        loadReleasetoDisplay("manga", event.target.id);
    })
});


// ANIME OR MANGA BUTTONS

optionBtns.forEach(item => {
    item.addEventListener('click', event => {

        currentPage = undefined;
        deactOtherBtns(event.target.id, optionBtns);
        setActive = document.getElementById(`${event.target.id}`);
        setActive.classList.add('active');
        target = event.target.id;
        removeBtnActivity(target);
        if (target === 'anime') {
            mangaBtnDisp.style.display = 'none';
            animeBtnDisp.style.display = 'flex';
        }
        else {
            mangaBtnDisp.style.display = 'flex';
            animeBtnDisp.style.display = 'none';
        }
        loadReleasetoDisplay(event.target.id);
    }
    )
});

function removeBtnActivity(selected) {
    if (selected === 'anime') {
        animeBtns.forEach(item => {
            item.classList.remove('active');
        })
    }
    else {
        mangaBtns.forEach(item => {
            item.classList.remove('active');
        })
    }
}

scrollTop.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})

function loadReleasetoDisplay(target_id, subtype = '') {
    var ids = target_id;
    var obj;
    fetch(`https://api.jikan.moe/v3/top/${target_id}/1/${subtype}`)
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

                let typeSpan = document.createElement('span');
                typeSpan.style.display = 'inline-block';
                typeSpan.style.textAlign = 'center';
                typeSpan.style.width = '50%';
                let typ = currentPage[i].type;
                typeSpan.classList.add(...infoBdgCls2);
                typeSpan.innerHTML = 'Type : ' + typ;

                let rankSpan = document.createElement('span');
                rankSpan.style.textAlign = 'center';
                rankSpan.style.display = 'inline-block';
                rankSpan.style.width = '34%';
                let rank = currentPage[i].rank;

                rankSpan.classList.add(...warningBdgCls);

                rankSpan.innerHTML = 'Rank : ' + rank;

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
                    episodes = 'N/A';
                    epSpan.classList.add(...dangerBdgCls);
                }

                else {
                    epSpan.classList.add(...darkBtnCls);
                }
                epSpan.innerHTML = 'Episodes : ' + episodes;

                let volSpan = document.createElement('span');
                let volumes = currentPage[i].volumes;

                if (volumes === null || volumes === undefined) {
                    volumes = 'N/A';
                    volSpan.classList.add(...dangerBdgCls);
                }
                else {
                    volSpan.classList.add(...darkBtnCls);
                }

                volSpan.innerHTML = 'Vol. : ' + volumes;

                let moreBtn = document.createElement('a');
                moreBtn.style.backgroundColor = '#c64e0e';
                moreBtn.style.border = '0px';
                moreBtn.id = "moreBtn";
                moreBtn.href = currentPage[i].url;
                moreBtn.classList.add(...primBtnCls);
                moreBtn.innerHTML = 'Read More at MyAnimeList';
                moreBtn.target = '_blank';
                moreBtn.style.margin = 'auto';
                moreBtn.style.width = '60%';
                moreBtn.style.fontSize = '12px';
                moreBtn.style.display = 'block'
                cardBodyDiv.appendChild(cardTitle);
                cardBodyDiv.appendChild(typeSpan);


                cardBodyDiv.appendChild(rankSpan);


                cardBodyDiv.appendChild(ratingSpan);

                if (ids === 'anime') {
                    cardBodyDiv.appendChild(epSpan);
                }
                else {
                    cardBodyDiv.appendChild(volSpan);
                }

                cardBodyDiv.appendChild(moreBtn);

                if (rank === 1) {
                    rankSpan.classList.remove(...warningBdgCls);
                    rankSpan.classList.add(...dangerBdgCls);
                    rankSpan.classList.add('blink_me');
                    cardDiv.appendChild(ribbonDiv);
                }

                cardDiv.append(cardImg);
                cardDiv.append(cardBodyDiv);
                cardArticle.append(cardDiv);
                RANKINGCONTAINER.appendChild(cardArticle)
            }
            let containerChildren = RANKINGCONTAINER.children;

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
function reload2() {
    for (let i = 0; i < containerChildren.length; i++) {
        containerChildren[i].classList.remove("show");
        containerChildren[i].classList.add("hidden");
        if (i >= (index * maxItems) - maxItems && i < index * maxItems) {
            containerChildren[i].classList.remove("hidden");
            containerChildren[i].classList.add("show");
        }
    }
    pgNum.innerHTML = index;
    document.documentElement.scrollTop = 0;
}

function deactOtherBtns(target_id, elements) {
    for (i = 0; i < elements.length; i++) {
        if (elements[i] != target_id) {
            elements[i].classList.remove('active');
        }
    }
}

function clearRankingDiv() {
    while (RANKINGCONTAINER.firstChild) {
        RANKINGCONTAINER.removeChild(RANKINGCONTAINER.firstChild);
    }
}

//To do : Make Use of these logics for pagination
/* const pagination = Math.ceil(containerChildren.length / maxItems);
            check();
            reload2();
  for (let i = 0; i < containerChildren.length; i++) {
                containerChildren[i].classList.remove("show");
                containerChildren[i].classList.add("hidden");
                if (i >= (index * maxItems) - maxItems && i < index * maxItems) {
                    containerChildren[i].classList.remove("hidden");
                    containerChildren[i].classList.add("show");
                }
            }
            function reload2() {
                for (let i = 0; i < containerChildren.length; i++) {
                    containerChildren[i].classList.remove("show");
                    containerChildren[i].classList.add("hidden");
                    if (i >= (index * maxItems) - maxItems && i < index * maxItems) {
                        containerChildren[i].classList.remove("hidden");
                        containerChildren[i].classList.add("show");
                    }
                }
                pgNum.innerHTML = index;
                document.documentElement.scrollTop = 0;
            }
            let pagination = Math.ceil(containerChildren.length / maxItems);

            check();

            pgNum.innerHTML = index;



            prevBtn.addEventListener('click', function () {
                if (index > 1) {
                    --index;
                    check();
                    reload2();
                }

            });

            nextBtn.addEventListener('click', function () {
                ++index;
                check();
                reload2();
            });

            function check() {
                if (index === 1) {
                    prevBtn.classList.add("disabled");
                }
                else {
                    prevBtn.classList.remove("disabled");
                }


                if (index === pagination) {
                    nextBtn.classList.add("disabled")
                }
                else {
                    nextBtn.classList.remove("disabled");
                }
            };

            */


