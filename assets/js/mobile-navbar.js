const isBigScreen = function () {
    return window.screen.width >= 992;
};

const manageNav = function () {
    if (isBigScreen()) {
        document.getElementsByClassName("page-content")[0].removeAttribute("style");
        document.getElementsByClassName("page-sidebar")[0].removeAttribute("style");
        return;
    }
    if (document.URL.endsWith("#sidebar")) {
        document.getElementsByClassName("page-content")[0].setAttribute("style", "display: none;");
        document.getElementsByClassName("page-sidebar")[0].removeAttribute("style");
        // document.getElementsByClassName("sidebar-icon")[0].setAttribute("style", "display: none;");
    } else {
        document.getElementsByClassName("page-content")[0].removeAttribute("style");
        document.getElementsByClassName("page-sidebar")[0].setAttribute("style", "display: none;");
        // document.getElementsByClassName("sidebar-icon")[0].removeAttribute("style");
    }
};

document.getElementsByClassName("sidebar-icon")[0].addEventListener("click", function () {
    if (document.URL.endsWith("#sidebar")) {
        window.location.replace(document.URL.replace("#sidebar", ""));
        document.getElementsByClassName("sidebar-icon")[0].removeAttribute("style");
    } else {
        window.location.replace(document.URL + "#sidebar");
        document.getElementsByClassName("sidebar-icon")[0].setAttribute("style", "transform: rotate(90deg);");
    }
});

window.onresize = function () {
    manageNav();
};

window.onload = function () {
    manageNav();
};

window.onhashchange = function () {
    manageNav();
};