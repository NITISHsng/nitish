function displayMessage() {
    const messages = ["Have a great day!", "Stay positive!", "Keep smiling!", "You are awesome!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = randomMessage;
}
