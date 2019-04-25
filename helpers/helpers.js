const hbs = require('hbs');


hbs.registerHelper("getyear", () => new Date().getFullYear());
hbs.registerHelper("capitalize", (text) => {
    let words = text.split(' ');
    words.forEach((element,index) => {
        words[index] = `${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()}`;
    });
    return words.join(' ');
});