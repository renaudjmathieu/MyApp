import React, { useState, useEffect } from 'react';
import {useLocation} from '@docusaurus/router';

function Auth() {
  const providers = ['twitter', 'github', 'aad'];
  const location = useLocation();
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
      {userInfo && (
        <div>
          <button class="button button--outline button--primary">{userInfo && userInfo.userDetails} ({userInfo && userInfo.identityProvider})</button>
        </div>
      )}
      {!userInfo && (
        <div>
          <button class="button button--primary">Sign in</button>
        </div>
      )}
      <ul class="dropdown__menu">
          {!userInfo &&
            providers.map((provider) => (
              <li><a class="dropdown__link" key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${location.pathname}`}>
                {provider}
              </a></li>
            ))}
          {userInfo && <a href={`/.auth/logout?post_logout_redirect_uri=${location.pathname}`}>Logout</a>}
      </ul>
    </div>
  );
}
export default Auth;
