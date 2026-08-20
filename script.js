// ফায়ারবেস ইমপোর্ট করা (CDN লিংক দিয়ে)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// আপনার ফায়ারবেস কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyBFUJHY7zE5UBXiojLKgaOQsZcka0nrJs8",
  authDomain: "earnpe-mini-app.firebaseapp.com",
  projectId: "earnpe-mini-app",
  storageBucket: "earnpe-mini-app.firebasestorage.app",
  messagingSenderId: "369275274661",
  appId: "1:369275274661:web:bc9d1de235ac228cb3144c"
};

// ফায়ারবেস চালু করা
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// টেলিগ্রাম API চালু করা
let tg = window.Telegram.WebApp;
tg.expand();

// ইউজারের তথ্য নেওয়া
let user = tg.initDataUnsafe?.user;
let userId = user ? user.id.toString() : "guest_123";
let userName = user ? user.first_name : "Guest";

document.getElementById("greeting").innerText = `Welcome, ${userName}!`;

// ফায়ারবেস থেকে ইউজারের ডেটা আনা
const userRef = doc(db, "users", userId);

async function loadData() {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
        // আগে থেকে অ্যাকাউন্ট থাকলে ব্যালান্স দেখাবে
        document.getElementById("balance").innerText = docSnap.data().points;
    } else {
        // নতুন ইউজার হলে ডেটাবেসে অ্যাকাউন্ট তৈরি হবে (ব্যালান্স 0)
        await setDoc(userRef, {
            name: userName,
            points: 0
        });
        document.getElementById("balance").innerText = 0;
    }
}
loadData();

// Claim বাটনে ক্লিক করলে অ্যাড দেখা এবং পয়েন্ট যোগ করা
document.getElementById("claim-btn").addEventListener("click", async () => {
    
    // ১. আপনার ডিরেক্ট অ্যাড লিংক ওপেন হবে
    window.open("https://omg10.com/4/11586990", "_blank");
    
    // ২. ফায়ারবেসে পয়েন্ট যোগ হবে (যেমন: প্রতি ক্লিকে ১০ পয়েন্ট)
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
        let currentPoints = docSnap.data().points;
        let newPoints = currentPoints + 10; // এখানে 10 এর বদলে যত খুশি পয়েন্ট দিতে পারেন
        
        await updateDoc(userRef, {
            points: newPoints
        });
        
        // Claim বাটনে ক্লিক করলে পয়েন্ট যোগ করা এবং অ্যাড দেখানো
document.getElementById("claim-btn").addEventListener("click", async () => {
    
    // ১. আগে ফায়ারবেসে পয়েন্ট যোগ হবে
    try {
        const docSnap = await getDoc(userRef);
        let currentPoints = 0;
        
        if (docSnap.exists()) {
            currentPoints = docSnap.data().points;
        }
        
        let newPoints = currentPoints + 10;
        
        // ফায়ারবেস ডেটাবেসে আপডেট
        await setDoc(userRef, {
            name: userName,
            points: newPoints
        }, { merge: true });
        
        // স্ক্রিনে নতুন ব্যালান্স দেখানো
        document.getElementById("balance").innerText = newPoints;
        
    } catch (error) {
        console.log("Firebase error:", error);
    }

    // ২. পয়েন্ট যোগ করার সাথে সাথেই অ্যাড ওপেন হবে
    window.open("https://omg10.com/4/11586990", "_blank");
})
  ;
