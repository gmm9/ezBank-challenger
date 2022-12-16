const btnMenu = document.querySelector('.header__icon--menu');
const bgModal = document.querySelector('.navbar__modal--background');
const btnClose = document.querySelector('.header__icon--close');
const headerNav = document.querySelector('.header__navigation');

btnMenu.addEventListener('click', e => {
    bgModal.classList.add('show');
    btnClose.style.display = 'block';
    btnMenu.style.display = 'none'
})

btnClose.addEventListener('click', e => {
    bgModal.classList.remove('show');
    btnClose.style.display = 'none';
    btnMenu.style.display = 'block'
})
bgModal.addEventListener('click', e => {

    console.log(e.target.classList.value)
if(e.target.classList.value == 'navbar__modal--background show'){
    bgModal.classList.remove('show');
    btnClose.style.display = 'none';
    btnMenu.style.display = 'block'
}})

headerNav.addEventListener('click', e => {
    console.log(e.target.classList.value)
    if(e.target.classList.value == 'header__navigation' || e.target.classList.value == 'header__logo'){
        bgModal.classList.remove('show');
        btnClose.style.display = 'none';
        btnMenu.style.display = 'block'
}});