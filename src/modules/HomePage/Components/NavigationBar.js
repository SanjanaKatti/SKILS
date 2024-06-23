import Link from "next/link";
import { useState } from "react";
const NavigationBar = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [productions, setProductions] = useState(false);
  const [otherworks, setOtherWorks] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [faqs, setFaqs] = useState(false);
  const [contactus, setContactus] = useState(false);
  return (
    <div className="h-24 flex flex-row items-end">
      <div className="w-1/2">
        <img className="w-40 h-auto pl-5" src="/skils-LOGO.png" />
      </div>
      <div className="flex w-1/2 pl-10 pb-6">
        <Link href="./">
          <div
            className="px-4"
            onMouseEnter={() => setHome(true)}
            onMouseLeave={() => setHome(false)}
          >
            {home ? (
              <div>
                <div className="underline">Home</div>
              </div>
            ) : (
              <div>Home</div>
            )}
          </div>
        </Link>

        <Link href="./About">
          <div
            className="px-4"
            onMouseEnter={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            {about ? (
              <div>
                <div className="underline">About</div>
              </div>
            ) : (
              <div>About</div>
            )}
          </div>
        </Link>
        <Link href="./Productions">
          <div
            className="px-4"
            onMouseEnter={() => setProductions(true)}
            onMouseLeave={() => setProductions(false)}
          >
            {productions ? (
              <div>
                <div className="underline">Productions</div>
              </div>
            ) : (
              <div>Productions</div>
            )}
          </div>
        </Link>
        <Link href="./OtherWorks">
          <div
            className="px-4"
            onMouseEnter={() => setOtherWorks(true)}
            onMouseLeave={() => setOtherWorks(false)}
          >
            {otherworks ? (
              <div>
                <div className="underline">Other Works</div>
              </div>
            ) : (
              <div>Other Works</div>
            )}
          </div>
        </Link>
        <Link href="./Gallery">
          <div
            className="px-4"
            onMouseEnter={() => setGallery(true)}
            onMouseLeave={() => setGallery(false)}
          >
            {gallery ? (
              <div>
                <div className="underline">Gallery</div>
              </div>
            ) : (
              <div>Gallery</div>
            )}
          </div>
        </Link>
        <Link href="./FAQs">
          <div
            className="px-4"
            onMouseEnter={() => setFaqs(true)}
            onMouseLeave={() => setFaqs(false)}
          >
            {faqs ? (
              <div>
                <div className="underline">FAQs</div>
              </div>
            ) : (
              <div>FAQs</div>
            )}
          </div>
        </Link>
        <Link href="./ContactUs">
          <div
            className="px-4"
            onMouseEnter={() => setContactus(true)}
            onMouseLeave={() => setContactus(false)}
          >
            {contactus ? (
              <div>
                <div className="underline">Contact Us</div>
              </div>
            ) : (
              <div>Contact Us</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
