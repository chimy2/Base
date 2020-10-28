const req=new XMLHttpRequest();
req.open("GET", "./json/img_list.json");
req.onreadystatechange=function(){
    if(this.readyState==4){
        // console.log(this.response);
        const data=JSON.parse(this.response);
        const main=document.createElement('main');
        for(let i=0;i<data.length;i++){
            let div=document.createElement("div");
            div.setAttribute("class", "img");
            let img=document.createElement("img");
            img.src=data[i];
            div.appendChild(img);
            main.appendChild(div);
        }document.body.appendChild(main);
    }
}
req.send();