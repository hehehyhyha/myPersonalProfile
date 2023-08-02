function changeColor() { 
    var inputtedText = document.getElementById("myText").value
        //alert(inputtedText);
    if(inputtedText == "Washington"){
    document.getElementById("Question1").style.color = "green";
    }
    else{
        document.getElementById("Question1").style.color = "red"; 
    }

     if(inputtedText == "Whale"){
        document.getElementById("Question2").style.color = "green";
        }
        else{
            document.getElementById("Question2").style.color = "red"; 
        }

  
        if(inputtedText == "Joe Biden"){
        document.getElementById("Question3").style.color = "green";
        }
        else{
            document.getElementById("Question3").style.color = "red"; 
        }

    if(inputtedText == "Tinubu"){
        document.getElementById("Question4").style.color = "green";
        }
        else{
            document.getElementById("Question4").style.color = "red"; 
        }
}
