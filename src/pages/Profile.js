import React from 'react';
import { useParams } from 'react-router-dom';

function Profile(){
  let { userId } = useParams();
  return (
    <div>
      <p>The id of this user is { userId }</p>
    </div>
  )
}

export default Profile;