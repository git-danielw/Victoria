// Turn on debug mode only if the domain name (split by dot) starts with a number (127.0.0.1 -> 127 turns on debug mode, example.com -> example does not)
// Set the first argument to false if you want debug mode off
let debug = true && !isNaN(location.hostname.split('.')[0]);
let debugOptions = {
    animationSpeed: 0.1,
    popup: '', // Empty string for no popup
};