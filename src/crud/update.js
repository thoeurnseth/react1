import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../page/header';
import Footer from '../page/footer';
import {useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

function Update(){

    const {id} = useParams();

    return(
        <div className="Update">
            <Header/>
            <div className='mt-5 mb-5'> 
                <Container>
                    <div>Update</div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Update;