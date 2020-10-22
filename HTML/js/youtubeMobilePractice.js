const titleName=document.querySelector('.titleName');
const titleNameBar=document.querySelector('.titleNameBar');

titleNameBar.addEventListener('click', ()=>{
    if(titleName.style.height=='auto'){
        document.querySelector('.titleName').setAttribute('style', 'height: 20px;');
    }else{
        document.querySelector('.titleName').setAttribute('style', 'height: auto;');
    }
});