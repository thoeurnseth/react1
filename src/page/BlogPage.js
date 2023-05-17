import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header';
import Footer from './footer';
import './style.css';
// import {useState, useState} from 'react'

function BlogPage(){



    return(
        <div className="BlogPage">
    	    <Header/>
            <div className='mt-5 mb-5'> 
                <Container>
                     <div>Blog Page</div>
                </Container>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default BlogPage;