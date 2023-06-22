import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export type SpeechResult = {
  id: string;
  result: string;
  tense: string;
};

type UseSpeechProps = {
  onResult: (result: SpeechResult) => void;
  onError: (error: string, tense: string) => void;
};

const useSpeech = ({ onResult, onError }: UseSpeechProps) => {
  const [activity, setActivity] = useState<boolean>(false);

  const listen = (tense: string, voice: SpeechSynthesisVoice) => {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = voice.lang;
    recognition.start();
    recognition.onaudiostart = (event: any) => {
      setActivity(true);
    };
    recognition.onresult = (event: any) => {
      onResult({
        id: uuidv4(),
        result: event.results[0][0].transcript,
        tense,
      });
      setActivity(false);
    };
    recognition.onerror = (event: any) => {
      onError(event.error, tense);
      setActivity(false);
    };
    recognition.onspeechend = (event: any) => {
      recognition.stop();
      setActivity(false);
    };
    recognition.onnomatch = (event: any) => {
      setActivity(false);
    };
    recognition.onend = (event: any) => {
      setActivity(false);
    };
  };

  return { listen, activity };
};

export default useSpeech;
