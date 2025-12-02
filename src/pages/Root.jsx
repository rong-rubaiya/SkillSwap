import React from 'react';
import Home from './Home';
import Nav from '../component/Nav';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

function Root() {
  return (
     <div>
      <header>
        <Nav></Nav>
      </header>

      <main className=''>
    <Outlet></Outlet>
      </main>

      <footer>
        <Footer/>
      </footer>

      
    </div>
  );
}

export default Root;