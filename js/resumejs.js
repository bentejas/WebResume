/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgerMenu() {
    var x = document.getElementById("topnav");
    var hasOpened = 0;
    if (x.className === "topnav") {
        x.className += " responsive";
        hasOpened = 1;
    } else {
        x.className = "topnav";
        hasOpened = 0;
    }
    
    if(hasOpened === 1){
        document.getElementById("bars").style.display = "none";
        document.getElementById("cross").style.display = "block";
    }else{
        document.getElementById("cross").style.display = "none";
        document.getElementById("bars").style.display = "block";
    }
}