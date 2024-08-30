var isOpen = false

function onButtonClickSideBar() {
    if (isOpen == true){
        document.getElementsByClassName("side-bar")[0].style.width = "0";
        isOpen = false
    } else {
        document.getElementsByClassName("side-bar")[0].style.width = "225px";
        isOpen = true
    }
}