
function showLogin() {
    document.getElementById("main-login").style.visibility="visible";
    document.getElementById("main-login").style.marginLeft="37%";
    document.getElementById("main-login").style.transition="1s";
    document.getElementById("main-register").style.visibility="hidden";
    document.getElementById("main-register").style.marginLeft="100%";
    document.getElementById("main-register").style.transition="1s";
}

function showRegister() {
    document.getElementById("main-register").style.visibility="visible";
    document.getElementById("main-register").style.marginLeft="37%";
    document.getElementById("main-register").style.transition="1s";
    document.getElementById("main-login").style.visibility="hidden";
    document.getElementById("main-login").style.marginLeft="100%";
    document.getElementById("main-login").style.transition="1s"

}
