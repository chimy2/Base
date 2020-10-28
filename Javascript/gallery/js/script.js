const req=new XMLHttpRequest();
req.open("GET", "./json/img_list.json");
req.onreadystatechange=function(){
    if(this.readyState==4){
        // console.log(this.response);
        const data=JSON.parse(this.response);
        const main=document.createElement('main');
        for(let i=0;i<data.length;i++){
            const div=document.createElement("div");
            div.setAttribute("class", "img");
            const img=document.createElement("img");
            img.src=data[i];
            div.onclick=function(){
                // if문으로 구분 시 비효율적이므로 toggle을 이용한다
                //
                // if(this.getAttribute("class").indexOf("img-selected")==-1){
                //     div.setAttribute("class", "img img-selected");
                // }
                // else{
                //     this.setAttribute("class", "img");
                // }
                this.classList.toggle("img-selected");
            }
            div.onmouseover=function(){
                const element=this;
                this.timeId=setTimeout(function(){
                    element.classList.add("img-magnified");
                    let img=document.createElement("img");
                    img.src=data[i];
                    element.appendChild(img);
                }, 1000);
            }
            div.onmouseout=function(){
                clearTimeout(this.timeId);
                if(this.childElementCount>1){
                    this.childNodes[1].remove();
                }
                this.classList.remove("img-magnified");
            }
            div.appendChild(img);
            main.appendChild(div);
        }document.body.appendChild(main);
    }
}
req.send();

function selectAll(btn){
    const imgs=document.getElementsByClassName("img");
    for(let i=0;i<imgs.length;i++){
        if(btn.value=="Unselect All"){
            imgs[i].classList.remove("img-selected");
        }else{
            imgs[i].classList.add("img-selected");
        }
    }
    if(btn.value=="Unselect All"){
        btn.value="Select All";
    }else{
        btn.value="Unselect All";
    }
}

function slideShow(btn){
    const imgs=document.getElementsByClassName("img");
    let index=0;
    imgs[index].classList.add("img-magnified");
    // console.log(imgs[index].childNodes[0].src);
    const img=document.createElement('img');
    img.src=imgs[index].childNodes[0].src;
    imgs[index].appendChild(img);
    let intervalId=setInterval(function() {
        if(imgs[index].childElementCount>1){
            imgs[index].childNodes[1].remove();
        }
        imgs[index++].classList.remove("img-magnified");
        if(index<imgs.length){
            img.src=imgs[index].childNodes[0].src;
            imgs[index].appendChild(img);
            imgs[index].classList.add("img-magnified");
        }else{
            clearInterval(intervalId);
        }
    }, 1000);
}