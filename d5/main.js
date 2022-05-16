const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
    const word = document.querySelector(".input-text").value.replace(/\s/g, "");
    let len = word.length;
   
    let start = word.substring(0, Math.floor(len/2)).toLowerCase();

    let end = word.substring(len - Math.floor(len/2)).toLowerCase();

    // let flip = end.split("").reverse().join("");
    let flip = [...end].reverse().join("").trim();
    // console.log(start);
    // console.log(end);
    // console.log(flip);
    
    if (start == flip) {
        result.innerText = "This word is a palindrome";
    } else {
        result.innerText = "This word is NOT a palindrome";
    }
}