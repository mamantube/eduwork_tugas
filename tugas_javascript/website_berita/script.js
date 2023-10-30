const newsContainer = document.getElementById("news-container");
const search = document.getElementById("search-input")


// fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7b328877d534470483ca958f359d1037")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.articles);
//         const articles = data.articles;

//         articles.forEach(article => {
//             const newsItem = document.createElement('div');
//             newsItem.className = 'news-item m-4 d-flex';
//             newsItem.innerHTML = `
//                     <div class="col">
//                         <div class="card">
//                             <img class="card-img-top" src="${article.urlToImage}" alt="">
//                             <div class="card-body">
//                                 <h2 class="card-title">${article.title}</h2>
//                                 <p class="card-text">${article.description}</p>
//                                 <p class="text-body-tertiary"><span class="fst-italic">${article.author}</span> </br> ${article.publishedAt}</p>
//                                 <div></div>
//                                 <a href="${article.url}" class="btn btn-primary" target="_blank">Baca selengkapnya</a>
//                             </div>
//                         </div>
//                     </div>
                
//             `;
//             newsContainer.appendChild(newsItem);
//         });
        
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });

function newsSearch (link) {
    let input = search.value;
    input = input.toLowerCase();
    link = `https://newsapi.org/v2/everything?q=${input || "a"}&domains=wsj.com&apiKey=7b328877d534470483ca958f359d1037`;

    axios.get(link)
    .then((response) => {
        let { data } = response;
        data = data.articles;
        listData(data);
    });
};

function listData(data) {
    console.log(data);
    let dataResult = "";
    data.forEach((element) => {
        dataResult += `
            <div class="col-md-4 p-4">
                <div class="card shadow-lg bg-body-tertiary rounded" style="width: 20rem; height: 44rem">
                    <img class="card-img-top" src="${element.urlToImage}" alt="">
                    <div class="card-body">
                        <h2 class="card-title">${element.title}</h2>
                        <p class="card-text">${element.description}</p>
                        </div>
                        <div class="card-footer">
                            <p class="text-body-tertiary"><span class="fst-italic">${element.author}</span> </br> ${element.publishedAt}</p>
                            <a href="${element.url}" class="btn btn-primary" target="_blank">Baca selengkapnya</a>
                    
                    </div>
                </div>
            </div>
        `;
    });
    newsContainer.innerHTML = dataResult;
};
    
newsSearch();

// my news api KEY = 7b328877d534470483ca958f359d1037