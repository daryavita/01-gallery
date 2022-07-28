const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        deleteActiveClass()
        slide.classList.add('slide_active')
    })
})

const deleteActiveClass = () => {
    slides.forEach((slide) => {
        slide.classList.remove('slide_active')
    })
}