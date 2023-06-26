function increment(){
    var number = Number(document.getElementById('number').innerHTML) //Number() used to convert string to int and .innerHtml is used to get value
    document.getElementById('number').innerHTML = number+1  //to increment
}

function decrement(){
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number-1
}

function neutral(){
    document.getElementById('number').innerHTML = 0
}