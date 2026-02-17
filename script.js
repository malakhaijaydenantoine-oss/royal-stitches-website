// Scroll to products
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Contact to Order button
function contactOrder(plushieName) {
    const messageField = document.getElementById("message");
    messageField.value = `Hi! I’m interested in ordering: ${plushieName}`;
    window.location.href = "#contact";
}

// Optional: handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thanks! Your message has been sent. We will contact you soon.");
    this.reset();
});
