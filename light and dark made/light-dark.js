const body = document.body;
const button = document.getElementById('themeButton');


function toggleTheme() {
    
    if (Element.className="light-mode") {
    document.getElementById("body").classList.remove("light-mode");
    document.getElementById("body").classList.add("dark-mode");
    }
    else {
    document.getElementById("body").classList.remove("dark-mode")
    document.getElementById("body").classList.add("light-mode");
    }

}