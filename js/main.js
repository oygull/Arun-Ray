let elModeBtn= document.getElementById('modeBtn');
let elSearchBtn= document.getElementById('searchBtn');
let elModalBox= document.getElementById('modalBox');
let elCloseBtn= document.getElementById('closeBtn');

elModeBtn.addEventListener('click', function(){
  document.body.classList.toggle('dark');
})
elSearchBtn.addEventListener('click', function(){
  elModalBox.classList.add('show');
})
elCloseBtn.addEventListener('click', function(){
  elModalBox.classList.remove('show');
})