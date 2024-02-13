// function isVowel(char) {
//     const vowels = ["a", "e", "i", "o", "u"]

//     return vowels.includes(char);
// }

// function checkVowels() {
//     let text = document.getElementById("inputText").value;

//     let vowelCount = 0;
//     text = text.toLowerCase;

//     for (let i = 0; i < text.length; i++) {
//         const char = text.charAt(i);

//         if (isVowel(char)) {
//             vowelCount++
//         }
//     }

//     const result = document.getElementById("result");
//     result.textContent = "Total Vowels " + vowelCount;
// }



const textInput = document.getElementById("inputText");
const result = document.getElementById("result");

function isVowel(text) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

function checkVowels () {
    const text = textInput.value;
    const vowelCount = isVowel(text);
    result.innerHTML = `Number of vowels: ${vowelCount}`;
    reset();
};


function reset() {
    // textInput.value = ""
   
}
