import logo from '../../../assets/enigma-logo.jpg';

export default function HomePageDescription({children: button}) {
  return (
    <div>
      <div className="flex justify-center">
        <img src={logo} alt="enigma"/>
      </div>
      <div className="py-2">
        {button}
      </div>

      <div className="flex">
        <div className="w-full md:w-1/2">
          <div className="font-bold text-3xl">
            Engima R3loaded
          </div>

          <div>
            DIY Encrypt and decrypt messages and files
          </div>
          <div>
            Don't trust "words" such as privacy, encryption, safety etc, coming from platforms which monetize your data. Only Mathematics and control can be trusted
          </div>
          <div>
            Open source
          </div>
          <div>
            No server or internet needed, 100% offline support
          </div>
          <div>
            Works with any service such as: <b>Messenger, Signal, Slack, Whatsapp, Twitter, Instagram DM, SMS etc</b>
          </div>
        </div>
      </div>
    </div>
  );
}