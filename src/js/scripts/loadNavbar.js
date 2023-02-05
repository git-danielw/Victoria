function loadNavbar() {
    navBarGenerated = true;
    let navBar = document.getElementById('navBar');
    let navButtons = [...document.getElementsByClassName('item')];
    let homeButton = document.getElementById('victoriaHome');
    let cancelButton = document.getElementById('cancel');
    let popUpSection = document.getElementById('popups');

    htmlElement.style.overflowY = 'scroll';

    //! DEBUG SETTINGS FOR NAVBAR
    if (debug) {
        // Show popups on load
        let debugPopUp = debugOptions.popup; // Empty for no popup, name of popup otherwise
        if (debugPopUp.length) showPopUp(debugPopUp);
    } else {

    }

    // Get scroll position and set to CSS variable --scroll-pos. This variable is used in CSS calculations.
    setInterval(() => {
        document.querySelector(':root').style.setProperty('--scroll-pos', window.scrollY);
    },(debug ? 10 : 100));

    function cancelFunc() {
        cancelButton.style.display = 'none';
        let previews = Array.from(document.getElementsByClassName('popup'));
        previews.forEach(e => {
            if (e.classList.contains('popUpShow')) e.classList.remove('popUpShow');
        });
        navButtons.forEach(e => {
            if (e.classList.contains('buttonActivate')) e.classList.remove('buttonActivate');
            e.getElementsByTagName('p')[0].style.color = '';
        });
        htmlElement.style.overflowY = 'scroll';
        popUpSection.style.zIndex = '-5';
        navBar.style.backgroundColor = "";
        homeButton.style.filter = "";
    }

    function showPopUp(id) {
        navBar.style.backgroundColor = `rgb(${window.getComputedStyle(navBar, null).getPropertyValue('background-color').replace('rgba(','').replace(')','').split(',').slice(0,3).join(',')})`;
        navButtons.forEach(e => e.getElementsByTagName('p')[0].style.color = 'rgb(0,0,0)');
        homeButton.style.filter = "brightness(0%)";
        let previews = [...document.getElementsByClassName('popUpShow')];
        let thisPreviewID = `preview-${id.replaceAll(' ','-')}`;
        previews.filter(e => e.id !== thisPreviewID).forEach(e => e.classList.remove('popUpShow'));
        document.getElementById(thisPreviewID).classList.add('popUpShow');

        navButtons.forEach(e => e.classList.remove('buttonActivate'));
        navButtons.find(e => e.getElementsByTagName('p')[0].innerHTML.toLowerCase() === id).classList.add('buttonActivate');

        cancelButton.style.display = 'block';
        htmlElement.style.overflowY = 'hidden';
        popUpSection.style.zIndex = '100';
    }

    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].onclick = function() {
            if (this.classList.contains('buttonActivate')) cancelFunc();
            else showPopUp(this.getElementsByTagName('p')[0].innerHTML.toLowerCase());
        }
    }

    cancelButton.onclick = cancelFunc;
}