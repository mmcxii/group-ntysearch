function articleCard(headline, author, section, date) {
    // Pieces
    const card = document.createElement('<div>');
    setAttributes(card, { class: 'article-card' });

    const title = document.createElement('<div');
    title.textContent(headline);
    setAttributes(title, { class: 'article-title' });

    const byline = document.createElement('<div>');
    byline.textContent(author);
    setAttributes(byline, { class: 'article-byline' });

    const category = document.createElement('<div>');
    category.textContent(`Section: ${section}`);
    setAttributes(category, { class: 'article-category' });

    const pubDate = document.createElement('<div>');
    pubDate.textContent(date);
    setAttributes(pubDate, { class: 'article-date' });

    buildCard(card, [title, byline, category, pubDate]);
}

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function buildCard(element, components) {
    for (let i = 0; i < components.length; i++) {
        element.appendChild(components[i]);
    }
}



function getArticles(string, start, end){

    let searchTerm = string;
    let startYear = start;
    let endYear = end;
    
    let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=s5dWBTvGADVG9WGJM7s0zyY7CCws4UmO&`
    
    if (startYear !== '') {
        queryURL += `&begin_date=${startYear}0101`;
    }
    
    if (endYear !== '') {
        queryURL += `&end_date=${endYear}1231`;
    }
    
    console.log(queryURL);
    
    fetch(queryURL, {
        method: 'GET'
    })
    .then(function (response) {
        return response.json();
    }).then(function (myJson) {
        console.log(myJson);
    })
    }
    
    const searchBtn = document.getElementById('search-button');
    
    searchBtn.addEventListener('click', (e) => {
        const searchTerm = document.getElementById('search-term').value;
        const startYear = document.getElementById('start-year').value;
        const endYear = document.getElementById('end-year').value;
    
        getArticles(searchTerm, startYear, endYear);
    })