window.onload = changeText();

var roles = ['web developer', 'problem solver', 'cat mom'];
var count = 0;

function changeText() {

  setTimeout (function () {
      document.getElementById('text-change').textContent = roles[count];
      count++;
      if (count < 3) {
        changeText();
      }

      if (count === 3) {
        count = 0;
        changeText();
      }
    }, 800)
}
