function changeColor() { 
    var inputtedText1 = document.getElementById("myText1").value
    var inputtedText2 = document.getElementById("myText2").value
    var inputtedText3 = document.getElementById("myText3").value
    var inputtedText4 = document.getElementById("myText4").value
        //alert(inputtedText);
    if(inputtedText1 == "Washington"){
    document.getElementById("Question1").style.color = "green";
    }
    else{
        document.getElementById("Question1").style.color = "red"; 
    }

     if(inputtedText2 == "Whale"){
        document.getElementById("Question2").style.color = "green";
        }
        else{
            document.getElementById("Question2").style.color = "red"; 
        }

  
        if(inputtedText3 == "Joe Biden"){
        document.getElementById("Question3").style.color = "green";
        }
        else{
            document.getElementById("Question3").style.color = "red"; 
        }

        if(inputtedText4 == "Tinubu"){
        document.getElementById("Question4").style.color = "green";
        }
        else{
            document.getElementById("Question4").style.color = "red"; 
        }
}
