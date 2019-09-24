var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (this.prevScrollPos > currentScrollPos) {
        this.document.getElementById("main-header").style.top = "0";

    } else
        this.document.getElementById("main-header").style.top= "-100px";

    this.prevScrollPos = currentScrollPos;
}