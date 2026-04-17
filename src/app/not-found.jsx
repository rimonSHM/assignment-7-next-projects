// not found page 

import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className='h-screen bg-purple-100 flex-col flex items-center justify-center font-bold text-5x1 text-black'>
            This page is not Found!
            <Link href="/">
           <button className="btn btn-success">Back to Home</button>
              </Link>
        </div>
    );
};

export default NotFoundPage;