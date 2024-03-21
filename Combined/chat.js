const btn = document.getElementById("btn");

btn.addEventListener('click', async () => {
    console.log('Submit button clicked');
    const inputText = document.getElementById("input").value.trim();
    const parentDiv = document.getElementById("message-container");

    if (inputText === '') {
        return;
    }

    const userMessage = document.createElement('div');
    userMessage.textContent = "Can you show me step by step how to complete the following task: " + inputText;
    userMessage.classList.add("message-box", "user-message");
    parentDiv.appendChild(userMessage);

    document.getElementById("input").value = '';

    // Display loading bar
    const loadingIndicator = document.getElementById("loading-indicator");
    const progressBar = document.getElementById("progress-bar");
    loadingIndicator.style.display = "block"; // Show loading indicator

    // Update progress bar to indicate loading
    updateProgressBar(20); 
    console.log('Loading indicator displayed');

    // ChatGPT text response
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer API_KEY', // Replace with the ChatGPT API key
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: "Can you show me step by step how to complete the following task: " + inputText }],
                max_tokens: 1000
            })
        });

        if (!response.ok) {
            throw new Error('Server error');
        }

        const data = await response.json();
        console.log('ChatGPT response:', data);

        const botResponse = data.choices[0]?.message?.content?.trim();
        if (botResponse) {
            const steps = botResponse.split('\n');
            const botResponseElement = document.createElement('div');
            botResponseElement.classList.add("message-box", "bot-response");

            // Speech for each step
            for (let i = 0; i < steps.length; i++) {
                const step = steps[i];
                if (step.trim() !== '') {
                    const speakButton = document.createElement('button');
                    // Image for audio 
                    speakButton.innerHTML = '<img src="images/speaker.jpg" alt="Speak" width="20" height="20">';
                    speakButton.addEventListener('click', () => {
                        outputVoice(step);
                    });

                    // Containers for Image generation  
                    const stepContainer = document.createElement('div');
                    stepContainer.classList.add('step-container');

                    const stepElement = document.createElement('div');
                    stepElement.classList.add('step');
                    stepElement.textContent = step;

                    const imageContainer = document.createElement('div');
                    imageContainer.classList.add('image-container');

                    if (/^\d+\./.test(step.trim())) {
                        try {
                            const imageUrl = await generateImage(step);
                            console.log('Image URL:', imageUrl); // Log the image URL
                            
                            
                            // Display the generated image
                            const imageElement = document.createElement('img');
                            imageElement.src = imageUrl;
                            imageElement.width = 100;
                            imageElement.height = 100;

                            imageContainer.appendChild(imageElement);
                        } catch (imageError) {
                            console.error('Error generating image:', imageError);
                        }
                    }

                    stepContainer.appendChild(stepElement);
                    stepContainer.appendChild(speakButton);

                    botResponseElement.appendChild(stepContainer);
                    botResponseElement.appendChild(imageContainer);
                }
            }

            // Error messages
            parentDiv.appendChild(botResponseElement);
            console.log('Bot message:', botResponse);
        } else {
            throw new Error('Invalid response from ChatGPT API');
        }
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        // Hide loading indicator after completion or error
        loadingIndicator.style.display = "none"; // Hide loading indicator
        progressBar.style.width = "0"; // Reset progress bar width
        console.log('Loading indicator hidden');
    }
});




// Image generation
/* async function generateImage(prompt, retryCount = 3) {// Try to load image up to 3 times
  const inputText = document.getElementById("input").value.trim();
  try {

    const imageResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer APK_KEY', // Replace with the DALL·E API key
      },
      body: JSON.stringify({
        prompt: "Generate a 2-D cartoon image to help describe this step in the process of" + inputText+ ":" + prompt
      })
    });

    if (!imageResponse.ok) {
      throw new Error('Image generation error');
    }

    const imageData = await imageResponse.json();
    console.log('DALL·E image response:', imageData);

    const imageUrl = imageData.data[0].url;
    // Update progress bar to indicate image generation
    updateProgressBar(50); 
    return imageUrl;
  } catch (error) {
    console.error('Error generating image:', error);
    if (retryCount > 0) {
      console.log(`Retrying (${retryCount} attempts left)`);
      return generateImage(prompt, retryCount - 1); // Retry to load image with one less attempt
    } else {
      throw new Error('Failed to generate image after multiple attempts');
    }
  }
} */







// Update progress bar
function updateProgressBar(progress) {
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = `${progress}%`;
}

function handleKeyboardVisibility() {
  const headerHeight = document.querySelector('.header-bar').offsetHeight;
  let isKeyboardVisible = false;

  window.addEventListener('resize', () => {
      const windowHeight = window.innerHeight;
      if (isKeyboardVisible) {
          // Keyboard is visible, disable scrolling above the header bar
          document.body.style.overflow = 'hidden';
          document.body.style.height = windowHeight - headerHeight + 'px';
      } else {
          // Keyboard is hidden, enable scrolling
          document.body.style.overflow = '';
          document.body.style.height = '';
      }
  });

  // Detect keyboard visibility when input field is focused
  const input = document.getElementById('input');
  input.addEventListener('focus', () => {
      isKeyboardVisible = true;
  });

  // Detect when input field loses focus (keyboard is hidden)
  input.addEventListener('blur', () => {
      isKeyboardVisible = false;
  });
}

// Call the function to initialize keyboard visibility handling
handleKeyboardVisibility();



// Prevent scrolling above the header
window.addEventListener('scroll', function() {
  var headerHeight = document.querySelector('.header-bar').offsetHeight;
  if (window.scrollY < headerHeight) {
      window.scrollTo(0, headerHeight);
  }
});