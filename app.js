let homeCount = 0;
let guestCount = 0;
let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score")

function plusOneHome(){
    homeCount += 1;
    homeEl.textContent = homeCount;
}

function plusTwoHome(){
    homeCount += 2;
    homeEl.textContent = homeCount;
}

function plusThreeHome(){
    homeCount += 3;
    homeEl.textContent = homeCount;
}

function plusOneGuest(){
    guestCount += 1;
    guestEl.textContent = guestCount;
}

function plusTwoGuest(){
    guestCount += 2;
    guestEl.textContent = guestCount;
}

function plusThreeGuest(){
    guestCount += 3;
    guestEl.textContent = guestCount;
}