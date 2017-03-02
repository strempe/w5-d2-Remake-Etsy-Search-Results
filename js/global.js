var games = { };
var searchButton = document.querySelector('#search');

getVintageBoardGames()

function getVintageBoardGames() {

    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            games = data.results;
            getResults(games);      

            console.log(games);    
            document.querySelector('.form-control').value
        })      
}

searchButton.addEventListener('click');

function getResults(games) {
    games.forEach(function(info){
    var card = `<div class="card col-sm-4 col-md-3">
                    <img src="${info.Images[0].url_170x135}"/>
                    <h5 class="cardCaption">${info.title.slice(0, 50)}...</h5>
            </div>
            <div class="row">
                    <h6 class="cardSeller col-sm-6">${info.Shop.shop_name}</h6>
                    <h6 class="price col-sm-6">${info.price}</h6>
            </div>`;

    document.querySelector('#results').innerHTML += card;

    })  
}








