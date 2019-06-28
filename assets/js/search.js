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
