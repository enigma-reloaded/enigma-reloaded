import * as localforage from 'localforage';

export function restoreBackupFromJsonFile(file) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      const json = JSON.parse(e.target.result);
      await localforage.clear();

      const promises = [];

      for (const k in json) {
        const v = json[k];

        promises.push(localforage.setItem(k, v));
      }

      await Promise.all(promises);

      resolve();
    };
    fileReader.readAsText(file);
  });
}