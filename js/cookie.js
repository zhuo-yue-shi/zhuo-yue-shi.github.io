function getCookie(name) {
    const cookieArr = document.cookie.split('; ');
    
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=');
        
        /* Removing double quotes around the cookie value */
        if (name === cookiePair[0]) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if the cookie wasn't found
    return null;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}