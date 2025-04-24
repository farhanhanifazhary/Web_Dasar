const secret = document.getElementById("secret");
let nama = document.getElementById("waifuName");
let background = document.getElementById("waifuBg");
const profile = document.getElementById("pfp");
const nav_logo = document.getElementById("pp");
let nav_profile = document.getElementById("ppp");

secret.onclick = function() {
    select = parseInt(prompt("Select one of my waifu do you want to see: "));
    switch(select) {
        case 1:
            profile.src = "secret/MisumiHatsune.jpg"
            nav_logo.src = "secret/MisumiHatsune.jpg"
            nama.innerText = "Misumi Hatsune"
            background.innerText = "Lead Guitarist, Vocalist, and lyrycist of Sumimi and Ave Mujica"
            nav_profile.innerText = "Misumi Hatsune"
            break;
        case 2:
            profile.src = "secret/TogawaSakiko.jpg"
            nav_logo.src = "secret/TogawaSakiko.jpg"
            nama.innerText = "Togawa Sakiko"
            background.innerText = "Producer, Keyboardist, Composer of Ave Mujica"
            nav_profile.innerText = "Togawa Sakiko"
            break;
        case 3:
            profile.src = "secret/WakabaMutsumi.jpeg"
            nav_logo.src = "secret/WakabaMutsumi.jpeg"
            nama.innerText = "Wakaba Mutsumi"
            background.innerText = "Rhythm of Ave Mujica"
            nav_profile.innerText = "Wakaba Mutsumi"
            break;
        case 4:
            profile.src = "secret/YahataUmiri.jpeg"
            nav_logo.src = "secret/YahataUmiri.jpg"
            nama.innerText = "Yahata Umiri"
            background.innerText = "Lead Guitarist, Vocalist, and lyrycist of Sumimi and Ave Mujica"
            nav_profile.innerText = "Yahata Umiri"
            break;
        default:
            alert("Ga ada ngen-")
            break;
    }
}