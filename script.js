var input = document.getElementsByClassName('textinput');
var button = document.getElementsByClassName('button');
var binary;
var decimal;
var res;

input[0].addEventListener('keyup', event => {
    if(window.event.keyCode == 13){
            input[0, 1].value = '';
            binary = input[0].value;
            decimal = input[1].value;

            while(binary > 0){
                input[1].value = input[1].value + ((binary % 2) | 0);
                console.log((binary % 2));
                binary = ((binary / 2) | 0);
            }
            
            input[1].value = input[1].value.split('').reverse().join('');
            input[0].value = '';
    }
})

input[1].addEventListener('keyup', event => {
    if(window.event.keyCode == 13){
        binary = input[0].value;
        decimal = input[1].value;
        decarray = decimal.split('').reverse();
        res = 0;

        for(exp = 0; (decarray[exp] * 1) < 2; exp++){
            decarray[exp] = (decarray[exp] * 1) * (2 ** exp);
            decarray[exp] = ' + ' + decarray[exp];
            res = eval(res + (decarray[exp]));
        }

        input[0].value = res;
        input[1].value = '';
    }
})

button[0].addEventListener('mousedown', event => {
    input[0, 1].value = '';
    binary = input[0].value;
    decimal = input[1].value;

    while(binary > 0){
        input[1].value = input[1].value + ((binary % 2) | 0);
        console.log((binary % 2));
        binary = ((binary / 2) | 0);
    }
            
    input[1].value = input[1].value.split('').reverse().join('');
    input[0].value = '';
})

button[1].addEventListener('mousedown', event => {
    binary = input[0].value;
    decimal = input[1].value;
    decarray = decimal.split('').reverse();
    res = 0;

    for(exp = 0; (decarray[exp] * 1) < 2; exp++){
        decarray[exp] = (decarray[exp] * 1) * (2 ** exp);
        decarray[exp] = ' + ' + decarray[exp];
        res = eval(res + (decarray[exp]));
    }

    input[0].value = res;
    input[1].value = '';
})