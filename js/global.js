var etsy
getData();

document.querySelector('#searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getData();
    }
});

document.querySelector('#searchBtn').addEventListener('click', getData);


function getData() {
    var searchInput = document.querySelector('#searchInput').value;
    document.querySelector('.itemCards').innerHTML = '';

    if (searchInput !== '') {
        fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchInput) + '&includes=Images,Shop')
            .then(response => response.json())
            .then(data => {
                etsy = data.results;
                renderItemCard(etsy);
                // console.log(etsy);
            })
    }
}

function renderItemCard(items) {
    // console.log(items)
    items.forEach(function (details) {
        var card = `<div class="col-sm-4  col-md-3">
            <div class="card">
            <img src="${details.Images[0].url_170x135}"/>
            <h5 class="card-caption">${details.title.slice(0, 50)}...</h5>
            <div class="row">
                <h6 class="card-author col-sm-6">${details.Shop.shop_name}</h6>
                <h6 class="card-price text-right col-sm-6">${details.price}</h6>
            </div>
            </div>
        </div>`;

        document.querySelector('.itemCards').innerHTML += card;
    })
};







