import verbList from "../data/verbs";
import { VerbType } from "../model/app.model";

const offset = 1;

enum LocalStorageKeys {
  VERBS = "verbs",
  VERBS_RANDOM = "verbsRandom",
  VERBS_INDEX = "verbsIndex",
}

const getItemFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "null");
};

const storeVerbs = () => {
  if (!localStorage.hasOwnProperty(LocalStorageKeys.VERBS)) {
    localStorage.setItem(LocalStorageKeys.VERBS, JSON.stringify(verbList));
  }
};

const getVerbs = () => {
  storeVerbs();
  return getItemFromLocalStorage(LocalStorageKeys.VERBS);
};

const storeRandomVerbs = () => {
  if (!localStorage.hasOwnProperty(LocalStorageKeys.VERBS_RANDOM)) {
    const verbs = getVerbs();
    const verbsOrder = [...verbs];
    for (let i = verbsOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [verbsOrder[i], verbsOrder[j]] = [verbsOrder[j], verbsOrder[i]];
    }

    verbsOrder.forEach((verb) => {
      verb.correct = 0;
      verb.wrong = 0;
      verb.progress = 0;
    });

    localStorage.setItem(LocalStorageKeys.VERBS_RANDOM, JSON.stringify(verbsOrder));
  }
};

export const getRandomVerbs = () => {
  storeRandomVerbs();
  return getItemFromLocalStorage(LocalStorageKeys.VERBS_RANDOM);
};

const storeIndex = (index: number) => {
  localStorage.setItem(LocalStorageKeys.VERBS_INDEX, index.toString());
};

const getIndex = () => {
  return getItemFromLocalStorage(LocalStorageKeys.VERBS_INDEX) || 0;
};

const getIndexAndRandomVerbs = () => {
  const index = getIndex();
  const verbsRandom = getRandomVerbs();
  return { index, verbsRandom };
};

export const refreshRandomVerbs = () => {
  localStorage.removeItem(LocalStorageKeys.VERBS_RANDOM);
  storeRandomVerbs();
};

export const currentPage = () => {
  const { index, verbsRandom } = getIndexAndRandomVerbs();
  const currentPage = verbsRandom.slice(index, index + offset);
  if (currentPage.length > 0) {
    return currentPage[0];
  }
  return verbsRandom[0];
};

export const nextPage = () => {
  const { index, verbsRandom } = getIndexAndRandomVerbs();
  const newIndex = (index + offset) % verbsRandom.length;
  storeIndex(newIndex);
  return currentPage();
};

export const previousPage = () => {
  const { index, verbsRandom } = getIndexAndRandomVerbs();
  const newIndex = (index - offset + verbsRandom.length) % verbsRandom.length;
  storeIndex(newIndex);
  return currentPage();
};

export const updateLearnProgress = (verb: VerbType, isCorrect: boolean) => {
  const verbs = getRandomVerbs();
  const verbIndex = verbs.findIndex((v: VerbType) => v.id === verb.id);

  if (verbIndex > -1 && isCorrect) {
    verbs[verbIndex].correct += 1;
  } else {
    verbs[verbIndex].wrong += 1;
  }
  verbs[verbIndex].progress = Math.round(
    (verbs[verbIndex].correct / (verbs[verbIndex].correct + verbs[verbIndex].wrong)) * 100
  );
  localStorage.setItem(LocalStorageKeys.VERBS_RANDOM, JSON.stringify(verbs));
};

export const getVerbByInfinitive = (infinitive: string) => {
  const verbs = getRandomVerbs();
  return verbs.find((v: VerbType) => v.infinitive === infinitive);
};
