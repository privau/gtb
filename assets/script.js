// Regex Search
$(document).ready(function () {
      var wordsArray = arrayData;
     
      $("[name='username']").keyup(function () {
        var words = $(this).val().replace(/_/g, '.');
        
          console.log("Solving for:",words);
          try {
            var searchWord = words.toLowerCase()

            var reg = new RegExp(searchWord);
            $("#result").html('');
            for (var j = 0; j < wordsArray.length; j++) {
              var value = wordsArray[j];
              var eachWord = value.toLowerCase()

              if (reg.test(eachWord)) {

                var i;
                if (searchWord.length != eachWord.length)
                  continue;
                for (i = 0; i < searchWord.length; i++) {
                  if (searchWord[i] == '.')
                    continue;
                  if (searchWord[i] != eachWord[i])
                    break;

                }
                if (i == searchWord.length)
                  $("#result").append(value + '<br>');
              }
            }
          }
          catch (e) {
            // regular expression error
          }
        
      });
    });  

// Usage Modal
  var usageModal = document.getElementById("usage-modal");
  var usageBtn = document.getElementById("usage-btn");
  var usageCloseBtn = document.getElementById("usage-modal-close");

  usageBtn.addEventListener("click", function() {
    usageModal.style.display = "block";
    aboutModal.style.display = "none";
  });
  usageCloseBtn.addEventListener("click", function() {
    usageModal.style.display = "none";
  });

// About Modal
  var aboutModal = document.getElementById("about-modal");
  var aboutBtn = document.getElementById("about-btn");
  var aboutCloseBtn = document.getElementById("about-modal-close");

  aboutBtn.addEventListener("click", function() {
    aboutModal.style.display = "block";
    usageModal.style.display = "none";
  });
  aboutCloseBtn.addEventListener("click", function() {
    aboutModal.style.display = "none";
  });


// Character Count
var count = document.getElementById("count")
var input = document.getElementById("input")

input.addEventListener("input", function(e){
  count.innerHTML = e.target.value.length;
})
