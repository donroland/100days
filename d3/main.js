const button = document.querySelector(".button");
const hex = document.querySelector(".hex");

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2,8);
    const hexColor = `#${randomColor}`;
    document.body.style.backgroundColor = hexColor;
    hex.innerText = hexColor;
}

button.addEventListener("click", generateColor);
generateColor();

// let color = Math.random();

// color = Math.random().toString(16).substring(2,8);
// console.log(color);
