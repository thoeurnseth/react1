import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../page/header';
import Footer from '../page/footer';
import {useParams} from "react-router-dom";
import '../page/style.css'

function Delete(){  

    const {id} = useParams();
    return(
        <div className="Delete">
            <Header/>
            <div className='mt-5 mb-5'> 
                <Container>
                    <div>Delete</div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Delete;