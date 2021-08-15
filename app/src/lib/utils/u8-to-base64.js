export default function u8ToBase64(u8){
  return Buffer.from(u8).toString('base64');
}