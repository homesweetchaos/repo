const zeroPad = (num, places) => String(num).padStart(places, '0');
let index = 1;
let postNum = zeroPad(index, 4);
function loadDoc() {
    const myPost = new XMLHttpRequest();
    myPost.onload = function() {
        document.getElementsByClass("blogPost").innerHTML = this.responseText;
    }
    myPost.open("GET", "posts/" + postNum + ".txt");
    myPost.send();
    index++;
    console.log(postNum);
}


//script for navigation sidebar - open and close
function w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('myOverlay').style.display = 'block';
}
function w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('myOverlay').style.display = 'none';
}
//navigation sidebar accordian function
function myAccFunc(accordianId) {
    var x = document.getElementById(accordianId);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += "  activeColor"
        console.log(x.previousElementSibling.className);
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace("activeColor");
        console.log(x.previousElementSibling.className);
    }
}



