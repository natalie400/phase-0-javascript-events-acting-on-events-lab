// Your code here

const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftPosition = dodger.style.left;
    const left = parseInt(leftPosition, 10);
  
    // Calculate the new position by moving 1 pixel to the right
    const newPosition = left + 1;

      // Update the style.left property to move the dodger to the right
      dodger.style.left = `${newPosition}px`;
    }

  
  // Add an event listener to call moveDodgerRight when the right arrow key is pressed
  document.addEventListener("keydown", function (e) {
    
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }) 
  
  
  
  
  