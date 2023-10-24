const apiKey = "7b328877d534470483ca958f359d1037";
const apiUrl = "https://newsapi.org/v2/top-headlines";
const country = "id"

fetch(`${apiUrl}?country=${country}&apiKey=${apiKey}`)
    .then(Response => Response.json())
    .then(data => {
        const newsBox = document.getElementById("news-container");
        const articles = data.articles;

        articles.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.className = "news-item";
            newsItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Baca selengkapnya</a>
            `;
            newsBox.appendChild(newsItem);
        })
    })
    .catch(error => {
        console.error("Error:", error);
    });
    