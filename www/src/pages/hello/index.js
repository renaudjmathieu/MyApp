import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello/index.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}