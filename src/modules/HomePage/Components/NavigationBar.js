import Link from "next/link";
import { useState } from "react";
const NavigationBar = ({ currentPage }) => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [productions, setProductions] = useState(false);
  const [otherworks, setOtherWorks] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [faqs, setFaqs] = useState(false);
  const [contactus, setContactus] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 h-24 z-50 bg-black flex flex-row items-end px-40">
      <div className="p-10">
        <img className="w-40 h-auto" src="/skils-LOGO.png" />
      </div>
      <div className="flex w-1/2 pl-10 pb-6 font-serif">
        <Link href="./">
          {currentPage === "Home" ? (
            <div className="underline text-red-600">Home</div>
          ) : (
            <div
              className="px-4"
              onMouseEnter={() => setHome(true)}
              onMouseLeave={() => setHome(false)}
            >
              {home ? (
                <div>
                  <div className="underline text-red-600">Home</div>
                </div>
              ) : (
                <div>Home</div>
              )}
            </div>
          )}
        </Link>

        <Link href="./About">
          {currentPage === "About" ? (
            <div className="underline text-red-600">About</div>
          ) : (
            <div
              className="px-4"
              onMouseEnter={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              {about ? (
                <div>
                  <div className="underline text-red-600">About</div>
                </div>
              ) : (
                <div>About</div>
              )}
            </div>
          )}
        </Link>
        <Link href="./Productions">
          {currentPage === "Productions" ? (
            <div className="underline text-red-600">Productions</div>
          ) : (
            <div
              className="px-4"
              onMouseEnter={() => setProductions(true)}
              onMouseLeave={() => setProductions(false)}
            >
              {productions ? (
                <div>
                  <div className="underline text-red-600">Productions</div>
                </div>
              ) : (
                <div>Productions</div>
              )}
            </div>
          )}
        </Link>
        <Link href="./OtherWorks">
          {currentPage === "OtherWorks" ? (
            <div className="underline text-red-600">Other Works</div>
          ) : (
            <div
              className="px-4"
              onMouseEnter={() => setOtherWorks(true)}
              onMouseLeave={() => setOtherWorks(false)}
            >
              {otherworks ? (
                <div>
                  <div className="underline text-red-600">Other Works</div>
                </div>
              ) : (
                <div>Other Works</div>
              )}
            </div>
          )}
        </Link>
        <Link href="./Gallery">
          {currentPage === "Gallery" ? (
            <div className="underline text-red-600">Gallery</div>
          ) : (
            <div
              className="px-4"
              onMouseEnter={() => setGallery(true)}
              onMouseLeave={() => setGallery(false)}
            >
              {gallery ? (
                <div>
                  <div className="underline text-red-600">Gallery</div>
                </div>
              ) : (
                <div>Gallery</div>
              )}
            </div>
          )}
        </Link>
        <Link href="./FAQs">
          {currentPage === "FAQs" ? (
            <div className="underline text-red-600">FAQs</div>
          ) : (
            <div
              className="px-4"
              onMouseEnter={() => setFaqs(true)}
              onMouseLeave={() => setFaqs(false)}
            >
              {faqs ? (
                <div>
                  <div className="underline text-red-600">FAQs</div>
                </div>
              ) : (
                <div>FAQs</div>
              )}
            </div>
          )}
        </Link>
        <Link href="./ContactUs">
          {currentPage === "ContactUs" ? (
            <div className="underline text-red-600">Contact Us</div>
          ) : (
            <div
              className="px-4"
              onMouseEnter={() => setContactus(true)}
              onMouseLeave={() => setContactus(false)}
            >
              {contactus ? (
                <div>
                  <div className="underline text-red-600">Contact Us</div>
                </div>
              ) : (
                <div>Contact Us</div>
              )}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
