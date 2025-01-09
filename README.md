# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- [Solution URL](https://github.com/Arkanit7/blog-preview-card)
- [Live Site URL](https://arkanit7.github.io/blog-preview-card)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Mobile-first workflow
- [Astro](https://astro.build) - The web framework for content-driven websites

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

Astro Image component allows easily crop, convert and optimize images:

```astro
<Image src={addressPicture} alt="" width={32} height={32} format="avif" />
```

Using variables with numbered naming convention is really flexible:

```scss
// Font Families
$ff-sans-primary: Figtree, sans-serif;

// Colors
$clr-grey-500: hsl(0deg 0% 42%);
$clr-grey-950: hsl(0deg 0% 7%);
$clr-yellow: hsl(45deg 87% 66%);
$clr-white: hsl(0deg 0% 100%);

// Sizes
$spacing-50: rem(4px);
$spacing-100: rem(8px);
$spacing-150: rem(12px);
$spacing-200: rem(24px);
$spacing-250: rem(32px);

// Font sizes
$fs-500: rem(24px);
$fs-400: rem(20px);
$fs-300: rem(16px);
$fs-200: rem(14px);
$fs-100: rem(12px);
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Yabe Webfont](https://webfont.yabe.land/en/misc/convert-ttf-woff2/) - This helped convert ttf **variable** font in to woff2.
- [Astro Docs](https://docs.astro.build/en/getting-started/) - Great official wiki to help you with Astro.

## Author

- Website - [Portfolio](https://arkanit7.github.io/)
- Frontend Mentor - [@Arkanit7](https://www.frontendmentor.io/profile/Arkanit7)
