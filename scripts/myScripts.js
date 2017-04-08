//Marquee news scroll script
$("document").ready(function(){
    marqueeInit({
        uniqueid: 'mycrawler',
        style: {
            'padding': '15px',
            'width': '100%',
            'background': '#B2FFD6',
            'color':  '#0D1B1E'

        },
        inc: 5, //speed - pixel increment for each iteration of this marquee's movement
        mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
        moveatleast: 2,
        neutral: 150,
        persist: true,
        savedirection: true
    });
});



/******* Cookies ******/

//Set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Get Cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Check cookie
function checkCookie() {
    var user=getCookie("username");

    if (user != "") {
        $("#displayCookie").append("Welcome back " + user + "!");
    } else {
       user = prompt("Enter your name:");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

//Toggle menu bar
$("#hamburger").click(function(){
  $(".nav-bar").slideToggle("slow", function(){});
});
