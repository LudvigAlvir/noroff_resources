---
header: "Lesson 2: 1 Images and Icons"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2022 [Ludvig Alvir](https://www.noroff.no/en/contact/staff/) using [Marp](https://marp.app/)"
---

<!-- prettier-ignore -->
# Images

Added into HTML as content with img tag or to an element using the background-image property in css.

<!-- prettier-ignore -->
```html
    <img src="images/logo.png" alt="Logo of MyWebsite.com"/>>
```

<!-- prettier-ignore -->
```css
    .logo{
        background-image: url("images/logo.png");
    }
```

---

<!-- prettier-ignore -->
## Images

- src(html)/url(css)

  - Location of the image, use relative path unless the image is hosted on another site.

- alt(html)
  - Alternative text, used by accesibility tools and search engines, and shown if the image does not load. Always have this.
- Set sizes and style images in css.

---

<!-- prettier-ignore -->
## Border radius

Rounds the corners of a container.

<!-- prettier-ignore -->
```css
    border-radius: 50%; /* makes the element completely round  */
    border-radius: 20px; /*rounds all corners*/
    border-radius: 20px 70px; /* top left and bottom right 20px, top right and bottom left 70px*/
    border-radius: 20px 50px 30px 10px;/*set specific rounding for each corner*/
```

---

<!-- prettier-ignore -->
## Styling images

<!-- prettier-ignore -->
```css
 .logo {
        background-image: url("images/hero.png");
        width: 95vw;
        height: 50vh;
        filter: blur(5px);
        opacity: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
```

---

<!-- prettier-ignore -->
## Font awesome

Free icon library we can use on our websites.

<!-- prettier-ignore -->
```html
    <i class="fa-beat fa-solid fa-heart"></i>
```

https://fontawesome.com/
