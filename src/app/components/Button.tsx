import React from "react";

interface ButtonLinkProps {
  href: string;
  text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, text }) => {
  return (
    <div>
      <a href={href} className="btn-primary">
        {text}
      </a>
    </div>
  );
};

export default ButtonLink;
