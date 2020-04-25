gugudan();

function gugudan(){
    const $num = document.getElementById('num');
    const $btn = document.getElementById('btn');
    const $result = document.getElementById('result');

    $btn.addEventListener('click', (event) => {
        let input = $num.value;

        if(!isNumber(input)){
            alert('정확한 숫자를 입력하시오');
                return;
        };

        let str = "";
        for(let i=1;i<10;i++){
            str = `${str}${input} X ${i} = ${input*i}<br>`;
        }

        $result.innerHTML = str;
    });
}

function isNumber(num){
    // num이 정수라면, 0을 더해도 원래 값과 같을 것이고,
    // num이 문자열이라면, 0을 더하면 원래 값과 다를 것이다.
    var compare = parseInt(num)+0;
    return num == compare;
}
