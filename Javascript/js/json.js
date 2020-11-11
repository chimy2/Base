'use strict';
// JSON(JavaScript Object Notation)
// simplest data interchange format
// - 데이터를 교환할 때 쓸 수 있는 가장 간단한 데이터 포맷
// lightweight text-based structure
// - 가벼운 텍스트 기반 구조
// easy to read
// - 읽기 쉽다
// key-value pairs
// - Javascript의 Object에 영감을 받아 key와 value로 이루어져 있다
// used for serialization and transmission of data between the network the network connection
// - 네트워크 사이의 데이터의 직렬화와 데이터 전송에 사용
// independent programming language and platform
// - 프로그래밍 언어나 플랫폼에 독립적이다

// Study Point 
// (1) Object를 어떻게 직렬화(serialize)하여 JSON(string)으로 변환하는가?
// (2) 직렬화된 JSON(string)을 어떻게 역직렬화(deserialize)하여 Object로 변환하는가?

// 1. Object to JSON : stringify(obj)
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit={
    name: 'tori',
    color: 'white',
    size: null, 
    birthDate: new Date(),
    symbol: Symbol('id'),
    // symbol같은 Javascript에만 존재하는 특별한 데이터는 JSON으로 변환 시 포함되지 않는다
    jump: ()=>console.log(`${name} can jump!`) 
    // 함수는 Object의 데이터가 아니기 때문에 JSON으로 변환 시 포함되지 않는다
}
json=JSON.stringify(rabbit);
console.log(json);

json=JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json=JSON.stringify(rabbit, (key, value)=>{
    return key==='name' ? 'chimy' : value;
});
console.log(json);

// 2. JSON to Object : parse(json)

json=JSON.stringify(rabbit);
let obj=JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); <- obj에는 jump method가 포함되지 않으므로 에러가 발생한다

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());
// birthDate의 값은 string으로 변환되었기 때문에 date를 가져올 수 없다
// reviver이라는 callback 함수를 이용하여 처리할 수 있다

obj=JSON.parse(json, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key==='birthDate' ? new Date(value) : value;
});
console.log(obj.birthDate.getDate());

// 유용한 사이트
// (1) JSON Diff
// http://www.jsondiff.com/
// 서버에서 받아온 2개의 데이터의 차이를 찾을 때 유용한 사이트
// (2) JSON Beautifier
// https://jsonbeautifier.org/ 
// 서버에서 받아온 JSON의 형식이 망가졌을 때 간단하게 변환해주는 사이트
// (3) JSON Parser
// https://jsonparser.org/
// JSON 데이터를 Object 형식으로 변환해주는 사이트
// (4) JSON Validator
// https://tools.learningcontainer.com/json-validator/
// JSON 데이터가 유효한지 확인할 수 있는 사이트