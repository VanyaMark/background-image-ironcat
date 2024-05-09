const pictures = [
  "https://cdn2.thecatapi.com/images/1bn.png",
  "https://cdn2.thecatapi.com/images/eds.jpg",
  "https://cdn2.thecatapi.com/images/c38.jpg",
  "https://cdn2.thecatapi.com/images/53h.jpg",
  "https://cdn2.thecatapi.com/images/9hl.jpg"
];

/**
 * ¿Qué variable de estado vamos a necesitar?
 * ¿Cómo se establece la imagen de fondo de un elemento mediante un estilo en línea?
 */

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const slider = document.querySelector('.img-container')

let index = 0;

// document.querySelector('.img-container').style.backgroundImage = `url(${pictures[index]})`;

slider.style.backgroundImage = `url(${pictures[index]})`;

const handleClickBtnLeft = () => {
  index--;
  if (index >= 0 && index < 4) {
    console.log(index);
    slider.style.backgroundImage = `url(${pictures[index]})`;
  } else {
    index = 4;
    slider.style.backgroundImage = `url(${pictures[index]})`;
  }
}
const handleClickBtnRight = () => {
  index++;
  if (index >= 0 && index <= 4) {
    console.log(index);
    slider.style.backgroundImage = `url(${pictures[index]})`;
  } else {
    index = 0;
    slider.style.backgroundImage = `url(${pictures[index]})`;
  }
}

btnLeft.addEventListener('click', handleClickBtnLeft);
btnRight.addEventListener('click', handleClickBtnRight);