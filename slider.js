const images = [
    "pic-1.webp",
    "pic-2.jpg",
    "pic-3.jpg",
    "pic-4.jpg",
]


let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval( () => {

    if(imgIndex === images.length){
        imgIndex = 0;
    }

    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl)

    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
} , 1300)