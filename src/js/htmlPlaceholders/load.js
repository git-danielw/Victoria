let loadFetched = false;
fetch('src/pages/reusables/load.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#loadPlaceholder");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
}).then(() => {
    loadFetched = true;
})