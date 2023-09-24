let ham = document.querySelector('.m-content img');
let mContent = document.querySelector('.m-content');
let mList= document.querySelector('.m-list-inner');
let close = document.querySelector('.close');
 ham.addEventListener('click', function(){
   close.style.display='block';
   ham.style.display='none';
    mContent.style.height ='35rem';
    mList.style.display = 'block';
})
close.addEventListener('click', function(){
    close.style.display='none';
    ham.style.display='block';
    mContent.style.height ='0';
    mList.style.display = 'none';
})
