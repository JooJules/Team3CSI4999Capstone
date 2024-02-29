function outputVoice(parameter) {
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
      
        // Get the first `en` language voice in the list
        var voice = synth.getVoices().filter(function (voice) {
          return voice.lang === 'en';
        })[0];
      
        // Create an utterance object
        var utterance = new SpeechSynthesisUtterance(parameter);
      
        // Set utterance properties
        utterance.voice = voice;
        utterance.pitch = 2;
        utterance.rate = 1.25;
        utterance.volume = 0.8;
      
        // Speak the utterance
        synth.speak(utterance);
      } else {
        console.log('Text-to-speech not supported.');
      }
}