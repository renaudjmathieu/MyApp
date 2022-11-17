import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Auth = (props) => {
  const providers = ['twitter', 'github', 'aad'];
  const redirect = window.location.pathname;
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }
  
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">{userInfo ? `${userInfo.userDetails} (${userInfo.identityProvider})` : `Sign in`}</Dropdown.Toggle>
      <Dropdown.Menu>
        {!userInfo &&
          providers.map((provider) => (
            <Dropdown.Item key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}>
              {provider}
            </Dropdown.Item>
          ))}
        {userInfo && <Dropdown.Item href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>Logout</Dropdown.Item>}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Auth;