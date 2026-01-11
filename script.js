// 1. Countdown Logic
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    // Apoorva's Birthday: January 12
    let birthday = new Date(`January 12, ${currentYear} 00:00:00`);

    // If birthday has passed this year, point to next year
    if (now > birthday) {
        birthday = new Date(`January 12, ${currentYear + 1} 00:00:00`);
    }

    const diff = birthday - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const timerDisplay = document.getElementById('countdown');
    
    if (d === 0 && h === 0 && m === 0 && s === 0) {
        timerDisplay.innerText = "🎉 HAPPY BIRTHDAY APOORVA! 🎉";
    } else {
        timerDisplay.innerText = `${d}d : ${h}h : ${m}m : ${s}s`;
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 2. Rotating Quotes
const quotes = [
    "Apoorva, you make the world a brighter place!",
    "Cheers to 21 years of being absolutely amazing.",
    "May your day be as sweet as you are!",
    "Born in 2005, a classic since day one!",
    "Keep shining and reaching for the stars, Apoorva!",
    "THANKS FOR BEING A TRUE FREIND AND NEVER CHANGE!"
];

let quoteIndex = 0;
setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    document.getElementById('quote').innerText = `"${quotes[quoteIndex]}"`;
}, 4000);

// 3. Surprise Button Event
document.getElementById('surpriseBtn').addEventListener('click', function() {
    // Start Confetti
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffb6c1', '#ffffff', '#ff9a9e']
    });

    // Play Music
    const music = document.getElementById('birthdaySong');
    music.play().catch(err => console.log("Music play blocked until user interacts."));

    // Show Secret Message and Photo
    document.getElementById('message').classList.remove('hidden');
    
    // Change Button Text
    this.innerText = "Enjoy Your Day! ❤️";
    this.style.background = "#888";
    this.disabled = true;

    // Scroll down to message automatically
    setTimeout(() => {
        document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
    }, 500);
});