import FaqQuestion from './faq-question';

export default function EnigmaAbout() {
  return (
    <>
      <div className="w-full md:w-1/2">
        <div className="font-bold text-3xl">
          Engima Reloaded
        </div>

        <div className="mt-12">
          <div className="font-bold mb-2">
            Features
          </div>

          <div className="pl-4">
            <ul className="list-disc">
              <li>
                DIY Encrypt and decrypt messages and files
              </li>
              <li>
                <a href="https://github.com/enigma-reloaded/enigma-reloaded/blob/master/LICENSE" target="_blank" className="underline">
                  Open source license(GPL V3)
                </a> and <a href="https://github.com/enigma-reloaded/enigma-reloaded" target="_blank" className="underline">open source code</a>
              </li>
              <li className="mt-2">
                Local data such as contacts and messages are encrypted using <b>AES-256</b>, and your PIN is used as the passphrase
              </li>
              <li className="my-2">
                Messages and files are encrypted using <b>Public-key authenticated encryption (box)</b> from <a className="underline" href="https://github.com/dchest/tweetnacl-js" target="_blank">
                https://github.com/dchest/tweetnacl-js
                </a>. Which is implements <b>x25519-xsalsa20-poly1305</b>
              </li>
              <li>
                No ads, tracking, remote server
              </li>
              <li>
                Offline support
              </li>
              <li>
                Compatible with services such as: <b>Messenger, Signal, Slack, Whatsapp, Twitter, Instagram DM, SMS etc</b>.
                You can even print the cypher on a paper
              </li>
              <li>
                Import export <b>encrypted backups</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="font-bold mb-2">
          FAQ
        </div>

        <FaqQuestion title="What is Enigma Reloaded?">
          Enigma is a simple DIY(Do it yourself) program that runs inside your browser that helps you:
          <div className="pl-4">
            <ul className="list-disc">
              <li>
                Encrypt and decrypt messages
              </li>
              <li>
                Encrypt and decrypt files
              </li>
              <li>
                Store contacts and conversations
              </li>
            </ul>
          </div>
        </FaqQuestion>

        <FaqQuestion title="Why is called Enigma?">
          <div>
            It's a common name that is already associated with secrecy and privacy, and your life should be private. Enigma reloaded single purpose is to help people <a className="underline"
              href="https://www.youtube.com/watch?v=0hLjuVyIIrs" target="_blank">against the current Big Tech mass surveillance</a>
          </div>
        </FaqQuestion>

        <FaqQuestion title="Does it have anything to do with the nazi?">
          No
        </FaqQuestion>

        <FaqQuestion title="Can big tech claims about end to end encryption be trusted?">
          No
        </FaqQuestion>

        <FaqQuestion title="Is it military grade secure?">
          <div className="pl-4">
            <ul className="list-disc">
              <li>
                ✓ Strong encryption
              </li>
              <li>
                ✓ Access control
              </li>
              <li>
                ✓ Encrypted backups
              </li>
              <li>
                ✓ No external services(except the optional gravatar for user avatars)
              </li>
            </ul>
          </div>
        </FaqQuestion>

        <FaqQuestion title="Why did Enigma reloaded appear now?">
          <span className="underline font-bold">Free speech on the internet must have a real chance</span> against multi trillion dollar companies and governments which try to suppress it.
          <div>
            2021 might be the last year when internet is not 100% censored.
          </div>
        </FaqQuestion>

        <FaqQuestion title="Is it 'really' for free?">
          <div>
            <div>
              100% free, no ads, no tracking. If Enigma Reloaded helped you, that's enough. But if you want, you can donate some Monero to the project
            </div>
            <div>
              <b>866bdf5Dk8h2NdJBaukVpq9qwTjiiwRZWLE6e5yDXFRAcTCkozB3qDiiDoSvEQXBPhBKbXyzwxP88KkHEZBPsVui2NAKhVH</b>
            </div>
          </div>
        </FaqQuestion>

        <FaqQuestion title="Can I self host it?">
          <div>
            <div>
              Sure, just <a href="https://github.com/enigma-reloaded/enigma-reloaded/archive/refs/heads/gh-pages.zip" target="_blank" className="underline">
              download this zip file</a> and deploy it to your server.
            </div>
          </div>
        </FaqQuestion>
      </div>
    </>
  );
}