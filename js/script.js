const header = document.querySelector('header');
const menuIcon=document.getElementById('menu-icon');
const closeMenuIcon=document.getElementById('close-menu-icon');
const hamburgerMenu=document.querySelector('.hamburger-menu');
const buttonOne=document.querySelector('.btn-1');
let menuOpened=false;


document.addEventListener('scroll', ()=>{
    
    if(window.scrollY>100 && menuOpened==false){  /* agrega background después de la altura 100. Verifica que no esté abierto el hamburger menu para no superponerlo */
        header.classList.add('scrolled');  
    }else{
        header.classList.remove('scrolled');
    }
})


menuIcon.addEventListener('click', ()=>{
    if(menuOpened==false){
        hamburgerMenu.classList.add('is-active');
        menuIcon.classList.add('menu-opened');
        buttonOne.classList.add('hide');
        closeMenuIcon.classList.add('to-close');
        header.classList.remove('scrolled'); /* quita el background del header para no superponer con el menú abierto */
        menuOpened=true;
    }
})

closeMenuIcon.addEventListener('click',()=>{
    if(menuOpened==true){
        if(window.scrollY>100) /* condicion añadida para que no tenga que esperar el scroll event para agregar otra vez el background del header si y>100 */
            header.classList.add('scrolled'); 
        menuIcon.classList.remove('menu-opened');
        hamburgerMenu.classList.remove('is-active');
        closeMenuIcon.classList.remove('to-close');
        buttonOne.classList.remove('hide');
        menuOpened=false;
    }
})