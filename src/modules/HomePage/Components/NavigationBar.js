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
    <div className="fixed top-0 left-0 right-0 h-24 z-50 bg-black">
      <div className="flex flex-row mx-auto max-w-[1000px] items-center justify-between content-center h-full font-oswald">
        <div>
          <img className="w-28 h-auto" src="/skils-LOGO.png" />
        </div>
        <div className="flex ">
          <Link href="./">
            {currentPage === "Home" ? (
              <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                Home
              </div>
            ) : (
              <div
                className=""
                onMouseEnter={() => setHome(true)}
                onMouseLeave={() => setHome(false)}
              >
                {home ? (
                  <div>
                    <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                      Home
                    </div>
                  </div>
                ) : (
                  <div className="px-4 text-lg pb-2">Home</div>
                )}
              </div>
            )}
          </Link>

          <Link href="./About">
            {currentPage === "About" ? (
              <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                About
              </div>
            ) : (
              <div
                className=""
                onMouseEnter={() => setAbout(true)}
                onMouseLeave={() => setAbout(false)}
              >
                {about ? (
                  <div>
                    <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                      About
                    </div>
                  </div>
                ) : (
                  <div className="px-4 text-lg pb-2">About</div>
                )}
              </div>
            )}
          </Link>
          <Link href="./Productions">
            {currentPage === "Productions" ? (
              <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                Productions
              </div>
            ) : (
              <div
                className=""
                onMouseEnter={() => setProductions(true)}
                onMouseLeave={() => setProductions(false)}
              >
                {productions ? (
                  <div>
                    <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                      Productions
                    </div>
                  </div>
                ) : (
                  <div className="px-4 text-lg pb-2">Productions</div>
                )}
              </div>
            )}
          </Link>
          <Link href="./OtherWorks">
            {currentPage === "OtherWorks" ? (
              <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                Other Works
              </div>
            ) : (
              <div
                className=""
                onMouseEnter={() => setOtherWorks(true)}
                onMouseLeave={() => setOtherWorks(false)}
              >
                {otherworks ? (
                  <div>
                    <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                      Other Works
                    </div>
                  </div>
                ) : (
                  <div className="px-4 text-lg pb-2">Other Works</div>
                )}
              </div>
            )}
          </Link>
          <Link href="./Gallery">
            {currentPage === "Gallery" ? (
              <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                Gallery
              </div>
            ) : (
              <div
                className=""
                onMouseEnter={() => setGallery(true)}
                onMouseLeave={() => setGallery(false)}
              >
                {gallery ? (
                  <div>
                    <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                      Gallery
                    </div>
                  </div>
                ) : (
                  <div className="px-4 text-lg pb-2">Gallery</div>
                )}
              </div>
            )}
          </Link>
          <Link href="./FAQs">
            {currentPage === "FAQs" ? (
              <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                FAQs
              </div>
            ) : (
              <div
                className=""
                onMouseEnter={() => setFaqs(true)}
                onMouseLeave={() => setFaqs(false)}
              >
                {faqs ? (
                  <div>
                    <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                      FAQs
                    </div>
                  </div>
                ) : (
                  <div className="px-4 text-lg pb-2">FAQs</div>
                )}
              </div>
            )}
          </Link>
          <Link href="./ContactUs">
            {currentPage === "ContactUs" ? (
              <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                Contact Us
              </div>
            ) : (
              <div
                className=""
                onMouseEnter={() => setContactus(true)}
                onMouseLeave={() => setContactus(false)}
              >
                {contactus ? (
                  <div>
                    <div className="px-4 text-red-600 text-lg border-b-2 border-red-600 pb-2">
                      Contact Us
                    </div>
                  </div>
                ) : (
                  <div className="px-4 text-lg pb-2">Contact Us</div>
                )}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
