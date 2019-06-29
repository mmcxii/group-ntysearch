function articleCard(headline, author, section, date, url) {
    // Pieces
    const card = document.createElement('div');
    setAttributes(card, { class: 'article-card mb-3' });

    const title = document.createElement('h2');
    title.textContent = headline;
    setAttributes(title, { class: 'article-title' });

    const byline = document.createElement('p');
    byline.textContent = author;
    setAttributes(byline, { class: 'article-byline' });

    const category = document.createElement('p');
    category.textContent = `Section: ${section}`;
    setAttributes(category, { class: 'article-category' });

    const pubDate = document.createElement('p');
    pubDate.textContent = date;
    setAttributes(pubDate, { class: 'article-date' });

    const artUrl = document.createElement('p');
    artUrl.textContent = url;
    setAttributes(artUrl, { class: 'article-url' });

    buildCard(card, [title, byline, category, pubDate, artUrl]);
}

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function buildCard(element, components) {
    const resultsDiv = document.getElementById('results');

    for (let i = 0; i < components.length; i++) {
        element.appendChild(components[i]);
    }

    resultsDiv.appendChild(element);
}

function getArticles(string, start, end) {
    let searchTerm = string;
    let startYear = start;
    let endYear = end;

    let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=s5dWBTvGADVG9WGJM7s0zyY7CCws4UmO&`;

    if (startYear !== '') {
        queryURL += `&begin_date=${startYear}0101`;
    }

    if (endYear !== '') {
        queryURL += `&end_date=${endYear}1231`;
    }

    console.log(queryURL);

    fetch(queryURL, {
        method: 'GET',
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            const data = myJson.response.docs;
            const numRecords = document.getElementById('records').value;
            console.log(data);
            for (let i = 0; i < numRecords; i++) {
                const byline = data[i].byline.original;
                const headline = data[i].headline.main;
                const pubdate = data[i].pub_date;
                const url = data[i].web_url;
                const section = data[i].section_name;

                articleCard(headline, byline, section, pubdate, url);
            }
        });
}

const searchBtn = document.getElementById('search-button');

searchBtn.addEventListener('click', (e) => {
    const searchTerm = document.getElementById('search-term').value;
    const startYear = document.getElementById('start-year').value;
    const endYear = document.getElementById('end-year').value;

    getArticles(searchTerm, startYear, endYear);
});
