const images = ["スクリーンショット 2023-05-10 120621.png",
 "スクリーンショット 2023-05-10 120847.png", 
 "スクリーンショット 2023-05-10 121127.png"];
let currentIndex = 0;

document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slider-image').src = images[currentIndex];
});

document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('slider-image').src = images[currentIndex];
});
