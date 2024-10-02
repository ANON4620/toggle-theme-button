"use strict";

function switchTheme() {
    let newState;
    if (curState === "light") {
        newState = "dark";
    }
    else {
        newState = "light";
    }

    const container = document.getElementById("container");
    container.className = container.className.replace(curState, newState);

    const switchBg = document.getElementById("switch-bg");
    switchBg.className = switchBg.className.replace(curState, newState);

    switchSlider.className = switchSlider.className.replace(curState, newState);

    curState = newState;
}

let curState = "light";
const switchSlider = document.getElementById("switch-slider");
switchSlider.addEventListener("click", switchTheme);
