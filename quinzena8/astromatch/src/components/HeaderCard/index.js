import React from 'react';
import ContainerHeader from './styled';
import astromatch from '../../assets/img/astromatch.png';
import group from '../../assets/icons/grupo.svg';
import photo from '../../assets/icons/do-utilizador.svg';

function HeaderCard(props) {
  return (
    <ContainerHeader>
      <div>
        <div className="icon">
          <img onClick={props.list} src={group} />
        </div>
          <img src={astromatch} />
        <div className="icon">
          <img onClick={props.profiles} src={photo} />
        </div>
      </div>
    </ContainerHeader>
  )
}

export default HeaderCard;
