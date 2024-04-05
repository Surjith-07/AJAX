var button = document.getElementById("btn");
var info = document.getElementById("info-body");
var pageCounter = 1;

button.addEventListener('click', () => {
    var xmlrequest = new XMLHttpRequest();
    xmlrequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter++}.json`)
    xmlrequest.send();
    xmlrequest.onload = () => {
        var data = JSON.parse(xmlrequest.responseText);
        renderHTML(data)
    };
    if (pageCounter > 3) {
        button.classList.add("hide-me");
    }
});


function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; ++i) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " likes ";
        for (j = 0; j < data[i].foods.likes.length; ++j) {
            htmlString += (j == 0) ? data[i].foods.likes[j] + " " : "and " + data[i].foods.likes[j] + " ";
        }
        htmlString += ", dislikes "
        for (k = 0; k < data[i].foods.dislikes.length; ++k) {
            htmlString += (k == 0) ? data[i].foods.dislikes[k]+" " : "and " + data[i].foods.dislikes[k] + " ";
        }
    }

    htmlString += ".</p>";
    info.insertAdjacentHTML('beforeend', htmlString)
}

