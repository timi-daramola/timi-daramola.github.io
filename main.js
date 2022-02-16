let toggleNav = false;

let sidebarNav = function () {
    let togglebar = document.querySelector(".toggle-nav");
    let navBar = document.querySelector(".side-bar");
    let togglebarUl = document.querySelector(".side-bar ul");
    let togglebarLinks = document.querySelectorAll(".side-bar a");
    if (toggleNav === false) {
        togglebarUl.style.visibility = "visible";
        togglebarUl.style.transition = "10s ease-in-out";
        navBar.style.width = "120px";


        toggleNav = true;
    }else {
        navBar.style.width = "0px";
        togglebarUl.style.transition = "1s ease-in-out";
        togglebarUl.style.visibility = "hidden";

        toggleNav = false;
    }
}


let scrollDown = function () {
    let scroll = document.querySelector('.arrow-down');
    let bottomSecetion = document.getElementById('about-me');

    if (scrollDown) {
        bottomSecetion.style.transition = ".8 ease-in-out";
    }
}
