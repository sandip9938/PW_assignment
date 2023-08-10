function validateURL(url) {
    const pattern = /^(http:\/\/|https:\/\/)[\w\d\s\S]+\.[a-zA-Z]+$/;

    if (pattern.test(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
}

validateURL("https://www.example.com");
validateURL("https:/www.pwskills.com")
