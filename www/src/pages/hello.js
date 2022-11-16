import React, { useState, useEffect } from 'react';

export default function Hello() {
  const [data, setData] = useState('');
  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });
  return (
    <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          {data}
        </p>
      </div>
  );
}