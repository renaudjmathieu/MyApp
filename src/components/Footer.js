import React, { useState, useEffect } from 'react';

const Footer = ({
  label,
  className,
  iconClasses,
  onClick,
  dataIndex,
  dataId,
}) => {

  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });
  
  return (
    <footer className="App-footer">
    <p>
      {data}
    </p>
  </footer>
  );
};

export default Footer;
