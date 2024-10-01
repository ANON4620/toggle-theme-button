let state = "light";
const container = document.getElementById("container");
const switchBg = document.getElementById("switch-bg");
const switchSlider = document.getElementById("switch-slider");
const icon = document.getElementById("icon");

function switchThemeMode() {
    const containerClasses = container.className.split(" ");
    const switchBgClasses = switchBg.className.split(" ");
    const switchSliderClasses = switchSlider.className.split(" ");
    if (state === "light") {
        const newState = "dark";
        containerClasses[1] = newState;
        switchBgClasses[1] = newState;
        switchSliderClasses[1] = newState;
        icon.src = "assets/dark-mode.png";
        state = newState;
    }
    else {
        const newState = "light";
        containerClasses[1] = newState;
        switchBgClasses[1] = newState;
        switchSliderClasses[1] = newState;
        icon.src = "assets/light-mode.png";
        state = newState;
    }
    container.className = containerClasses.join(" ");
    switchBg.className = switchBgClasses.join(" ");
    switchSlider.className = switchSliderClasses.join(" ");
}

switchSlider.addEventListener("click", switchThemeMode);