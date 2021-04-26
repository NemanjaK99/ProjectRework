let slider = [
    {
        img: 'images/slider-image3.jpg',
        title: 'Efficient Learning Methods',
        text: 'Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque euex eu urna venenatis sollicitudin ut at libero. Vist teplatemo page.',
    },
    {
        img: 'images/slider-image2.jpg',
        title: 'Start your journey with our practical courses',
        text: 'Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque euex eu urna venenatis sollicitudin ut at libero. Vist teplatemo page.',
    },
    {
        img: 'images/slider-image1.jpg',
        title: 'Distance Learning Education Center',
        text: 'Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque euex eu urna venenatis sollicitudin ut at libero. Vist teplatemo page.',
    }
]

let sliderImg = document.querySelector('.slider-image')
let sliderHeading = document.querySelector('.slider-heading')
let sliderTxt = document.querySelector('.slider-text')

let prevBtn = document.querySelector('.left')
let nextBtn = document.querySelector('.right')

window.addEventListener('DOMContentLoaded', function(){
    showSlider()
})

let counter = 0

function showSlider(){
    let item = slider[counter]
    sliderImg.src = item.img
    sliderHeading.textContent = item.title
    sliderTxt.textContent = item.text
}

prevBtn.addEventListener('click', function(){
    counter++
    if(counter > slider.length - 1){
        counter = 0
    }
    showSlider()
})

nextBtn.addEventListener('click', function(){
    counter--
    if(counter < 0){
        counter = slider.length - 1
    }
    showSlider()
})