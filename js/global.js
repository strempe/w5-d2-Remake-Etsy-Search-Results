// // Declare your builder function
// function createResultCard(item) {
//   var card = document.createElement('div')
//   card.classList.add('col-sm-4')

//   // your code here to build up the card

//   // keep in mind you'll be nesting tags

//   document.querySelector('#results').appendChild(card)
// }

// // Call your builder function, one at a time to make 12 search result cards, each with different data (image can be the same at this point if you want)
// // Don't forget you can use a for() loop, or make an array of objects even and use a items.forEach() loop.
// createResultCard({
//   image: 'http://unsplash.it/400/300?random=700',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })
createCard({
    src: 'http://unsplash.it/400/300?random=700',
    caption: 'Something'
});

createCard({
    src: 'http://unsplash.it/400/300?random=700',
    caption: 'Something'
});

createCard({
    src: 'http://unsplash.it/400/300?random=700',
    caption: 'Something'
});

function createCard(image) {
    var card = `<div class="card col-sm-3">
    <img src="http://unsplash.it/400/300?random=700"/>
    <h5>Vintage Go Board Game From The 1950's</h5>
    <p>TinkerbellVintage</p>
    <h6>$17.92</h6>
    </div>`;

    document.querySelector('#results').innerHTML += card;
}

