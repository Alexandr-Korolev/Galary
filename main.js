let slides = document.querySelectorAll('.slide')

for (let item of slides) {
    
    item.addEventListener('click', ()=>{

        closeSlide()

        item.classList.add('active');
    })
}


function closeSlide() {
    slides.forEach(item => {
        item.classList.remove('active');
    })
}


