// Telegram Web App API ইনিশিয়ালাইজ করা
let tg = window.Telegram.WebApp;

// অ্যাপটি ওপেন হলে ফুল স্ক্রিন করার জন্য
tg.expand();

// ইউজারের ডেটা বের করে আনা
let user = tg.initDataUnsafe?.user;

// ইউজারের নাম স্ক্রিনে দেখানো
if (user) {
    document.getElementById("greeting").innerText = `Welcome, ${user.first_name}!`;
} else {
    document.getElementById("greeting").innerText = "Welcome, Guest!";
}

// বাটনে ক্লিক ইভেন্ট
document.getElementById("claim-btn").addEventListener("click", () => {
    tg.showAlert("Reward claiming system will be connected to Firebase soon!");
});