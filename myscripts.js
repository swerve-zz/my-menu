function myFunction() {
  document.getElementById("calendar").innerHTML = "I've changed to September";
}


    function addImage() {
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const imageContainer = document.getElementById("imageContainer");
    
    // Clear any previous image
    imageContainer.innerHTML = "";

    // Map keywords to image URLs. This is an array. Must separate by commas or else it breaks.
    const images = {
        "pokemon": "/Iono.png",
        "ice": "https://github.com/swerve-zz/my-menu/blob/main/Ice.png"
    };

    // Check if the keyword matches an image
    if (images[keyword]) {
        const img = document.createElement("img");
        img.src = images[keyword];
        img.alt = keyword;
        imageContainer.appendChild(img);
    } else {
        imageContainer.innerHTML = "No image found for that keyword.";
    }
}
