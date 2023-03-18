

/*
const cardsContainer = document.querySelector("#bookCards-container");


const populateBookResults = (data) => {
  for (data) {
    const bookCardHtml = `<div class="col text-center">
      <img class="img-fluid" src="${title.category.cover_small}" alt="${book.title.category}" />
      
    </div>`;

  cardsContainer.innerHTML += bookCardHtml;
  }
}
*/
  
//const BASE_URL = 'https://striveschool-api.herokuapp.com/books';  

  //function renderBooks(data) {
  
    //data.forEach(data => {

        // Caching HTML elements
      const div = document.getElementById('bookCards-container');
      const image = document.getElementById('image');
      const title = document.getElementById('title');
      const price = document.getElementById('price');
      const category = document.getElementById('category');
      const like = document.getElementById('like');
      const skip = document.getElementById('skip');

      
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
          skip.button = 'empty'
          like.button = 'empty'
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
    function load (){
  addEventListener(window.onload);
    };

const populateBookResults = (books) => {
  for (const book of books) {
    const bookCardHtml = `<div class="col text-center">
    <img class="img-fluid" src="${title.book.cover_small}" alt="${title.book}" />
    <p>
      <a href="./album_page.html?albumId=${title.book.price}">${title.book.price}</a>
      <br />
      <a href="./artist_page.html?artistId=${title.book.price}">${title.book.price}</a>
    </p>
  </div>`;

  mainPage.innerHTML += bookCardHtml;
}
}







  //classList.remove('d-none');
  /*
      Promise.all(books)
        .then((bookPromises) => {
          const book = bookPromisesResults.reduce((accumulator, currentObject) =>
            accumulator.concat(currentObject.data), []
          )

          populateBook(books);
        })
        .finally(() => results.classList.add('d-none'));
    
*/

 // <------------------------------------>

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

 addEventListener(window.onload)
})



//clone
/*
const rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];
const popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

const artistsByCategory = {
  rock: rockArtists,
  pop: popArtists,
  hipHop: hipHopArtists,
};

const BASE_URL = 'https://striveschool-api.herokuapp.com/api/deezer/search';
const DEFAULT_SEARCH_TERM = 'eminem';

// Caching HTML elements
const resultsContainer = document.getElementById('resultsContainer');
const searchTitle = document.getElementById('searchTitle');
const searchButton = document.getElementById('searchButton');
const searchField = document.getElementById('searchField');

const rockSongsButton = document.getElementById('rockSongsButton');
const popSongsButton = document.getElementById('popSongsButton');
const hipHopSongsButton = document.getElementById('hipHopSongsButton');

const results = document.getElementById('results');

const populateSongResults = (songs) => {
  for (const song of songs) {
    const songCardHtml = `<div class="col text-center">
      <img class="img-fluid" src="${song.album.cover_small}" alt="${song.album.title}" />
      <p>
        <a href="./album_page.html?albumId=${song.album.id}">${song.album.title}</a>
        <br />
        <a href="./artist_page.html?artistId=${song.artist.id}">${song.artist.name}</a>
      </p>
    </div>`;

    resultsContainer.innerHTML += songCardHtml;
  }
}

const createSearchUrl = (term) => {
  const params = new URLSearchParams({q : term});

  return `${BASE_URL}?${params.toString()}`
};

const handleSearchButtonClick = () => {
  search(searchField.value);
};

const handleCategorySearchButtonClick = (category) => {
  const rockPromises = artistsByCategory[category].map(artist =>
    fetch(createSearchUrl(artist)).then(response => response.json())
  );

  // Promise.all accepts an array of promises
  // and returns a single promise
  // the value of the promise returned
  // is an array of values of all the promises involved 
  // if any of the promises involved is rejected - the Promise.all will return a rejected promise
  resultsContainer.innerHTML = '';
  results.classList.remove('d-none');

  Promise.all(rockPromises)
    .then((rockPromisesResults) => {
      const songs = rockPromisesResults.reduce((accumulator, currentObject) =>
        accumulator.concat(currentObject.data), []
      )

      populateSongResults(songs);
    })
    .finally(() => results.classList.add('d-none'));
}

// function definitions are hoisted =)

// function search(term) {
//   fetch(`${BASE_URL}?q=${term}`)
//     .then(response => response.json())
//     .then(responseObject => {
//       populateSongResults(responseObject.data);
//       searchTitle.innerText = term;
//     });
// };

const search = (term) => {
  resultsContainer.innerHTML = '';
  results.classList.remove('d-none');
  
  fetch(createSearchUrl(term))
    .then(response => response.json())
    .then(responseObject => {
      populateSongResults(responseObject.data);
      searchTitle.innerText = term;
    })
    // finally will be executed whether or not there was an error in the chain
    .finally(() => results.classList.add('d-none'))
};

searchButton.addEventListener('click', handleSearchButtonClick);
rockSongsButton.addEventListener('click', () => handleCategorySearchButtonClick('rock'))
popSongsButton.addEventListener('click', () => handleCategorySearchButtonClick('pop'))
hipHopSongsButton.addEventListener('click', () => handleCategorySearchButtonClick('hipHop'))

search(DEFAULT_SEARCH_TERM);
*/