document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#currentYear");
    const lastModifiedSpan = document.querySelector("#lastModified");
    
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
    });