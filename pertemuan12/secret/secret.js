const secret = document.getElementById("secret");
let nama = document.getElementById("waifuName");
let background = document.getElementById("waifuBg");
const profile = document.getElementById("pfp");
const nav_logo = document.getElementById("pp");
let nav_profile = document.getElementById("ppp");

secret.onclick = function() {
    alert("Wow! I didn't expect you will found this secret");
    agreement = prompt("Let's proceed with the agreement? Do you want to know what am I hiding?");

    if(agreement == "yes") {
        alert("I am hiding a secret message");
        waifu = prompt("Guess! How many waifus do I have?");

        if(waifu == 30) {
            alert("You are correct! I have 30 waifus");
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
                    background.innerText = "Rhythm Guitar of Ave Mujica"
                    nav_profile.innerText = "Wakaba Mutsumi"
                    break;
                case 4:
                    profile.src = "secret/YahataUmiri.jpeg"
                    nav_logo.src = "secret/YahataUmiri.jpeg"
                    nama.innerText = "Yahata Umiri"
                    background.innerText = "Bassist of Ave Mujica and ex 30s band"
                    nav_profile.innerText = "Yahata Umiri"
                    break;
                default:
                    alert("Ga ada ngen-")
                    break;
            }
        }else if(waifu < 30){
            alert("It's too less");
        }else {
            alert("More of them are karbit")
        }
    }
    // Create a new script element
    const jsSrc = document.createElement('script');
    jsSrc.src = "secret2.js"; // Ensure this path is correct
    jsSrc.id = "newScript"; // Set a new ID for the new script

    // Log the script source being loaded
    console.log("Loading script:", jsSrc.src);

    // Remove the old script if it exists
    const oldJs = document.getElementById('oldScript');
    if (oldJs) {
        console.log("Removing old script:", oldJs.src);
        oldJs.parentNode.removeChild(oldJs);
    }

    // Append the new script to the body
    document.body.appendChild(jsSrc);
}

