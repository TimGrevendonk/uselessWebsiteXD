console.log('[debug]', " JS connected");


// Bottlecounter.
let bottlesCollected = 0;

// Elements in screen.
const movingElement = document.getElementById("movingElement");
const targetElement = document.getElementById("targetElement");
const endScreen = document.getElementById("endMessage");
const bottlecounter = document.getElementById("bottlecounter");

// Static element sizes.
const targetElementWidth = targetElement.offsetWidth;
const targetElementHeight = targetElement.offsetHeight;

// Event isteners.
document.addEventListener("click", positionClicked);
movingElement.addEventListener("animationend", function() {
    // Clear elements en show dead screen.
    movingElement.remove();
    targetElement.remove();
    endScreen.style.display = "block";
});

// Trigger from eventlistener.
function positionClicked(event) {
    let clickCoördinates = getClickedPosition(event);
    movePlayerElement(clickCoördinates);
}

// Calculate the position of the cursor where clicked.
function getClickedPosition(event) {
    let clickPositionX = event.clientX;  
    let clickPositionY = event.clientY;

    return [clickPositionX, clickPositionY];
}

function movePlayerElement(coördinates) {
    movingElement.style.left = ((coördinates[0] - (movingElement.offsetWidth / 2)) + "px")
    movingElement.style.top = ((coördinates[1] - (movingElement.offsetHeight / 2)) + "px")
}

// Fire logic for the target element.
function targetElementClicked() {
    // Increase counter.
    bottlesCollected += 1;
    bottlecounter.innerHTML = bottlesCollected;
    setTimeout(() => {
        // Calculate current viewport.
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        // Calculate random spot within viewport.
        const randomX = Math.floor(Math.random() * (viewportWidth - targetElementWidth));
        const randomY = Math.floor(Math.random() * (viewportHeight - targetElementHeight));
        // Place element in viewport.
        targetElement.style.left = randomX + 'px';
        targetElement.style.top = randomY + 'px';

        resetinflation()
    }, 900);
    
}

function resetinflation() {
    movingElement.classList.remove("deflate");
    movingElement.offsetHeight;
    movingElement.classList.add("deflate");
}

// Trigger deflation after first second.
setTimeout(() => {
    movingElement.classList.add("deflate");
}, 1500);



