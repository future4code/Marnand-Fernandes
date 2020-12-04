import React from 'react';
import ContainerHeader from './styled';
import astromatch from '../../assets/img/astromatch.png';
import group from '../../assets/icons/grupo.svg';
import photo from '../../assets/icons/do-utilizador.svg';

function HeaderCard() {
  return (
    <ContainerHeader>
      <div>
        <div className="icon">
          <img src={group} />
        </div>
          <img src={astromatch} />
        <div className="icon">
          <img src={photo} />
        </div>
      </div>
    </ContainerHeader>
  )
}

export default HeaderCard;
