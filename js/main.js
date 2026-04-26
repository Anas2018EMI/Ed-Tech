let navbar = document.getElementById("m-navbar");

navbar.style.display = "none";

function show() {
    let navbar = document.getElementById("m-navbar");
    if (navbar.style.display === "none") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
}