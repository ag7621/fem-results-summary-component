const template = document.querySelector('[data-template]');
const container = document.querySelector('.summary__scores');

function fetchData() {
    fetch('data.json')
        .then(res => res.json())
        .then(res => {
            let data = res;
            data.forEach(item => {
                const summary__item = template.content.cloneNode(true).children[0];
                const icon = summary__item.querySelector('[data-icon]');
                const category = summary__item.querySelector('[data-category]');
                const score = summary__item.querySelector('[data-result]');
                summary__item.classList.add(item.category.toLowerCase());
                icon.src = item.icon;
                category.innerText = item.category;
                score.innerText = item.score;

                container.append(summary__item)
            })
        })
}

fetchData()