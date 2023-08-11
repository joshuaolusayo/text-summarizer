"use client";

import Link from "next/link";

type NavLinkProps = {
  name: string;
  url?: string;
};

const NavLink = ({ name, url = "#" }: NavLinkProps) => (
  <Link
    className="-rotate-90 font-semibold text-xl md:text-2xl font-tilt-prism"
    href={url}
  >
    {name}
  </Link>
);

const NavBar = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center py-20 border-r-4 border-r-black custom-height">
        <NavLink name="Home" url="/" />
        <NavLink name="Summarizer" url="/summarizer" />
        <NavLink name="About" url="/about" />
      </div>
    </>
  );
};

export default NavBar;
