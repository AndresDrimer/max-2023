import Link from 'next/link';
import { SlSocialInstagram, SlSocialSpotify } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";

import { PiYoutubeLogoLight } from "react-icons/pi";

type SocialMediaProps = {
  name: string;
  path: string;
  logo: string;
};

const Footer = () => {
  const socialMedia: SocialMediaProps[] = [
    {
      name: "facebook",
      path: "https://www.facebook.com/max.dibujante.web",
      logo: "TiSocialFacebook",
    },
    {
      name: "spotify",
      path: "https://open.spotify.com/artist/7Bl5WcUdWdWAwDpCD3o8lk",
      logo: "SlSocialSpotify",
    },
    {
      name: "youtube",
      path: "https://www.youtube.com/channel/UChNHYCR10ncn9fBv7gp43Ig",
      logo: "PiYoutubeLogoLight",
    },
    {
      name: "instagram",
      path: "https://www.instagram.com/max.dibujante",
      logo: "SlSocialInstagram",
    },
  ];

  const actualYear = new Date().getFullYear()


  return (
    <footer className='w-full sticky top-[100vh] bg-white mx-auto'>
      <ul className='w-full flex justify-center gap-8 items-center '>
        {socialMedia.map((it) => (
          <li key={it.name} className='py-2 pb-4'>
            <Link href={it.path} target="_blank">
              {it.logo === "TiSocialFacebook" && <TiSocialFacebook size={22}/>}
              {it.logo === "SlSocialSpotify" && <SlSocialSpotify size={22}/>}
              {it.logo === "PiYoutubeLogoLight" && <PiYoutubeLogoLight size={22}/>}
              {it.logo === "SlSocialInstagram" && <SlSocialInstagram size={22}/>}
            </Link>
          </li>
        ))}
      </ul>
      <div className='w-full text-xs text-center mt-2 text-gray-500'>@ Andrés Drimer - {actualYear}</div>
    </footer>
  );
};

export default Footer;