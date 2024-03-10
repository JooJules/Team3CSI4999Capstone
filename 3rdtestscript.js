let capsLockEnabled = false;
let currentKeyboard = 1;
let lastKnownCapsLockState = false;

function toggleKeyboard() {
  var textInput = document.getElementById('textInput');
  var keyboard = document.getElementById('virtualKeyboard');

  keyboard.innerHTML = "";

  const keysLayout = (capsLockEnabled) ? [
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
    ['capslock', ' ', 'backspace']
  ] : [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    ['capslock', ' ', 'backspace']
  ];

  keysLayout.forEach(row => {
    row.forEach(key => {
      var button = document.createElement('button');

      if (key === ' ') {
        button.textContent = 'space';
        button.onclick = function () {
          onKeyPress(' ');
        };
      } else {
        button.textContent = key;
        button.onclick = function () {
          onKeyPress(key);
        };
      }

      button.className = 'keyboard-button';

      if (key === ' ' || key === 'backspace' || key === 'capslock') {
        button.className += ' special-key';
      }

      button.setAttribute('data-key', key.toLowerCase());

      keyboard.appendChild(button);
    });

    keyboard.appendChild(document.createElement('br'));
  });

  keyboard.style.display = 'block';
}

function toggleCase() {
  currentKeyboard = (currentKeyboard === 1) ? 2 : 1;
  toggleKeyboard();
  document.getElementById('textInput').focus(); // Set focus back to the text input
}
function onKeyPress(key) {
  var textInput = document.getElementById('textInput');

  if (key === 'backspace') {
    textInput.value = textInput.value.slice(0, -1);
  } else if (key === 'capslock') {
    capsLockEnabled = !capsLockEnabled;
    applyCapsLockStyle();
    toggleKeyboard();
  } else {
    textInput.value += capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
  }
}

function updateKeyboardLabels() {
  var buttons = document.querySelectorAll('#virtualKeyboard button');
  buttons.forEach(button => {
    var key = button.textContent.toLowerCase();

    if (key !== 'backspace' && key !== 'capslock' && key !== 'space') {
      button.textContent = capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
    }
  });
}

function applyCapsLockStyle() {
  var capsLockButton = document.querySelector('button[data-key="capslock"]');
  if (capsLockEnabled) {
    capsLockButton.classList.add('capsLockEnabled');
  } else {
    capsLockButton.classList.remove('capsLockEnabled');
  }
}

document.getElementById('textInput').addEventListener('click', function () {
  toggleCase();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'CapsLock') {
    event.preventDefault();
    capsLockEnabled = !capsLockEnabled;
    applyCapsLockStyle();
    toggleCase();
    toggleKeyboard();
  }

  onPhysicalKeyPress(event);
});

document.getElementById('speakButton').addEventListener('click', function (event) {
  event.preventDefault();  // Prevent the default behavior of the click event
  speakText(document.getElementById('textInput').value);
});

document.addEventListener('keyup', function (event) {
  var pressedKey = event.key.toLowerCase();
  var virtualButton = document.querySelector('.keyboard-button[data-key="' + pressedKey + '"]');

  if (virtualButton) {
    virtualButton.classList.remove('pressed');
  }
});

function onPhysicalKeyPress(event) {
  var pressedKey = event.key.toLowerCase();
  var virtualButton = document.querySelector('.keyboard-button[data-key="' + pressedKey + '"]');

  if (virtualButton) {
    virtualButton.classList.add('pressed');

    setTimeout(function () {
      virtualButton.classList.remove('pressed');
    }, 100);
  }
}



function deleteContents() {
  var textBox = document.getElementById('textInput');
  textBox.value = '';
}

document.getElementById('clear').addEventListener('click', function () {
  deleteContents();
});

document.addEventListener('keydown', function (event) {
  var isCapsLockActive = event.getModifierState('CapsLock');
  if (isCapsLockActive !== lastKnownCapsLockState) {
    capsLockEnabled = isCapsLockActive;
    applyCapsLockStyle();
    updateKeyboardLabels();
    lastKnownCapsLockState = isCapsLockActive;
  }
});

document.addEventListener('keyup', function (event) {
  if (event.getModifierState('CapsLock')) {
    lastKnownCapsLockState = capsLockEnabled;
  }
});


document.addEventListener('click', function (event) {
  var textInput = document.getElementById('textInput');
  var keyboard = document.getElementById('virtualKeyboard');

  // Check if the clicked element is not the text input, a keyboard button, or the clear button
  if (event.target !== textInput && !event.target.classList.contains('keyboard-button') && event.target.id !== 'clear') {
    lastKnownCapsLockState = capsLockEnabled;
    keyboard.style.display = 'none';
  } else {
    keyboard.style.display = 'block';
  }
});

function speakText(text) {
  var synth = window.speechSynthesis;
  var utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}