import {isEmpty} from 'lodash';
import {useLocalForage} from '../../lib/hooks/use-local-forage';
import userPlaceholder from '../../assets/user-placeholder.svg';

export default function ContactAvatar({emailHash, contact, height, width}) {
  const [gravatarEnabled] = useLocalForage('gravatar-enabled');
  if (gravatarEnabled === 'NOT_READY') return null;

  const displayedEmailHash = emailHash || contact.emailHash.get();
  let src;
  if (isEmpty(displayedEmailHash) || !gravatarEnabled) {
    src = userPlaceholder;
  } else {
    src = `http://www.gravatar.com/avatar/${displayedEmailHash}`;
  }

  return (
    <img src={src} className={`rounded-full ${height} ${width}`}/>
  );
}