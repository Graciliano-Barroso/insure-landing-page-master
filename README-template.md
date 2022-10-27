# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Challenge result in desktop version](./challenge-result/Desktop-version.png)

##

![Challenge result in mobile version](./challenge-result/Mobile-version.png)


### Links

- Video URL introducing the project.: [click here](https://www.linkedin.com/posts/gracilianobarroso_e-a%C3%AD-pessoal-mais-um-projeto-conclu%C3%ADdo-ugcPost-6986759349930995712-4h38?utm_source=share&utm_medium=member_desktop)
- Live Site URL: [click here](https://graciliano-barroso.github.io/insure_landing_page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - JS library

### What I learned

One of the things I learned in this project was the application of a property called z-index and another was to make a menu with animation changing with the click from menu amburger to X to close.

Below I will leave examples of the two things I learned:

This one about the z-index:

```html
<img class="ripples-right-desktop" src="./assets/images/bg-pattern-intro-right-desktop.svg" alt="Linhas onduladas a rigth da intro">
```
```css
.ripples-right-desktop {
    z-index: 1;
    position: absolute;
    right: 0px;
    top: 81px;
}
```
And this one about the animated menu:

```html
<div id="toggle"></div>
```
```css
#toggle {
    position: relative;
    width: 35px;
    height: 35px;
    background-color: var(--Very-Light-Gray);
    border: 1px solid var(--Very-Dark-Violet);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
}    

#toggle::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 2px;
    background-color: var(--Very-Dark-Violet);
    transition: 0.5s;
    transform: translatey(-8px);
    box-shadow: 0 8px 0 var(--Very-Dark-Violet);
}

#toggle.active::before {
    transform: translatey(0px) rotate(45deg);
    box-shadow: 0 0 0 var(--Very-Dark-Violet);
}

#toggle::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 2px;
    background: var(--Very-Dark-Violet);
    transition: 0.5s;
    transform: translatey(8px);
}

#toggle.active::after {
    transform: translatey(0px) rotate(-45deg);
}
```

```js
let toggle = document.getElementById('toggle');
toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active');
});
```
### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
