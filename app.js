function getElement(id) {
    return document.getElementById(id);
}

// function fetchData() {
//     fetch('data.json')
//         .then(res => res.json())
//         .then(res => {
//             let data = res;
//             // console.log(data)
//             getElement('reaction-icon').src = data[0].icon;
//             getElement('reaction-category').innerText = data[0].category;
//             getElement('reaction-score').innerText = data[0].score;
//             getElement('memory-icon').src = data[1].icon;
//             getElement('memory-category').innerText = data[1].category;
//             getElement('memory-score').innerText = data[1].score;
//             getElement('verbal-icon').src = data[2].icon;
//             getElement('verbal-category').innerText = data[2].category;
//             getElement('verbal-score').innerText = data[2].score;
//             getElement('visual-icon').src = data[3].icon;
//             getElement('visual-category').innerText = data[3].category;
//             getElement('visual-score').innerText = data[3].score;
//         });
// }
const template = document.querySelector('[data-template]');
const container = document.querySelector('.summary__content');

function fetchData() {
    fetch('data.json')
        .then(res => res.json())
        .then(res => {
            let data = res;
            // console.log(data)
            data.forEach(item => {
                // console.log(item)
                const summary__item = template.content.cloneNode(true).children[0];
                // const item__container = document.querySelector('.summary__score-container');
                // const icon = summary__item.querySelector('.score__icon');
                // const category = summary__item.querySelector('.score__category');
                // const score = summary__item.querySelector('.score__result');
                const icon = summary__item.querySelector('[data-icon]');
                const category = summary__item.querySelector('[data-category]');
                const score = summary__item.querySelector('[data-result]');
                icon.src = item.icon;
                category.innerText = item.category;
                score.innerText = item.score;
                console.log(summary__item)
                // console.log(item__container)
                // console.log(icon);
                // console.log(category);
                // console.log(score);
                summary__item.classList.add(item.category.toLowerCase());
                container.append(summary__item)
            })
        })
}

fetchData()