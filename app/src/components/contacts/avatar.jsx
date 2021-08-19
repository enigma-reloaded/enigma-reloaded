export default function ContactAvatar({contact, height, width}) {
  const src = `http://www.gravatar.com/avatar/${contact.emailHash.get()}`;

  return (
    <img src={src} className={`rounded-full ${height} ${width}`}/>
  );
}