import React from "react";
import ButtonLink from "./Button";

interface PageLinkProps {
  href: string;
  text: string;
}

const pageLinks: PageLinkProps[] = [
  { href: "/pages/login", text: "login" },
  { href: "/pages/todo", text: "todo" },
  { href: "/pages/users", text: "users" },
  { href: "/pages/reactQuery/userQuery", text: "userQuery" },
];

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">my website</div>
        <div className=" flex space-x-10 text-white">
          {pageLinks.map((item) => (
            <div className=" hover:text-black text-1xl font-mono">
              <ButtonLink href={item.href} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
