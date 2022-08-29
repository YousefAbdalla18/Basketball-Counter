let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

let savedScoreHomeEl = document.getElementById("saved-score-home")
let savedScoreGuestEl = document.getElementById("saved-score-guest")

// -- home --

function homeScoreOne() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function homeScoreTwo() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function homeScoreThree() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function saveHome() {
    savedScoreHomeEl.innerText = "Saved Home Score: " + homeScore
    
}

// -- guest -- 

function guestScoreOne() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function guestScoreTwo() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function guestScoreThree() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}

function saveGuest() {
    savedScoreGuestEl.innerText = "Saved Guest Score: " + guestScore
    
}
