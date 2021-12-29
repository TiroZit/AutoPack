export function burger(){
  const burger = document.querySelector('.burger')
  burger.addEventListener('click', function(){
    this.classList.toggle('open');
    document.body.classList.toggle('lock');
  })
}