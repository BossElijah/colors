import React, { useRef } from 'react';
import { ReactComponent as Rocket } from './rocket.svg';
import './Header.scss';

const Header = () => {
  const clickedNavLinkId = useRef('');

  const links = {
    red: 'Red',
    blue: 'Blue',
    green: 'Green',
    yellow: 'Yellow',
    pink: 'Pink',
    purple: 'Purple',
  };

  const removeBodyColorClasses = () => {
    Object.keys(links).forEach(linkId => {
      if (document.body.classList.contains(linkId)) {
        document.body.classList.remove(linkId);
      }
    });
  };

  const onClick = id => {
    removeBodyColorClasses();
    document.body.classList.add(id);
    clickedNavLinkId.current = id;
  };

  const onMouseOver = id => {
    removeBodyColorClasses();
    document.body.classList.add(id);
  };

  const onMouseLeave = id => {
    if (id !== clickedNavLinkId.current) {
      removeBodyColorClasses();
      clickedNavLinkId.current && document.body.classList.add(clickedNavLinkId.current);
    }
  }

  return (
    <div className="header">
      <a href="#!">
        <Rocket 
        onMouseOver={() => onMouseOver()}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onClick()}
        className="header__logo" />
      </a>
      <ul>
        {Object.keys(links).map(linkId => (
          <li
            key={linkId}
            id={linkId}
            onMouseOver={() => onMouseOver(linkId)}
            onMouseLeave={() => onMouseLeave(linkId)}
            onClick={() => onClick(linkId)}
          >
            <a href="#!">{links[linkId]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;