var hoverButton = document.getElementsByClassName("button-box")[0];
var showOnHover = document.getElementsByClassName("show-on-hover")[0];

hoverButton.addEventListener("mouseenter", function()
{
    showOnHover.style.opacity = "1.0";
    showOnHover.classList.add("fadeInSlow");
    showOnHover.classList.remove("fadeOutSlow");
});

hoverButton.addEventListener("mouseleave", function()
{
    showOnHover.style.opacity = "0.0";
    showOnHover.classList.add("fadeOutSlow");
    showOnHover.classList.remove("fadeInSlow");
});
