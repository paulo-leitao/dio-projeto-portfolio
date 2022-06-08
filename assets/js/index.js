const checkbox = document.getElementById('toggle');

const links = document.getElementById('links');


const close = () => {
  if(checkbox.checked === true) checkbox.checked = false;
}

links.addEventListener('click', close);