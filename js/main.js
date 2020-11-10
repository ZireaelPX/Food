const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
cartButton.addEventListener('click',function (event) {
    modal.classList.add('is-open');
});
// При нажатии на кнопку открывается коризна(когда случится событие выполни функцию)
close.addEventListener('click',function(event){
    modal.classList.remove('is-open');
});
// При нажатии на кнопку(закрытие), закрывает страницу

//cartButton.addEventListener('click',toggleModal);
//close.addEventListener('click',toggleModal);
// function toggleModal(){
//  modal.classList.toggle('is-open');
//} - использование только функции
new WOW().init()