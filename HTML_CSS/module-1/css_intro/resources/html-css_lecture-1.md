---
header: "Lesson 1: CSS Intro "
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2022 [Ludvig Alvir](https://www.noroff.no/en/contact/staff/) using [Marp](https://marp.app/)"
---

<!-- prettier-ignore -->
# HTML

HyperText Markup Language

- Web pages are html files
- Create elements using tags "<>"
- The browser translates the text into a web page
- Write semantic where possible (Using tags that are related to the content)

---

<!-- prettier-ignore -->
## Head

Inside the head tag is where we place content not shown on the web page

<!-- prettier-ignore -->
```html
<head>
    <title>Homepage</title>
    <meta name="description" content="The home page to my website" />
    <link rel="stylesheet" href="css/style.css">
</head>
```

---

<!-- prettier-ignore -->
## Body

Inside the body tag is where we place all content to be displayed on the page

<!-- prettier-ignore -->
```html
<body>
    <h1>Title</h1>
    <p>This is my Homepage, welcome!</p>
    <img href= "images/dog.jpg" alt="Picture of a dog"/>
    <a href="about.html">More about me can be found on this page</a>
</body>
```

---

<!-- prettier-ignore -->
## Elements

we use tags to create HTML elements. Elements are used to display content, and can be nested together. Elements have different properties the browser displays to the user.

<!-- prettier-ignore -->
```html
<h1>Most important heading</h1>
<h2>Second most important heading</h2>
<p>A block of text</p>
<a href="#">Anchor tag, used for links</a>

```

---

<!-- prettier-ignore -->
## Sections

We group the html into sections for our own sake, making the code easier to edit, and for accesibility purposes for users.
We use header for the first section on a "page", usually contains navigation or some design to introduce users.

<!-- prettier-ignore -->
```html
   <header>
        <i class="logo">Logo</i>
        <nav>
            <a href="link.html">Link 1</a> 
            <a href="link.html">Link 2</a>
            <a href="link.html">Link 3</a>
        </nav>
    </header>

```

---

<!-- prettier-ignore -->
## Main

The main tag is used for the main content of a page, only use one main element for each page.

<!-- prettier-ignore -->
```html
<main>
    <!-- Most content on the page goes in here -->
</main>
```

---

<!-- prettier-ignore -->
## Section

To split the page into more sections we use the section tag. Content that is grouped together can be in the same section.

<!-- prettier-ignore -->
```html
<main>
    <section class="section-computers">
        <p>Content about computers</p>
    </section>

    <section class="section-phones">
        <p>Content about phones</p>
    </section>
</main>
```

---

<!-- prettier-ignore -->
## Footer

The footer tag is usually used for extra information displayed on the bottom of a web page.

<!-- prettier-ignore -->
```html
<footer>
    <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="privacy.html">Privacy</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</footer>
```

---

<!-- prettier-ignore -->
## Div

The div elements are used when there is not a more semantically corret tag to use.

<!-- prettier-ignore -->
```html
<main>
    <section class="section-computers">
        <div class="flex-container">
            <article>
                <!-- An article about computers -->
            </article>

            <article>
                <!-- Another article about computers -->
            </article>
        </div>
    </section>
</main>
```

---

<!-- prettier-ignore -->
## Cascading Style Sheets

HTML is used for creating web pages, CSS is used to style them. We create .css files that we link to in the head section of a html document.

<!-- prettier-ignore -->
```html
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
```

---

<!-- prettier-ignore -->
## Selectors

In CSS we use three different selectors for selecting the HTML element or elements we want to style.

<!-- prettier-ignore -->
```css
h1{ /*Standard html elements*/
    font-size: 20px;
    color: #000;
}
.primary-heading{ /*When using classes, we use a "." in front to select them */
    font-size: 32px;
    color: #222;
}
#heading-computers{/*When using Id's, we use a "#" in front to select them */
    font-size: 28px;
    color: #777;
}
```

---

<!-- prettier-ignore -->
## Classes

Generally the best way to style elements. Can be used on multiple elements, and elements can have multiple classes.

<!-- prettier-ignore -->
```html
<h1 class="primary-color font-large">Large heading with primary color</h1>
<h2 class="primary-color font-medium">Medium heading with primary color<h2>
```

<!-- prettier-ignore -->
```css
.primary-color{
    color: #222;
}
.font-large{
    font-size:32px;
}
.font-medium{
    font-size:24px;
}
```

---

<!-- prettier-ignore -->
## ID's

Id's are used on a specific element and are unique. An element can have both an Id and use classes for styling. Id's are more used in JavaScript, and it's usually better to style them with classes

<!-- prettier-ignore -->
```html
<h2 id="computer-title" class="primary-color font-large">Title for computers</h2>
```

---

<!-- prettier-ignore -->
## Cheat sheet

<table>
  <thead>
    <tr>
      <th>Example</th>
      <th>What is selected</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">section {}</code></td>
      <td><code class="language-plaintext highlighter-rouge">section</code> elements</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">.highlighted {}</code></td>
      <td>Elements with a class of <code class="language-plaintext highlighter-rouge">highlighted</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">#logo {}</code></td>
      <td>Elements with an ID of <code class="language-plaintext highlighter-rouge">logo</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">section.highlighted {}</code></td>
      <td><code class="language-plaintext highlighter-rouge">section</code> elements with a class of <code class="language-plaintext highlighter-rouge">highlighted</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">section .highlighted {}</code></td>
      <td>Elements with a class of <code class="language-plaintext highlighter-rouge">highlighted</code> inside of <code class="language-plaintext highlighter-rouge">section</code> elements</td>
    </tr>
    
  </tbody>
</table>

---

<!-- prettier-ignore -->
## Cheat sheet

<table>
  
  <tbody>
<tr>
      <td><code class="language-plaintext highlighter-rouge">section &gt; .highlighted {}</code></td>
      <td>Elements with a class of <code class="language-plaintext highlighter-rouge">highlighted</code> that are direct descendants of a <code class="language-plaintext highlighter-rouge">section</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">section + .highlighted {}</code></td>
      <td>The first element with a class of <code class="language-plaintext highlighter-rouge">highlighted</code> after each <code class="language-plaintext highlighter-rouge">section</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">section, .highlighted {}</code></td>
      <td>All <code class="language-plaintext highlighter-rouge">section</code> elements, and all elements with a class of <code class="language-plaintext highlighter-rouge">highlighted</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">section ~ .highlighted {}</code></td>
      <td>All elements with a class of <code class="language-plaintext highlighter-rouge">highlighted</code> that are siblings of a <code class="language-plaintext highlighter-rouge">section</code></td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">input[type="text"] {}</code></td>
      <td><code class="language-plaintext highlighter-rouge">input</code> elements that have a type of <code class="language-plaintext highlighter-rouge">text</code></td>
    </tr>
  </tbody>
</table>

---

<!-- prettier-ignore -->
## Lesson task

https://github.com/Noroff-Education/lesson-task-htmlcss-module1-lesson1

https://github.com/Noroff-Education/lesson-task-htmlcss-module1-lesson2

https://github.com/Noroff-Education/lesson-task-htmlcss-module1-lesson3
