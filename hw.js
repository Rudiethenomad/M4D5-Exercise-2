
const cardsContainer = document.querySelector("#cards-container");


const populateBookResults = (books) => {
  for (const books of books) {
    const bookCardHtml = `<div class="col text-center">
      <img class="img-fluid" src="${title.category.cover_small}" alt="${book.title.category}" />
      
    </div>`;

  cardsContainer.innerHTML += bookCardHtml;
  }
}

  
     

  function renderBooks(data) {
  
    data.forEach(data => {
      const div = document.createElement('div');
      const image = document.createElement('img');
      const title = document.createElement('h3');
      const price = document.createElement('h3');
      const category = document.createElement('h3');
      const like = document.createElement('button');
      const skip = document.createElementNS('button');
      div.classList = 'card'
      image.classList = 'card-img'
      like.classList = 'empty'
      image.src = books.image
      asin.innerText = ` asin: ${books.asin}`
      title.innerText = `title: ${books.title}`
      price.innerText = `price: ${books.price}`
      category.innerText = `category: ${books.category}` 
     
      div.appendChild(asin)
      div.appendChild(title)
      div.appendChild(image)
      div.appendChild(price)
      div.appendChild(category)
      div.appendChild(like)
      div.appendChild(skip)
      cardsContainer.appendChild(div)
      like.textContent = 'like'
      skip.textContent = 'Skip'

    });
};
console.log(renderBooks);
console.log(cardsContainer)


fetch('https://striveschool-api.herokuapp.com/books')
.then((response) => {
console.log('resolved',response);
return response.json();

})
.then(data => {
 console.log(data);
})
//.then(respone => {
 // populateBookResults(respone.data);
//})
.catch((err) => {
 console.log('rejected',err);
})


const populateBooks = (books) => {


}

