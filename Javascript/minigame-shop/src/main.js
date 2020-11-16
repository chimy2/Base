
// Fetch the items from the JSON file
function loadItems(){
    return fetch('data/data.json')
    .then(response=>response.json())
    .then(json=>json.items);
}

// Update the list with the given items
function displayItems(items) {
    const container=document.querySelector('.items');
    container.innerHTML=items.map(item=>createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnnail">
        <span class="item__desctiption">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// 이벤트 처리 함수명을 작명할 때 처음은 on으로 작성한다
// Handle button click
function onButtonClick(event, items) {
    const dataset=event.target.dataset;
    const key=dataset.key;
    const value=dataset.value;
    if(key==null||value==null) return;
    displayItems(items.filter(item=>item[key]===value));
}

function setEventListeners(items) {
    // ❤이벤트 위임❤
    // 하나하나 이벤트 리스너를 반복 등록하지 않고 
    // 버튼들이 들어있는 컨테이너에
    // 이벤트 리스너를 등록하여 한곳에서만 핸들링할 수 있도록 한다
    const logo=document.querySelector('.logo');
    const buttons=document.querySelector('.buttons');
    logo.addEventListener('click', ()=> displayItems(items));
    // event object 안에 우리가 원하는 정보를 가져오기 위해 custom property를 사용한다
    // HTML5 커스텀 데이터 속성으로 개수의 제한이 없다
    // 'data-'로 시작
    buttons.addEventListener('click', event=>onButtonClick(event, items));
}

// main
loadItems()
.then(items=>{
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);