var navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function (item) {
    relativeUrl = window.location.pathname.split("/").at(-1);
    item.addEventListener("click", function () {
        navItems.forEach(function (nav) {
            nav.classList.remove("selected");
        });
        item.classList.add("selected");
    });
});
