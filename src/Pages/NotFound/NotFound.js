import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-8xl font-bold mb-10">404!</h1>
      <h1 className='text-2xl font-bold'>Error-Something's missing</h1>
      <p className="py-6">Sorry, the page you are looking for could not be found. Kindly do one thing: if you've typed the URL manually, double check the spelling.Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
      <Link to={'/'} className="btn btn-primary">Go To Homepage</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default NotFound;