let fetchedNavBar = false;
fetch('src/pages/reusables/navBar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navBarPlaceholder");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
}).then(() => {
    fetchedNavBar = true;
})