const request=new XMLHttpRequest();
const requestURL='./json/list.json';
const listUl=document.querySelector('.clothesList');
const clickItem=document.querySelectorAll('.selectList li a');

request.open('GET', requestURL);
request.responseType='json';
request.send();
request.onload=()=>{
    const list=request.response;
    for(let i=0;i<list.length;i++){
        const li=createLi(list, i); 
        listUl.appendChild(li);
    }
}

for(let i=0;i<clickItem.length;i++){
    clickItem[i].addEventListener('click', ()=>{
        const list=request.response;
        listUl.innerHTML='';
        for(let j=0;j<list.length;j++){
            if(clickItem[i].className!==list[j].color&&clickItem[i].className!==list[j].sort) continue;
            const li=createLi(list, j); 
            listUl.appendChild(li);
        }
    });
}

function createLi(list, i){
    const li=document.createElement('li');
    const img=document.createElement('img');
    img.src=`./img/${list[i].color}_${list[i].sort}.png`;
    const p=document.createElement('p');
    p.textContent=`${list[i].sex}, ${list[i].size}`;
    li.appendChild(img);
    li.appendChild(p);
    return li;
}