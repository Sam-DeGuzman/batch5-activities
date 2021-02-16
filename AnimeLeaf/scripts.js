
const RELEASESCONTAINER = document.querySelector('#releaseContent');

//Modal Elements
let ModalTitle = document.querySelector("#exampleModalLabel");
let ModalBody = document.querySelector("#exampleModal > div > div > div.modal-body");
let ModalGenres = document.querySelector("#exampleModal > div > div > div.modal-body > section");
let scrollTop = document.getElementById('scrollTop');

// Releases Classes arrays
let cardClasses = ['col-sm-6', 'col-md-4', 'col-lg-3', 'g-4'];
let cardInfoClasses = ['card-body', 'text-center'];
let successBdgCls = ['badge', 'bg-success'];  //0-3.33
let dangerBdgCls = ['badge', 'bg-danger'];//3.34-6.66
let warningBdgCls = ['badge', 'bg-warning'];//6.67-10
let infoBdgCls = ['badge', 'bg-secondary', 'text-light'];
let infoBdgCls2 = ['badge', 'bg-info', 'text-dark'];
let primBtnCls = ['btn', 'btn-primary'];
let darkBtnCls = ['badge', 'btn-dark', 'text-light'];

let daysBtns = document.querySelectorAll('#day-btns button');
let daysBtnsSm = document.querySelectorAll('#day-btns-sm button');
let setActive;

let dayVariable = 'monday';
let dailyRelease;

let genres = [];

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
            // console.log(dailyRelease);
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

                let typeSpan = document.createElement('span');
                let type = dailyRelease[i].type;
                typeSpan.classList.add(...infoBdgCls2);
                typeSpan.innerHTML = 'Type : ' + type;

                let srcSpan = document.createElement('span');
                src = dailyRelease[i].source;

                srcSpan.classList.add(...infoBdgCls);

                srcSpan.innerHTML = 'Source : ' + src;

                let ratingSpan = document.createElement('span');
                let rating = dailyRelease[i].score;

                if (rating === null) {
                    rating = 'N/A';
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
                ratingSpan.style.marginBottom = '3px';

                let epSpan = document.createElement('span');
                let episodes = dailyRelease[i].episodes
                if (episodes === null) {
                    episodes = 'N/A';
                    epSpan.classList.add(...dangerBdgCls);
                }
                else {
                    epSpan.classList.add(...darkBtnCls);
                }

                let infoDiv = document.createElement('div');

                let moreBtn = document.createElement('a');
                moreBtn.id = "moreBtn";
                moreBtn.href = dailyRelease[i].url;
                moreBtn.classList.add(...primBtnCls);
                moreBtn.innerHTML = 'Read More at AnimeList';
                moreBtn.target = '_blank';
                moreBtn.style.margin = 'auto';
                moreBtn.style.width = '60%';
                moreBtn.style.fontSize = '12px';
                moreBtn.style.display = 'block';

                /* let more = document.createElement('button');
                more.id = 'modalBtn';
                more.style.width = '35%';
                more.style.marginLeft = '10px';
                more.style.marginTop = '1px';
                more.style.fontSize = '11px';
                more.classList.add(...primBtnCls);
            
                //  setModalContent("Shingeki no Kyojin", i)
                more.addEventListener('click', function () {
                    ModalTitle.innerHTML = dailyRelease[i].title;
                }
                );
            
                /*  console.log(dailyRelease[i].genres[i].name);
             
                 function setModalContent(title, index) {
             
                     ModalGenres.innerHTML = '';
             
             
                     for (g = 0; g < dailyRelease[index].genres.length; g++) {
                         let span = document.createElement('span');
                         span.classList.add("badge", "bg-primary");
                         span.innerText = (dailyRelease[index].genres[g].name);
                         ModalGenres.appendChild(span);
                     }
             
             
                 } */

                /* 
                                for (x = 0; x < dailyRelease[i].genres.length; x++) {
                                    console.log(dailyRelease[i].genres[x].name);
                                }
                 */

                /* more.innerHTML = 'More Info'
                more.style.display = 'inline';
            
                //For Modal Info
                let bsToggle = document.createAttribute('data-bs-toggle');
                let bsTarget = document.createAttribute('data-bs-target');
            
                bsToggle.value = 'modal';
                bsTarget.value = '#exampleModal'
                more.setAttributeNode(bsToggle);
                more.setAttributeNode(bsTarget); */


                infoDiv.appendChild(moreBtn);
                // infoDiv.appendChild(more);

                epSpan.innerHTML = 'Episodes : ' + episodes;
                cardBodyDiv.appendChild(cardTitle);
                cardBodyDiv.appendChild(typeSpan);
                cardBodyDiv.appendChild(srcSpan);
                cardBodyDiv.appendChild(ratingSpan);
                cardBodyDiv.appendChild(epSpan);
                cardBodyDiv.appendChild(infoDiv);
                cardDiv.append(cardImg);
                cardDiv.append(cardBodyDiv);
                cardArticle.append(cardDiv);

                RELEASESCONTAINER.appendChild(cardArticle)
            }
        })
}

scrollTop.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})


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

