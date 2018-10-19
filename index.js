let container = document.querySelector('#main');
let keypad = document.querySelector('#keypad');
let input = document.querySelector('#input');

let numArr = ['9','8','7','6','5','4','3','2','1','0', '='];
let inputArr = [];

input.innerHTML = '0';

numArr.map(num => {
    let numKey = document.createElement('button');
    numKey.className = "numKey";
    numKey.id = `num${num}`;
    numKey.addEventListener('click', function(e){
        //let numStr = e;
        console.log(e);
        console.log(e.target);
        console.log(e.target.dataset);
        console.log(e.target.dataset.action);
        // inputArr.push(Number(e.target.textContent));
        // addNum(inputArr);
    });
    numKey.innerHTML = num;
    keypad.appendChild(numKey);
});

let addNum = (num) => {
    var add = num.reduce((total, current) => total+current);
    input.innerHTML = add;
};