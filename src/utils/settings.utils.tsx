enum LocalStorageKeys {
  SETTINGS_KEY = "settings",
}

export type SettingsType = {
  voice: string | null;
  volume: number;
  dictionaryUrl: string;
};

export const storeSettings = (settings: SettingsType) => {
  localStorage.setItem(LocalStorageKeys.SETTINGS_KEY, JSON.stringify(settings));
};

export const getSettings = (): SettingsType => {
  return JSON.parse(localStorage.getItem(LocalStorageKeys.SETTINGS_KEY) || "{}");
};
