
const cardsContainer = document.querySelector("#bookCards-container");

/*
const populateBookResults = (data) => {
  for (data) {
    const bookCardHtml = `<div class="col text-center">
      <img class="img-fluid" src="${title.category.cover_small}" alt="${book.title.category}" />
      
    </div>`;

  cardsContainer.innerHTML += bookCardHtml;
  }
}
*/
  
     

  function renderBooks(data) {
  
    data.forEach(data => {
      const div = document.createId('bookCards-container');
      const image = document.createClassName('image');
      const title = document.createClassName('title');
      const price = document.createClassName('price');
      const category = document.createClassName('category');
      const like = document.createClassName('like');
      const skip = document.createClassName('skip');
      div.classList = 'card'
      image.classList = 'card-img'
      like.classList = 'empty'
      image.src = data.image
      
      title.innerText = `title: ${data.title}`
      price.innerText = `price: ${data.price}`
      category.innerText = `category: ${data.category}` 
     
      
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

.catch((err) => {
 console.log('rejected',err);
})




