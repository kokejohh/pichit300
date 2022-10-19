//login logout button
let isusername = sessionStorage.getItem("username");
let isdisplayname_th = sessionStorage.getItem("displayname_th");
let login = document.querySelector("#login");
let logout = document.querySelector("#logout");
let create = document.querySelector("#create");

if (isusername) {
    login.classList.add("hidden");
    logout.classList.remove("hidden");
    logout.innerHTML = isdisplayname_th;
    logout.addEventListener("click", function () {
        sessionStorage.removeItem("username");
    })
} else {
    create.classList.add("hidden");
    logout.classList.add("hidden");
}

//navbar hover and select
let nav = document.querySelector("#nav");
let a = nav.children;

if (page == "index") {
    a[0].classList.add("font-bold");
} else if (page == "task") {
    a[1].classList.add("font-bold");
} else if (page == "rank") {
    a[2].classList.add("font-bold");
}

//menu
let btn_menu = document.querySelector("#btn_menu");
let menu = document.querySelector("#menu");

btn_menu.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});