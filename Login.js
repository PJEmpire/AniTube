document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Form submission को रोकने के लिए (page reload से बचने के लिए)

    // Username और Password के values प्राप्त करें
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Username और Password का मिलान करें (यहाँ आप अपनी अपनी मान्यताएँ डाल सकते हैं)
    if (username === "admin" && password === "password123") {
        // यदि login सही है, तो home.html पर redirect करें
        window.location.href = "home.html"; // सुनिश्चित करें कि home.html उसी folder में हो
    } else {
        // यदि login गलत है, तो error message दिखाएं
        document.getElementById("error-message").classList.remove("hidden");
    }
});
