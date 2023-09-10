const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.bx-menu');
const arrow = document.querySelector('.bx-left-arrow-alt');

menu.addEventListener('click',()=>{
    sidebar.style.display='block';
})
arrow.addEventListener('click',()=>{
    sidebar.style.display='none';
})

if(sidebar.style.display='block'){
    main.style.opacity='2';
}

