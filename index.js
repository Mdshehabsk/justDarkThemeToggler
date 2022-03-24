

const btn = document.querySelector('.btn')

const body = document.querySelector('body')


btn.addEventListener('click', ()=>{
    body.classList.toggle('dark-theme')
    console.log('nice')
})

const preloader = document.getElementById('preloader')

const loadFunc = ()=>{
    preloader.style.display = 'none'
}