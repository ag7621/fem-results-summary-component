# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop preview image for Profile card component challenge](/assets/images/desktop-view.png "Desktop preview")
![Mobile preview image for Profile card component challenge](/assets/images/mobile-view.png "Mobile preview")

### Links

- Solution URL: [Solution](https://github.com/ag7621/fem-results-summary-component)
- Live Site URL: [Live site](https://ag7621.github.io/fem-results-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

This challenge gave an additional challenge of using Javascript to use json data to populate information for the summary section. Initially I tried to call each of the json data to fill in previously created html markup and while I was able to accomplish this I wasn't entirely satisfied. Having played around with creating sites using API data previously, I decided to use the technique I learned there by using templates and letting the html be created dynamically. I felt this might be more closely related to what a real site might do with data/API to populate sites with than what I had initially done. 

I am reasonably happy with the result and my code is as shown below, however I'm still unsure whether this is a practical solution, or one that is properly utilized. Any insights would be most appreciated.

```html
<template data-template>
    <div class="summary__item">
        <img data-icon alt=""></img>
        <h3 data-category></h3>
        <p><span data-result></span> / 100</p>
    </div>
</template>
```
```js
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
```

### Continued development

I'm still in the habit of creating properly responsive websites so it is something I will continue to work on. This is my first challenge using Javascript as well so I plan to continue challenges that will give me much more practice and the potential for feedback. Overall I enjoy these challenges very much.

### Useful resources

- [Josh W Comeau CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) - A CSS reset referred to in a video by Kevin Powell.

## Author

- Frontend Mentor - [@ag7621](https://www.frontendmentor.io/profile/ag7621)