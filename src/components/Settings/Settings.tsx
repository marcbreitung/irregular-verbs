import { useContext, useState } from "react";
import { SettingsContext } from "../../store/settings-context";
import { refreshRandomVerbs } from "../../utils/vocabulary.utils";
import Message from "../Message/Message";
import ButtonText from "../UI/Button/ButtonText";

const ListOfDictionaryUrls = [
  "https://www.merriam-webster.com/dictionary",
  "https://www.dictionary.com/browse",
  "https://www.thesaurus.com/browse",
  "https://dict.leo.org/englisch-deutsch",
];

const Settings = () => {
  const { voice, volume, systemVoices, dictionaryUrl, setVoice, setVolume, setDictionaryUrl } =
    useContext(SettingsContext);

  const [message, setMessage] = useState<string>("");

  const setVoiceHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVoice = systemVoices.find((v: any) => v.voiceURI === event.currentTarget.value);
    if (selectedVoice) {
      setVoice(selectedVoice);
    }
  };

  const setVolumeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(+event.currentTarget.value);
  };

  const setDictionaryUrlHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDictionaryUrl(event.currentTarget.value);
  };

  const setRefreshVerbsHandler = () => {
    refreshRandomVerbs();
    setMessage("Learning progress has been reset.");
  };

  const closeMessageHandler = () => {
    setMessage("");
  };

  return (
    <div className="py-4">
      {systemVoices.length > 0 && (
        <div className="py-4">
          {message && <Message message={message} severity="info" onClose={closeMessageHandler} />}
          <div className="mb-4 flex flex-col">
            <label htmlFor="voice" className="block text-lightYellow mb-2">
              Voice
            </label>
            <div className="bg-darkGreen p-4 -mx-4">
              <select value={voice ? voice.voiceURI : ""} onChange={setVoiceHandler} id="voice" className="w-full">
                {systemVoices.map((v: SpeechSynthesisVoice) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="volume" className="block text-lightYellow mb-2">
              Volume
            </label>
            <div className="bg-darkGreen p-4 -mx-4">
              <input
                type="range"
                id="volume"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={setVolumeHandler}
                className="w-full"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="dictionary" className="block text-lightYellow mb-2">
              Dictionary URL
            </label>
            <div className="bg-darkGreen p-4 -mx-4">
              <select value={dictionaryUrl} onChange={setDictionaryUrlHandler} id="dictionary" className="w-full">
                {ListOfDictionaryUrls.map((url) => (
                  <option key={url} value={url}>
                    {url}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <span className="block text-lightYellow mb-2">Reset Learning Progress</span>
            <div className="bg-darkGreen p-4 -mx-4">
              <ButtonText layout={"primary"} onClick={setRefreshVerbsHandler}>
                Reset
              </ButtonText>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
