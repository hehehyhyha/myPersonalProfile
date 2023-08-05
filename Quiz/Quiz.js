function changeColor() { 
    var inputtedText1 = document.getElementById("myText1").value
    var inputtedText2 = document.getElementById("myText2").value
    var inputtedText3 = document.getElementById("myText3").value
    var inputtedText4 = document.getElementById("myText4").value
    if(inputtedText1 == "Washington"){
    document.getElementById("Question1").style.color = "green"
    alert("You go it Right");
    }
    else{
        document.getElementById("Question1").style.color = "red"
        alert("Wrong it was Washington");
    }

     if(inputtedText2 == "Whale"){
        document.getElementById("Question2").style.color = "green"
        alert("You go it Right");
        }
        else{
            document.getElementById("Question2").style.color = "red"
            alert("Wrong it was Whale");
        }

  
        if(inputtedText3 == "Joe Biden"){
        document.getElementById("Question3").style.color = "green"
        alert("You go it Right");
        }
        else{
            document.getElementById("Question3").style.color = "red"
            alert("Wrong it was Joe Biden");
        }

        if(inputtedText4 == "Tinubu"){
        document.getElementById("Question4").style.color = "green"
        alert("You go it Right");
        }
        else{
            document.getElementById("Question4").style.color = "red"
            alert("Wrong it was Tinubu");
        }
}
