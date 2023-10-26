const newsContainer = document.getElementById("news-container")
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7b328877d534470483ca958f359d1037")
    .then(response => response.json())
    .then(data => {
        console.log(data.articles);
        const newsContainer = document.getElementById('news-container');
        const articles = data.articles;

        articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item m-4 d-flex';
            newsItem.innerHTML = `
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img class="card-img-top" src="${article.urlToImage}" alt="">
                            <div class="card-body">
                                <h2 class="card-title">${article.title}</h2>
                                <p class="card-text">${article.description}</p>
                                <p class="text-body-tertiary"><span class="fst-italic">${article.author}</span> </br> ${article.publishedAt}</p>
                                <div></div>
                                <a href="${article.url}" class="btn btn-primary" target="_blank">Baca selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            newsContainer.appendChild(newsItem);
        });
        
    })
    .catch(error => {
        console.error("Error:", error);
    });

function newsSearch () {
    const searchTerm = searchInput.value;
    fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7b328877d534470483ca958f359d1037`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data.articles)
            newsContainer.innerHTML = "";

            const articles = data.articles;
            articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item m-4 d-flex';
                newsItem.innerHTML = `
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img class="card-img-top" src="${article.urlToImage}" alt="">
                                <div class="card-body">
                                    <h2 class="card-title">${article.title}</h2>
                                    <p class="card-text">${article.description}</p>
                                    <p class="text-body-tertiary"><span class="fst-italic">${article.author}</span> </br> ${article.publishedAt}</p>
                                    <div></div>
                                    <a href="${article.url}" class="btn btn-primary" target="_blank">Baca selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                newsContainer.appendChild(newsItem)
            });
        })
        .catch(error => {
            console.error("Error", error);
        });
}

searchButton.addEventListener("click", newsSearch);

searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        newsSearch();
    }
});

    


// my news api KEY = 7b328877d534470483ca958f359d1037