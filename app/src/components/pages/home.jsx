import {useRequireUnlock} from '../../lib/hooks/use-require-unlock';
import SetupGeneratePrivateKey from '../setup/generate-private-key';
import ShowSharablePublicKey from './home/show-sharable-public-key';

export default function HomePage({children}) {
  const isUnlocked = useRequireUnlock();

  return (
    <>
      {children}

      {
        isUnlocked && <SetupGeneratePrivateKey>
          <div className="w-full md:w-1/3 flex justify-center mx-auto">
            <ShowSharablePublicKey/>
          </div>
        </SetupGeneratePrivateKey>
      }
    </>
  );
}