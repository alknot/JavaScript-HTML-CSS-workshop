const checkbox = document.getElementById("themeToggle");
const toggleIcon = document.getElementById("toggleIcon");
const imageGrid = document.getElementById("image-grid");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        document.body.setAttribute("data-theme", "dark");
        toggleIcon.innerHTML = `
            <span class="toggleText">dark mode</span>
            
            <span class="moon-icon">🌙</span>
        `;
        imageGrid.innerHTML = `
            <div class="image-item">
                <h2>Project 1</h2>
                <img src="img/1dark.svg" class="img" alt="Project 1">
                <p>Project 1</p>
            </div>
            <div class="image-item">
                <h2>Project 2</h2>
                <img src="img/2dark.svg" class="img" alt="Project 2">
                <p>Project 2</p>
            </div>
            <div class="image-item">
                <h2>Project 3</h2>
                <img src="img/3dark.svg" class="img" alt="Project 3">
                <p>Project 3</p>
            </div>
        `;
    } else {
        document.body.setAttribute("data-theme", "light");
        toggleIcon.innerHTML = `
            <span class="toggleText">light mode</span>
            <span class="sun-icon">🌞</span>
            <span class="moon-icon">🌙</span>
        `;
        imageGrid.innerHTML = `
            <div class="image-item">
                <h2>Project 1</h2>
                <img src="img/1light.svg" class="img" alt="Project 1">
                <p>Project 1</p>
            </div>
            <div class="image-item">
                <h2>Project 2</h2>
                <img src="img/2light.svg" class="img" alt="Project 2">
                <p>Project 2</p>
            </div>
            <div class="image-item">
                <h2>Project 3</h2>
                <img src="img/3light.svg" class="img" alt="Project 3">
                <p>Project 3</p>
            </div>
        `;
    }
});