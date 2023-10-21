const loader_styles = window.getComputedStyle(loader);
let loader_width = loader_styles.width;
const loader_width_display = document.querySelector(".display-loader-width");
loader_width_display.innerHTML = "Loader width: " + loader_width;

const rotationDirection = document.querySelector(".rotation-direction");
rotationDirection.innerHTML = "Rotation direction: Clockwise";

console.log(loader_width);

function set_size(width_param) {
    const loader = document.getElementById("loader");
    const loader_background = document.getElementById("loader-background");
    const loader_width_display = document.querySelector(".display-loader-width");
    if (width_param === 50) {
        loader.style.width = 50 + "px";
        loader.style.height = 50 + "px";
        loader.style.borderWidth = "2px";
        loader_background.style.width = 050 + "px";
        loader_background.style.height = 050 + "px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
        console.log(loader.style.width);
    }
    else if (width_param === 150) {
        loader.style.width = 150 + "px";
        loader.style.height = 150 + "px";
        loader.style.borderWidth = "4px";
        loader_background.style.width = 150 + "px";
        loader_background.style.height = 150 + "px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
        console.log(loader.style.width);
    }
    else if (width_param === 250) {
        loader.style.width = 250 + "px";
        loader.style.height = 250 + "px";
        loader.style.borderWidth = "6px";
        loader_background.style.width = 250 + "px";
        loader_background.style.height = 250 + "px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
        console.log(loader.style.width);
    }
    else if (width_param === 350) {
        loader.style.width = 350 + "px";
        loader.style.height = 350 + "px";
        loader.style.borderWidth = "8px";
        loader_background.style.width = 350 + "px";
        loader_background.style.height = 350 + "px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
        console.log(loader.style.width);
    }
    else if (width_param === 450) {
        loader.style.width = 450 + "px";
        loader.style.height = 450 + "px";
        loader.style.borderWidth = "10px";
        loader_background.style.width = 450 + "px";
        loader_background.style.height = 450 + "px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
        console.log(loader.style.width);
    }
    else if (width_param === 550) {
        loader.style.width = 550 + "px";
        loader.style.height = 550 + "px";
        loader.style.borderWidth = "12px";
        loader_background.style.width = 550 + "px";
        loader_background.style.height = 550 + "px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
        console.log(loader.style.width);
    }
}

function increase_size() {
    const loader = document.getElementById("loader");
    const loader_background = document.getElementById("loader-background");
    const loader_width_display = document.querySelector(".display-loader-width");

    let loader_style = window.getComputedStyle(loader);
    let loader_background_style = window.getComputedStyle(loader);

    let loader_width = Number(loader_style.width.substring(0, 2)) >= 50 ? Number(loader_style.width.substring(0, 2)) : Number(loader_style.width.substring(0, 3));
    let loader_height = Number(loader_style.height.substring(0, 2)) >= 50 ? Number(loader_style.height.substring(0, 2)) : Number(loader_style.height.substring(0, 3));
    let loader_background_width = Number(loader_background_style.width.substring(0, 2)) >= 50 ? Number(loader_background_style.width.substring(0, 2)) : Number(loader_background_style.width.substring(0, 3));
    let loader_background_height = Number(loader_background_style.height.substring(0, 2)) >= 50 ? Number(loader_background_style.height.substring(0, 2)) : Number(loader_background_style.height.substring(0, 3));

    loader.style.width = loader_width + 5 + "px";
    loader.style.height = loader_height + 5 + "px";
    loader_background.style.width = loader_background_width + 5 + "px";
    loader_background.style.height = loader_background_height + 5 + "px";

    if (loader_width < 150) {
        loader.style.borderWidth = "2px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width < 250) {
        loader.style.borderWidth = "4px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width < 350) {
        loader.style.borderWidth = "6px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width < 450) {
        loader.style.borderWidth = "8px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width < 550) {
        loader.style.borderWidth = "10px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width >= 550) {
        loader.style.borderWidth = "12px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    }
}

function decrease_size() {
    const loader = document.getElementById("loader");
    const loader_background = document.getElementById("loader-background");
    const loader_width_display = document.querySelector(".display-loader-width");

    let loader_style = window.getComputedStyle(loader);
    let loader_background_style = window.getComputedStyle(loader);

    let loader_width = Number(loader_style.width.substring(0, 2)) >= 50 ? Number(loader_style.width.substring(0, 2)) : Number(loader_style.width.substring(0, 3));
    let loader_height = Number(loader_style.height.substring(0, 2)) >= 50 ? Number(loader_style.height.substring(0, 2)) : Number(loader_style.height.substring(0, 3));
    let loader_background_width = Number(loader_background_style.width.substring(0, 2)) >= 50 ? Number(loader_background_style.width.substring(0, 2)) : Number(loader_background_style.width.substring(0, 3));
    let loader_background_height = Number(loader_background_style.height.substring(0, 2)) >= 50 ? Number(loader_background_style.height.substring(0, 2)) : Number(loader_background_style.height.substring(0, 3));

    loader.style.width = loader_width - 5 + "px";
    loader.style.height = loader_height - 5 + "px";
    loader_background.style.width = loader_background_width - 5 + "px";
    loader_background.style.height = loader_background_height - 5 + "px";

    if (loader_width < 150) {
        loader.style.borderWidth = "2px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width < 250) {
        loader.style.borderWidth = "4px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width < 350) {
        loader.style.borderWidth = "6px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width < 450) {
        loader.style.borderWidth = "8px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width < 550) {
        loader.style.borderWidth = "10px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    } else if (loader_width >= 550) {
        loader.style.borderWidth = "12px";
        loader_width_display.innerHTML = "Loader width: " + loader.style.width;
    }
}

function clockwise() {
    const clockwise_rotation = "loader 3s linear infinite";
    const loader = document.getElementById("loader");
    loader.style.animation = clockwise_rotation;
    const rotationDirection = document.querySelector(".rotation-direction");
    rotationDirection.innerHTML = "Rotation direction: Clockwise";
}

function anti_clockwise() {
    const anti_clockwise_rotation = "loader 3s linear infinite reverse";
    const loader = document.getElementById("loader");
    loader.style.animation = anti_clockwise_rotation;
    const rotationDirection = document.querySelector(".rotation-direction");
    rotationDirection.innerHTML = "Rotation direction: Anti-clockwise";
}