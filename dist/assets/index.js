function openMenu() {
    document.getElementById("menu").className = ""
}

function closeMenu() {
    document.getElementById("menu").className = "hidden"
}

window.onscroll = () => {
    var header = document.getElementsByTagName("header")[0];
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add('shadow-md');
        header.classList.add('bg-white');
    } else {
        header.classList.remove("shadow-md");
        header.classList.remove("bg-white");
    }
}