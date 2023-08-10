function validateLinkedInURL(url) {
    const pattern = /^https:\/\/www.linkedin.com\/in\/[\w\d-]{5,50}[\w\d]$/;

    if (pattern.test(url)) {
        console.log("Valid LinkedIn Profile URL");
    } else {
        console.log("Invalid LinkedIn Profile URL");
    }
}

validateLinkedInURL("https://www.linkedin.com/in/username123");
validateLinkedInURL("https://www.linkedin.com/in/sandip-panda-7136a71b0")
// Diference betwen last two url 
validateLinkedInURL("https://www.linkedin.com/in/sandip-panda-7136a71b0/")
