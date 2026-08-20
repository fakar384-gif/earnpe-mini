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

// বাটনে ক্লিক ইভেন্ট (বিজ্ঞাপন + রিওয়ার্ড)
document.getElementById("claim-btn").addEventListener("click", () => {
    
    // ১. ইউজারের সামনে আপনার অ্যাড লিংকটি ওপেন হবে
    window.open("https://omg10.com/4/11586990", "_blank");
    
    // ২. বিজ্ঞাপন ওপেন হওয়ার পর ইউজারকে মেসেজ দেখাবে
    tg.showAlert("বিজ্ঞাপনটি সম্পূর্ণ দেখার পর আপনার পয়েন্ট ব্যালান্সে যুক্ত হবে! (Firebase connecting...)");
    
});
