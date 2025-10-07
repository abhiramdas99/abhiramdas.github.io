
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader-overlay");
    const content = document.getElementById("content");
    
    setTimeout(() => {
      loader.style.display = "none"; 
      content.style.display = "block"; // Show Content
    }, 1500); // 2000 ms = 2 seconds
  });