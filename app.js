function getElement(id) {
    return document.getElementById(id);
}

fetch('data.json')
    .then(res => res.json())
    .then(res => {
        let data = res;
        // console.log(data)
        getElement('reaction-icon').src = data[0].icon;
        getElement('reaction-category').innerText = data[0].category;
        getElement('reaction-score').innerText = data[0].score;
        getElement('memory-icon').src = data[1].icon;
        getElement('memory-category').innerText = data[1].category;
        getElement('memory-score').innerText = data[1].score;
        getElement('verbal-icon').src = data[2].icon;
        getElement('verbal-category').innerText = data[2].category;
        getElement('verbal-score').innerText = data[2].score;
        getElement('visual-icon').src = data[3].icon;
        getElement('visual-category').innerText = data[3].category;
        getElement('visual-score').innerText = data[3].score;
    });
