import * as Crypto from 'crypto-js';

export class EncryptStorage {
  constructor(secret, storage) {
    this.secret = secret;
    this.storage = storage;
  }

  encrypt(key, data) {
    if(typeof data === "object"){
    data = JSON.stringify(data);
  } else if(typeof data === "number") {
    data = data.toString();
  } else if(typeof data !== "string") {
    throw new Error('invalid type')
  }
    const encryptedData = Crypto.AES.encrypt(data, this.secret);
    return this.storage.setItem(key, encryptedData.toString());
  }
  
  async decrypt(key){
    const data = await this.storage.getItem(key);
    let decryptedData = null;
    if(data) {
      decryptedData = (Crypto.AES.decrypt(data, this.secret)).toString(Crypto.enc.Utf8);
      try {
        decryptedData = JSON.parse(decryptedData);
      } catch(e) {}
    }
    return decryptedData;
  }
  
  remove(key) {
    return this.storage.removeItem(key);
  }
}