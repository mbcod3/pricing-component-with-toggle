const toggle = document.getElementById('toggle')
const basic = document.getElementById('price-basic')
const pro = document.getElementById('price-pro')
const master = document.getElementById('price-master')

toggle.addEventListener('click', () => {
  if (toggle.checked) {
    basic.innerText = '19.99';
    pro.innerText = '24.99';
    master.innerText = '39.99';
  } else {
    basic.innerText = '199.99';
    pro.innerText = '249.99';
    master.innerText = '399.99';
  }
})