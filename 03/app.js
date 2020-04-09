console.log(window.outerWidth); //window 사이즈
console.log(window.name);
//window.open("http://daum.net");

//DOM - 가져오기
var debug = document.getElementById("debug");
console.log(debug);

var box = document.querySelectorAll('.box');
console.log(box);

var debug2 = document.querySelector('#debug');
console.log(debug2)

//DOM - 생성, 삽입
var div = document.createElement('div');
console.log('div');
div.style.border = '1px solid #000';
div.innerHTML = 'Hello!';
document.body.appendChild(div);

const span = document.createElement('span');
const textNode = document.createTextNode('hello!!');
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

//DOM - 제거
var debug3 = document.getElementById('debug');
debug3.remove();

const list = document.getElementById('list');
list.removeChild(list.children[0]);

//event
function clickBody(){
    console.log('click');
}
document.body.addEventListener('click', clickBody);

var list2 = document.querySelector('#list');
console.log(list.children);

//for(var i=0;i<list2.children.length; i++){
//    list2.children[i].addEventListener('click', function(){
//        console.log(1);
//    })
//}

list2.addEventListener('click', function(event){
    if(event.target.nodeName == 'LI'){
        console.log(2);
    }
});

