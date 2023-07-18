const mainContainer = document.getElementById('container')
mainContainer.innerHTML = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">Phil Mangione</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=171" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
const listaposts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

function appendPost() {
    for (let i = 0; i < listaposts.length; i++) {
        let newPost = listaposts[i]

        mainContainer.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${newPost['author']['image']}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${newPost['author']['name']}</div>
                    <div class="post-meta__time">${newPost.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${newPost.content}</div>
        <div class="post__image">
            <img src="${newPost['media']}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${newPost.id}" class="js-likes-counter">${newPost.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
    }

}
appendPost();
function stampa(){
    console.log('ciao')
}
const btnLikeS = document.querySelectorAll('.like-button')
const counterLinkes = document.querySelectorAll('.js-likes-counter')
const countetrList = []
for (let i = 0; i < counterLinkes.length; i++) {
    let btnid = btnLikeS[i]
    let likesid = counterLinkes[i]
    
    const counter = {
        btn: btnid,
        like: likesid,
        addLike() {
            let arrow = () => {console.log(this.btn)
            this.btn.addEventListener('click',function(){
                console.log(counter.like)
                //il numero di like è il testo dentro a counter.like poichè 'like'è un elemento HTML
                let numbLike = counter.like.textContent
                numbLike++
                //associo  il numero incrementato al vecchio valore 
                counter.like.textContent = numbLike
                console.log(numbLike)
            })
            };
            arrow();
        }
        };
        countetrList.push(counter)
    }
    


console.log(countetrList)

// countetrList[0].btn.addEventListener('click',stampa)
countetrList[0].addLike()
countetrList[1].addLike()
countetrList[2].addLike()
countetrList[3].addLike()
countetrList[4].addLike()
countetrList[5].addLike()


// const btnLike = document.querySelector('.like-button')
// const counterLinke = document.querySelector('.js-likes-counter')
// btnLike.addEventListener('click', addLike)
// function addLike() {
//     console.log(counterLinke.textContent)
//     let likes = counterLinke.textContent
//     likes++
//     counterLinke.innerHTML = likes

// }