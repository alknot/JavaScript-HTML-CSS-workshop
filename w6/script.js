const contents = document.querySelectorAll('.content');

document.addEventListener('scroll', showText);

function showText() {
  contents.forEach((section) => {
    console.log(section.querySelector('img'));
    const imgElement = section.querySelector('img');
    const textElement = section.querySelector('.text');

    const scrollPosition = window.pageYOffset;
    const textPos = imgElement.offsetTop + imgElement.offsetHeight / 50;
    if (scrollPosition > textPos) {
      textElement.classList.add('show');
    } else {
      textElement.classList.remove('show');
    }
  });
}
showText();