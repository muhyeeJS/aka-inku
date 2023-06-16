const loader = document.getElementById("loader");
const main = document.getElementById("main");
const home = document.getElementById("home");
const learn = document.getElementById("learn");
const play = document.getElementById("play");
const theme = document.getElementById("theme");
const themeValue = document.querySelector("html[data-theme]");
const currentTheme = localStorage.getItem("currentTheme");
const instagram = document.getElementById("instagram");
const discord = document.getElementById("discord");
const creditLink1 = document.getElementById("credit-link-1");
const creditLink2 = document.getElementById("credit-link-2");

document.addEventListener("readystatechange", function(event) {
    if (event.target.readyState === "interactive") {
        main.style.visibility = "hidden";
        main.style.pointerEvents = "none";
    } else if (event.target.readyState === "complete") {
        setTimeout(() => {        
            main.classList.add("main-fade-in")
            main.style.visibility = "visible";
            loader.classList.add("loader-fade-out")
            setTimeout(() => {
                main.removeAttribute("style");
                loader.remove();
            }, 500);
        }, 500)
        console.log("aiFlag{0mG_yOu_jUs7_f0UnD_4_fL4G_dc3545}")
    }
    setTheme();
})

home.addEventListener("click", function() {
    window.open("/index.html", "_self");
})
learn.addEventListener("click", function() {
    window.open("/learn.html", "_self");
})
play.addEventListener("click", function() {
    window.open("/play.html", "_self");
})
function setTheme() {
    if (currentTheme === "dark") {
        themeValue.setAttribute("data-theme", "dark");
    } else if (currentTheme === "light") {
        themeValue.setAttribute("data-theme", "light");
    }
}
theme.addEventListener("click", function() {
    const currentTheme = localStorage.getItem("currentTheme");
    if(currentTheme === "dark") {
        themeValue.setAttribute("data-theme", "light");
        localStorage.setItem("currentTheme", "light");
    } else if (currentTheme === "light") {
        themeValue.setAttribute("data-theme", "dark");
        localStorage.setItem("currentTheme", "dark");
    }
})
instagram.addEventListener("click", function() {
    window.open("https://instagram.com/muhyeeJS", "_blank");
})
discord.addEventListener("click", function() {
    const discordToolTip = document.querySelector("div[data-tooltip]");
    const discordId = "muhyeeJS#0001";
    navigator.clipboard.writeText(discordId);
    discordToolTip.setAttribute("data-tooltip", "Copied: muhyeeJS#0001");
})
creditLink1.addEventListener("click", function() {
    window.open("https://github.com/nihongodera/kanjivganimate", "_blank");
})
creditLink2.addEventListener("click", function() {
    window.open("https://github.com/KanjiVG/kanjivg", "_blank");
})