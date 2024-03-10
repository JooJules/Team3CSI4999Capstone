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

  // Display loading indicator
  const loadingIndicator = document.getElementById("loading-indicator");
  const progressBar = document.getElementById("progress-bar");
  loadingIndicator.style.display = "block"; // Show loading indicator

  // Update progress bar to indicate loading
  updateProgressBar(20); // Example: 20% loading progress
  console.log('Loading indicator displayed');

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_KEY', // Replace with API key
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

      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        if (step.trim() !== '') {
          const utterance = new SpeechSynthesisUtterance(step);
          const speakButton = document.createElement('button');
          speakButton.textContent = 'Speak';
          speakButton.addEventListener('click', () => {
            speechSynthesis.speak(utterance);
          });

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
              // Display a placeholder or handle the error as needed
            }
          }

          stepContainer.appendChild(stepElement);
          stepContainer.appendChild(speakButton);

          botResponseElement.appendChild(stepContainer);
          botResponseElement.appendChild(imageContainer);
        }
      }
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

async function generateImage(prompt, retryCount = 3) {
  try {
    const imageResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_KEY', // Replace with API key
      },
      body: JSON.stringify({
        prompt: "Generate a 2-D cartoon image to help describe this step in a process: " + prompt
      })
    });

    if (!imageResponse.ok) {
      throw new Error('Image generation error');
    }

    const imageData = await imageResponse.json();
    console.log('DALL·E image response:', imageData);

    const imageUrl = imageData.data[0].url;
    // Update progress bar to indicate image generation
    updateProgressBar(40); // Example: 40% loading progress
    return imageUrl;
  } catch (error) {
    console.error('Error generating image:', error);
    if (retryCount > 0) {
      console.log(`Retrying (${retryCount} attempts left)`);
      return generateImage(prompt, retryCount - 1); // Retry with one less attempt
    } else {
      throw new Error('Failed to generate image after multiple attempts');
    }
  }
}

// Update progress bar
function updateProgressBar(progress) {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${progress}%`;
}
