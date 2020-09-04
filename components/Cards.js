import axios from 'axios';
// // STEP 3: Create article cards.
// // -----------------------
// // Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// // Study the response data you get back, closely.
// // You will be creating a card for each article in the response.
// // This won't be as easy as just iterating over an array though.
// //
// // Write a function that takes a single article object and returns the following markup:
// //
// // <div class="card">
// //   <div class="headline">{Headline of article}</div>
// //   <div class="author">
// //     <div class="img-container">
// //       <img src={url of authors image} />
// //     </div>
// //     <span>By {author's name}</span>
// //   </div>
// // </div>
// //
// // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
// //
// // Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    const info = Array.from(response.data.topics.javascript)
    const container = document.querySelector('.cards-container')

    info.map(item => {
        const cardItem = cardMaker(item);
        container.append(cardItem);
        return cardItem;
    });


    container.append(cardMaker(info))
})
.catch(error => {
    console.log(error)
})

function cardMaker(info){
   const mainContainer = document.createElement('div')
   const headline = document.createElement('div')
   const authorContainer = document.createElement('div')
   const imgContainer = document.createElement('div')
   const img = document.createElement('img')
   const author = document.createElement('span')

    mainContainer.appendChild(headline)
    mainContainer.appendChild(authorContainer)
        authorContainer.appendChild(imgContainer)
            imgContainer.appendChild(img)
        authorContainer.appendChild(author)
    
    mainContainer.classList.add('card')
    headline.classList.add('headline')
    authorContainer.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = `${info.headline}`
    img.src = info.authorPhoto
    author.textContent = `${info.authorName}`

console.log(mainContainer)
return mainContainer;

}
