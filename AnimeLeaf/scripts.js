
const RELEASESCONTAINER = document.querySelector('#releaseContent');

// Releases Classes arrays
let cardClasses = ['col-sm-6', 'col-md-4', 'col-lg-3', 'g-4'];
let cardInfoClasses = ['card-body', 'text-center'];
let successBdgCls = ['badge', 'bg-success'];  //0-3.33
let dangerBdgCls = ['badge', 'bg-danger'];//3.34-6.66
let warningBdgCls = ['badge', 'bg-warning'];//6.67-10
let infoBdgCls = ['badge', 'bg-secondary', 'text-light'];
let primBtnCls = ['btn', 'btn-primary', 'mt-2'];

let daysBtns = document.querySelectorAll('#day-btns button');
let daysBtnsSm = document.querySelectorAll('#day-btns-sm button');
let setActive;

let dayVariable = 'monday';
let dailyRelease;

loadReleasetoDisplay('monday', dayVariable);

daysBtns.forEach(item => {
    item.addEventListener('click', event => {
        dailyRelease = undefined;
        deactOtherBtn(event.target.id, daysBtns);
        setActive = document.getElementById(`${event.target.id}`);
        setActive.classList.add('active');
        dayVariable = event.target.id;
        loadReleasetoDisplay(event.target.id, dayVariable);
    })
})

daysBtnsSm.forEach(item => {
    item.addEventListener('click', event => {
        dailyRelease = undefined;
        deactOtherBtn(event.target.id, daysBtnsSm);
        setActive = document.getElementById(`${event.target.id}`);
        setActive.classList.add('active');
        dayVariable = event.target.id;
        loadReleasetoDisplay(event.target.id, dayVariable);
    })
})

function loadReleasetoDisplay(target_id) {
    var obj;
    fetch(`https://api.jikan.moe/v3/schedule/${target_id}`)
        .then(response => response.json())
        .then(data => obj = data)
        .then(() => dailyRelease = obj[dayVariable])
        .then(() => clearDisplayDiv())
        .then(() => {
            for (i = 0; i < dailyRelease.length; i++) {
                let cardArticle = document.createElement("article");
                cardArticle.classList.add(...cardClasses);
                cardArticle.id = 'cardArticle';
                let cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                let cardImg = document.createElement('img');
                cardImg.classList.add('card-img-top');
                cardImg.alt = '...';
                cardImg.src = dailyRelease[i].image_url;
                let cardBodyDiv = document.createElement('div');
                cardBodyDiv.classList.add(...cardInfoClasses);
                cardBodyDiv.style.backgroundColor = "#f2f2f2";

                let cardTitle = document.createElement('h6');
                cardTitle.classList.add('card-text');
                let title = dailyRelease[i].title;
                if (title.length > 36) {
                    cardTitle.style.fontSize = "12px";
                }
                else {
                    cardTitle.style.fontSize = "13px";
                }
                cardTitle.innerHTML = title;


                let ratingSpan = document.createElement('span');
                let rating = dailyRelease[i].score;

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
                let episodes = dailyRelease[i].episodes
                if (episodes === null) {
                    epSpan.classList.add(...dangerBdgCls);
                }
                else {
                    epSpan.classList.add(...infoBdgCls);
                }
                let moreBtn = document.createElement('a');
                moreBtn.id = "moreBtn";
                moreBtn.href = dailyRelease[i].url;
                moreBtn.classList.add(...primBtnCls);
                moreBtn.innerHTML = 'Read More';
                moreBtn.style.margin = 'auto';
                moreBtn.style.width = '40%';
                moreBtn.style.fontSize = '12px';
                moreBtn.style.display = 'block';


                epSpan.innerHTML = 'Episodes : ' + episodes;
                cardBodyDiv.appendChild(cardTitle);
                cardBodyDiv.appendChild(ratingSpan);
                cardBodyDiv.appendChild(epSpan);
                cardBodyDiv.appendChild(moreBtn);
                cardDiv.append(cardImg);
                cardDiv.append(cardBodyDiv);
                cardArticle.append(cardDiv);

                RELEASESCONTAINER.appendChild(cardArticle)
            }
        })
}
function clearDisplayDiv() {
    while (RELEASESCONTAINER.firstChild) {
        RELEASESCONTAINER.removeChild(RELEASESCONTAINER.firstChild);
    }
}
function deactOtherBtn(target_id, elements) {
    for (i = 0; i < elements.length; i++) {
        if (elements[i] != target_id) {
            elements[i].classList.remove('active');
        }
    }
}

