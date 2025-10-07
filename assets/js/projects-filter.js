document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // remove active class button 
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // active class button
            button.classList.add("active");
    
            const category = button.getAttribute("data-category");
            
            // show/hide projects
            projectItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category").includes(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});