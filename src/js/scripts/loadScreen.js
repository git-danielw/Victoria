let navBarGenerated = false;
if (debug) document.querySelector(':root').style.setProperty('--animation-speed', `${debugOptions.animationSpeed}s`);

let video = document.getElementsByClassName('headerVideo')[0];
let loadedVideo = false;

setTimeout(() => {
    video.oncanplaythrough = () => {
        if (!loadedVideo) {
            loadedVideo = true;
            const waitUntilLoad = setInterval(() => {
                if (loadFetched) {
                    clearInterval(waitUntilLoad);
                    document.getElementById('load').classList.add('hide');
                    if (fetchedNavBar) loadNavbar();
                    setTimeout(() => {
                        document.getElementById('load').style.display = 'none';
                        if (fetchedNavBar && !navBarGenerated) loadNavbar();
                        if (!fetchedNavBar) {
                            const waitUntilRun = setInterval(() => {
                                if (fetchedNavBar) {
                                    loadNavbar();
                                    clearInterval(waitUntilRun);
                                }
                            }, (debug ? 10 : 300));
                        }
                    }, (debug ? 10 : 1000));
                }
            }, (debug ? 10 : 400));
        }
    }
}, (debug ? 10 : 2000));