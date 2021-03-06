import React from 'react';
import { FiHome, FiLogOut, FiBriefcase } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/contexts/AuthProvider';
import { Styled } from './styles';
import Logo from '../../assets/logo.png';

// import { Container } from './styles';

function NavBar() {
  const { SignOut } = useAuth();
  const history = useHistory();

  const items = [
    {
      link: '/home',
      icon: <FiHome />
    },
    {
      link: '/create-products',
      icon: <FiBriefcase />
    },
  ]

  const handleClick = async () => {
    await SignOut();
    history.push("/")
  }

  return (
    <Styled.NavBar>
      <Styled.Logo src={Logo} />
      <Styled.NavArea>
        {items.map((item, key) => (
          <Styled.NavItem key={key} to={item.link}>
            {item.icon}
          </Styled.NavItem>
        ))}
        <Styled.NavButton onClick={handleClick}>
          <FiLogOut />
        </Styled.NavButton>
      </Styled.NavArea>
    </Styled.NavBar>
  );
}

export default NavBar;