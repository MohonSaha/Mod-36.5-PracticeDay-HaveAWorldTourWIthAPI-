const uploadData = () => {
    // console.log("clicked Done");
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhotos(data));
}

const displayPhotos = (photos) => {
    const photoContainer = document.getElementById("Photo-Galary");
    for (photo of photos) {
    //    console.log(photo);
    const div = document.createElement("div");
    div.innerHTML = `
        <h3> ${photo.title} </h3>
        <img width="150px" src="${photo.url}" alt="">
        `;
    photoContainer.appendChild(div);
    
    }
}