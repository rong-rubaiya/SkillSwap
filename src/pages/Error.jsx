// SimpleErrorPage.jsx
import React from 'react';
import { Link } from 'react-router';

const SimpleErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-6xl mb-4">😢 404</h1>
      <h2 className="text-2xl mb-2">Oops! Page not found.</h2>
      <p className="mb-6 text-center max-w-sm">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bgpastecolor "
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default SimpleErrorPage;
