let capsLockEnabled = false; //keybored starts with lower case
let lastKnownCapsLockState = false; // store the last known Caps Lock state

function toggleKeyboard() {  //create keybored
  var textInput = document.getElementById('textInput');
  var keyboard = document.getElementById('virtualKeyboard');

  // Retrieve the Caps Lock state from the text input's dataset
  capsLockEnabled = textInput.dataset.capsLock === 'true';

  // Clear the keyboard and rebuild it
  keyboard.innerHTML = "";
  var keysLayout = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['capslock',' ', 'backspace']
   ];

//create keybored layout
keysLayout.forEach(row => {        
  row.forEach(key => {
    var button = document.createElement('button');
    button.textContent = key;
    button.className = 'keyboard-button'; 
    button.onclick = function() {
      onKeyPress(key);
    };

    // Apply specific class for special keys
    if (key === ' ' || key === 'backspace' || key === 'capslock') {
      button.className += ' special-key';
    }

    // Set the data-key attribute for all buttons
    button.setAttribute('data-key', key.toLowerCase());

    keyboard.appendChild(button);
  });

  keyboard.appendChild(document.createElement('br'));
});

  // Update the Caps Lock state in the text box's dataset
  textInput.dataset.capsLock = capsLockEnabled;

  // Position the keyboard just below the text box
  var rect = textInput.getBoundingClientRect();
  keyboard.style.left = rect.left + 'px';
  keyboard.style.top = rect.bottom + 10 + 'px';

  keyboard.style.display = 'block';



}

//added pressed keys to the text box
function onKeyPress(key) {
  var textInput = document.getElementById('textInput'); 

  if (key === 'backspace') {  //what to do if backspace hit
    textInput.value = textInput.value.slice(0, -1);
  } else if (key === 'capslock') { //what to do if capslock hit
    capsLockEnabled = !capsLockEnabled;
    updateKeyboardLabels();
  } else {
    var charToAppend = capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
    textInput.value += charToAppend;
  }
}

//update keybored buttons if capslock pressed
function updateKeyboardLabels() {  
  var buttons = document.querySelectorAll('#virtualKeyboard button');
  buttons.forEach(button => {
    var key = button.textContent.toLowerCase();
    if (key !== 'backspace' && key !== 'capslock') {
      button.textContent = capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
    }
  });
}

//if capslock has been pressed, type capital letters
function applyCapsLockStyle() {
  var capsLockButton = document.querySelector('button:contains("capslock")');
  if (capsLockEnabled) {
    capsLockButton.classList.add('capsLockEnabled');
  } else {
    capsLockButton.classList.remove('capsLockEnabled');
  }
}


//check if users typed in their keybored so the vertial one can be lit up
document.addEventListener('click', function(event) {
  var textInput = document.getElementById('textInput');
  var keyboard = document.getElementById('virtualKeyboard');

  // Check if the click target is not the text box or any descendant of the virtual keyboard
  if (event.target !== textInput && !keyboard.contains(event.target)) {
    // Save the current Caps Lock state before hiding the virtual keyboard
    lastKnownCapsLockState = capsLockEnabled;
    keyboard.style.display = 'none';
  }
});


//light up lower case keys
document.addEventListener('keydown', function(event) {
  var pressedKey = event.key.toLowerCase();
  var virtualButton = document.querySelector('.keyboard-button[data-key="' + pressedKey + '"]');

  if (virtualButton) {
    virtualButton.classList.add('pressed');
  }
});








//What to do when a pysical key is typed
function onPhysicalKeyPress(event) {
  var pressedKey = event.key.toLowerCase();
  var virtualButton = document.querySelector('.keyboard-button[data-key="' + pressedKey + '"]');

  if (virtualButton) {
    // Light up the corresponding virtual button
    virtualButton.classList.add('pressed');

    // Remove the 'pressed' class after a short delay to show the button lighting up
    setTimeout(function() {
      virtualButton.classList.remove('pressed');
    }, 1000); // Change the delay (in milliseconds) as needed
  }
}

document.addEventListener('keydown', onPhysicalKeyPress);











// Function to handle speech synthesis
function speakText(text) {
  var synth = window.speechSynthesis;
  var utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

// Event listener for the speak button
document.getElementById('speakButton').addEventListener('click', function() {
  speakText(document.getElementById('textInput').value);
});