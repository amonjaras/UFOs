# **UFO Sightings with JavaScript 👽**
JavaScript, HTML and CSS

## **INDEX**

- [Overview](#overview)

- [Results](#results)

- [Summary](#summary)

## **Overview**
Dana’s webpage and dynamic table are working as intended. As a next step, she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time.

In addition to the date, we’ll add table filters for the city, state, country, and shape.

[:top: Go To Top](#index)

## **Results**
[Live Demo](https://amonjaras.github.io/UFOs/)

**Code links**

[HTML file](https://github.com/amonjaras/UFOs/blob/main/index.html)

[JS and CSS](https://github.com/amonjaras/UFOs/tree/main/static)

Web page is displayed correctly and all filters are functional, as shown on Fig 1

> *Fig 1: UFOs mainpage*

![UFO main](https://github.com/amonjaras/UFOs/blob/main/Module%20Files/ufo_main.png)

To add the different filters, we added different lists into the HTML file.

```
<li class="bg-dark list-group-item">
    <label for="city">Enter City</label>
    <input type="text" placeholder="benton" id="city"/>
</li>
<li class="bg-dark list-group-item">
    <label for="state">Enter State</label>
    <input type="text" placeholder="ar" id="state"/>
</li>
<li class="bg-dark list-group-item">
    <label for="country">Enter Country</label>
    <input type="text" placeholder="us" id="country"/>
</li>
<li class="bg-dark list-group-item">
    <label for="shape">Enter Shape</label>
    <input type="text" placeholder="circle" id="shape"/>
</li>
```

In order for the filter to work, we created one variable to manage all filters. Modification was done inside the `app.js` file.

```
let changedElement = d3.select(this);

let elementValue = changedElement.property("value");
console.log(elementValue);

let filterId = changedElement.attr("id");
console.log(filterId);

```

[:top: Go To Top](#index)


## **Summary**

While using the filters, it was noticed that some improvements can be done:

- Use of dropdown menus

- The use of case insensitive; this was added into `app.js` to improve the use of the filters, allowing the user more flexibility while entering the data. Relate to Fig 2

```
value.toLowerCase()
```

> *Fig 2: Use of filters*

![UFO Filtes](https://github.com/amonjaras/UFOs/blob/main/Module%20Files/ufo_filters.png)

[:top: Go To Top](#index)

To give a better presentation a Footer was added to the work.


This work belongs to [^1].
Course [^2].
[^note]:
[^1]: Author: Audrey MONJARAS :mexico: :canada:
[^2]: Data Analytics: Unit 11 Creating Dynamic Content JavaScript/HTML/CSS 🛰
