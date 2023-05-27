import React, { memo, useEffect } from "react";

type Props = {
  theme: string;
};

function Footer({ theme }: Props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className={`text-center mt-auto ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <div className='container'>
        <ul className='nav justify-content-center py-2'>
          <li className='nav-item pe-1'>
            <a
              className='github-button'
              href='https://github.com/Yash0922/touch-typing-app/tree/main/touch-typing-app'
              data-icon='octicon-star'
              data-color-scheme='no-preference: light; light: light; dark: dark;'
              data-show-count='true'
              aria-label='Star Yash0922/react-one-minute-speed-typing-test-ts on GitHub'
            >
              Star
            </a>
          </li>

          <li className='nav-item pe-1'>
            <a
              className='github-button'
              href='https://github.com/Yash0922/touch-typing-app/fork'
              data-icon='octicon-repo-forked'
              data-color-scheme='no-preference: light; light: light; dark: dark;'
              data-show-count='true'
              aria-label='Fork Yash0922/react-one-minute-speed-typing-test-ts on GitHub'
            >
              Fork
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='github-button'
              href='https://github.com/Yash0922'
              data-color-scheme='no-preference: light; light: light; dark: dark;'
              aria-label='Follow Yash0922 on GitHub'
            >
              Follow
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default memo(Footer);
