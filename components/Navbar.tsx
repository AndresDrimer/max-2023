"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.png";
import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { usePathname, useRouter } from 'next/navigation'


const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname();
  const navItems = [
    {
      navItem: "Noticias",
      path: "/noticias",
    },
    {
      navItem: "Trabajos",
      path: "/trabajos",
    },
    {
      navItem: "Tienda",
      path: "/tienda",
    },
    {
      navItem: "Libros",
      path: "/libros",
    },
    {
      navItem: "Musica",
      path: "/musica",
    },
    {
      navItem: "Bio",
      path: "/bio",
    },
    {
      navItem: "Contacto",
      path: "/contacto",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const handleClick = (url: string)=> {
  
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (pathname !== url) {
      router.push(url);
    }
  
}

  return (
    <nav className=" fixed w-full ">
     
      <div
        className={`w-full px-2 py-2 md:px-[10%] md:py-4 flex items-center ${
          isScrolled ? "bg-white" : "bg-transparent"
        } bg-white`}
      >
        <Link href="/" className="mr-auto">
        <div className="relative w-[10rem] md:w-[14rem] ">
          <Image
            src={Logo}
            alt="logo"
            width={1280}
            height={362}
            sizes="100vw"
            className="fill"
          />
        </div>
</Link>
        {
          <div>
            <div className="lg:hidden px-4">
              <div className="border border-gray-300 px-2 py-1 rounded-md ">
                <div
                  className="hamburger-icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <RiCloseLine size={22} />
                  ) : (
                    <RiMenuLine size={22} />
                  )}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex">
              <ul className="flex gap-4">
                {navItems.map((it) => (
                  <li key={it.navItem}>
                    <Link href={it.path} className="hover:underline" >{it.navItem}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      </div>


      <div>
        {isMenuOpen ? (
          <div className="bg-white">
            <ul className="flex flex-col gap-4 pl-2 py-2 text-sm">
              {navItems.map((item) => (
                <li key={item.navItem} className="hover:font-extrabold">
                  <button onClick={()=>handleClick(item.path)}>{item.navItem}</button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
