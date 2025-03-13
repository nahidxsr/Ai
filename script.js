function generateImage() {
    let prompt = document.getElementById("prompt").value;
    let imageUrl = `https://rximagegen.r1y4zrx.workers.dev/?prompt=${encodeURIComponent(prompt)}`;
    
    let imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
}
