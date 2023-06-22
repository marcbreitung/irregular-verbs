import React, { useEffect } from "react";
import { storeSettings } from "../utils/settings.utils";
import { getSystemVoices } from "../utils/learning.utils";

export interface SettingsContextType {
  voice: SpeechSynthesisVoice | null;
  systemVoices: SpeechSynthesisVoice[];
  volume: number;
  dictionaryUrl: string;
  setVoice: (voice: SpeechSynthesisVoice | null) => void;
  setVolume: (volume: number) => void;
  setSystemVoices: (voices: SpeechSynthesisVoice[]) => void;
  setDictionaryUrl: (url: string) => void;
}

export const SettingsContext = React.createContext<SettingsContextType>({
  systemVoices: [],
  voice: null,
  volume: 1,
  dictionaryUrl: "https://www.merriam-webster.com/dictionary/",
  setVoice: (voice: SpeechSynthesisVoice | null) => {},
  setVolume: (volume: number) => {},
  setSystemVoices: (voices: SpeechSynthesisVoice[]) => {},
  setDictionaryUrl: (url: string) => {},
});

type SettingsContextProviderProps = {
  children: React.ReactNode;
};

const SettingsContextProvider = ({ children }: SettingsContextProviderProps) => {
  const [voice, setVoice] = React.useState<SpeechSynthesisVoice | null>(null);
  const [systemVoices, setSystemVoices] = React.useState<SpeechSynthesisVoice[]>([]);
  const [volume, setVolume] = React.useState<number>(1);
  const [dictionaryUrl, setDictionaryUrl] = React.useState<string>("https://www.merriam-webster.com/dictionary/");

  useEffect(() => {
    (async () => {
      try {
        const voices = await getSystemVoices();
        const settings = JSON.parse(localStorage.getItem("settings") || "{}");
        const voice = voices.find((v: SpeechSynthesisVoice) => v.voiceURI === settings.voice);
        setVoice(voice ?? null);
        setVolume(settings.volume);
        setSystemVoices(voices);
      } catch (error) {
        console.error("Error loading settings", error);
      }
    })();
  }, []);

  const setVoiceHandler = (voiceUpdate: SpeechSynthesisVoice | null) => {
    storeSettings({ voice: voiceUpdate?.voiceURI ?? null, volume, dictionaryUrl });
    setVoice(voiceUpdate);
  };

  const setVolumeHandler = (volumeUpdate: number) => {
    storeSettings({ voice: voice?.voiceURI ?? null, volume: volumeUpdate, dictionaryUrl });
    setVolume(volumeUpdate);
  };

  const setSystemVoicesHandler = (voices: SpeechSynthesisVoice[]) => {
    setSystemVoices(voices);
  };

  const setDictionaryUrlHandler = (url: string) => {
    storeSettings({ voice: voice?.voiceURI ?? null, volume, dictionaryUrl: url });
    setDictionaryUrl(url);
  };

  return (
    <SettingsContext.Provider
      value={{
        voice,
        volume,
        systemVoices,
        dictionaryUrl,
        setVoice: setVoiceHandler,
        setVolume: setVolumeHandler,
        setSystemVoices: setSystemVoicesHandler,
        setDictionaryUrl: setDictionaryUrlHandler,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
