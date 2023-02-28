const wordsArray = arrayData;
const result = document.querySelector("#result");

function handleKeyUp(event, username) {
  const words = event.target.value.replace(/_/g, '.').toLowerCase();
  try {
    const reg = new RegExp(words.replace(/_./g, '[^.\s]'));
    result.innerHTML = '';
    for (j = 0; j < wordsArray.length; j++) {
      const value = wordsArray[j].toLowerCase();
      if (reg.test(value) && words.length === value.length) {
        let isMatch = true;
        for (i = 0; i < words.length; i++) {
          if (words[i] == '.') continue;
          if (words[i] != value[i]) {
            isMatch = false;
            break;
          }
        }
        if (isMatch) {
          result.innerHTML += wordsArray[j] + '<br><br>';
        }
      }
    }
  } catch (e) {
    console.error(e); // Log any regular expression errors
  }
}

document.querySelector("[name='username']").addEventListener("keyup", function (event) {
  handleKeyUp(event, this);
});

// Usage Modal
const usageModal = document.getElementById("usage-modal");
const usageBtn = document.getElementById("usage-btn");
const usageCloseBtn = document.getElementById("usage-modal-close");

usageBtn.addEventListener("click", function () {
  usageModal.style.display = "block";
  aboutModal.style.display = "none";
});

usageCloseBtn.addEventListener("click", function () {
  usageModal.style.display = "none";
});

// About Modal
const aboutModal = document.getElementById("about-modal");
const aboutBtn = document.getElementById("about-btn");
const aboutCloseBtn = document.getElementById("about-modal-close");

aboutBtn.addEventListener("click", function () {
  aboutModal.style.display = "block";
  usageModal.style.display = "none";
});

aboutCloseBtn.addEventListener("click", function () {
  aboutModal.style.display = "none";
});

// Character Count
const count = document.getElementById("count");
const input = document.getElementById("input");

input.addEventListener("input", function (event) {
  count.innerHTML = event.target.value.length;
});
