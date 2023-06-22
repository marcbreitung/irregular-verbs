/**
 * Read a given string with the audio API
 */
export const read = (text: string, voice: SpeechSynthesisVoice, volume: number = 1) => {
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = volume;
    utterance.lang = "en-US";
    utterance.onend = () => {
      resolve(`Finished reading text: ${text}`);
    };
    utterance.onerror = (error) => {
      reject(error);
    };
    speechSynthesis.speak(utterance);
  });
};

/**
 * Returns an array of available voices
 */
export const getSystemVoices = () => {
  return new Promise<SpeechSynthesisVoice[]>((resolve, reject) => {
    window.speechSynthesis.onvoiceschanged = () => {
      const speechSynthesis = window.speechSynthesis;
      const availableVoices = speechSynthesis.getVoices();
      const englishVoices = availableVoices.filter(
        (voice: SpeechSynthesisVoice) => voice.lang === "en-US" || voice.lang === "en-GB"
      );
      if (englishVoices.length > 0) {
        window.speechSynthesis.onvoiceschanged = null;
        resolve(englishVoices);
      } else {
        reject("No voices available");
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  });
};
