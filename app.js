const colors = [
  'red',
  'yellow',
  'green',
  'blue',
  'orange',
  'purple',
  'violet',
  'indigo',
];

const container = document.querySelector('section');
const h1 = document.querySelector('h1');
const selctedColor = document.querySelector('#slected-color');

for (let color of colors) {
  const box = document.createElement('div');
  box.classList.add('box');

  container.appendChild(box);

  box.style.backgroundColor = color;

  box.addEventListener('click', () => {
    h1.innerText = 'You have selcted color: ';
    selctedColor.innerText = color;
  });
}
