
    const menu = document.querySelector('.menu');
    const menubar = document.querySelector('#menubar');

    menubar.addEventListener('click', (e) => {
        if (window.getComputedStyle(menu).display === 'block') {
        menu.style.display = 'none';
        } else  {
        menu.style.display = 'block';
        }
    });
    window.onresize=function(){
        if(window.innerWidth>=768){
            document.querySelector('.menu').style.display='flex';
        }else{
            document.querySelector('.menu').style.display='none';
        }
    }