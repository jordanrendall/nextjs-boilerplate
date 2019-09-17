import React from 'react';
import Link from 'next/link';

const indexPage = () => {
  return (
    <div>
      <h1>NextJS is set up!</h1>
      <Link href='/page2'>
        <a>Go To Page 2</a>
      </Link>
    </div>
  );
};

export default indexPage;
