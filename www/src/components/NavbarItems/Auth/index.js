import React, { useState, useEffect } from 'react';

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
    <div class="dropdown dropdown--hoverable">
      <button class="button button--primary">Authentification</button>
      <ul class="dropdown__menu">
          {!userInfo &&
            providers.map((provider) => (
              <li><a class="dropdown__link" key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}>
                {provider}
              </a></li>
            ))}
          {userInfo && <a href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>Logout</a>}
      </ul>
      {userInfo && (
        <div>
          Welcome {userInfo && userInfo.userDetails} ({userInfo && userInfo.identityProvider})
        </div>
      )}
    </div>
  );
};

export default Auth;