var intro = document.getElementsByClassName('intro');



var myInput = document.getElementById('myText');



function diplayInput(){
    var input = document.getElementById('myText').value;
    document.getElementsByClassName('intro')[0].innerHTML = input;
}



