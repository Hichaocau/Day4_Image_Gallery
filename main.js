const images = document.querySelectorAll(".wrapper .image img");
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery-inner img");
const close = document.querySelector(".gallery .close");

const next = document.querySelector(".control.next");
const prev = document.querySelector(".control.prev");

var currentIndex = 0;

// display
function showGallery() {
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')

    if(currentIndex === images.length - 1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }

    if(currentIndex === 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }
}

images.forEach(function(item, index){
    item.addEventListener("click", function(){
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

// event keyboard
document.addEventListener('keydown', function(event){
    if(event.keyCode === 27){
        gallery.classList.remove('show')
    }
})

next.addEventListener('click', function(){
    if(currentIndex < images.length-1){
        currentIndex++
        showGallery()
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery()
    }
})