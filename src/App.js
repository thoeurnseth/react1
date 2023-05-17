import 'bootstrap/dist/css/bootstrap.css';
import  logo      from './logo.svg';
import  Container from 'react-bootstrap/Container';
import  Table     from 'react-bootstrap/Table';
import  Nav       from 'react-bootstrap/Nav';
import  Navbar    from 'react-bootstrap/Navbar';
import  {Link}    from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import  Header    from './page/header';
import  Footer    from './page/footer';
import Update from './crud/update';
import Delete from './crud/delete';
import './App.css';
import userEvent from '@testing-library/user-event';
import { useSyncExternalStore } from 'react';

function App() {
  const id = 1;
  const id2 = 2;
  return (
    <div className="App">
        <Header></Header>
        <div className='mt-5 mb-5'> 
          <Container>
          <div className='wrapper-data'>
            <h2>Data List</h2>
            <div className='create'>
              <Button variant="danger"><Link to="/create">+ Create</Link></Button>{' '}
            </div>
          </div>

          <Table striped bordered hover className='mt-5'>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {users.map((user,index)=>(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.username}</td>
                    <td>
                      <Button variant="warning">Edit</Button>{' '}
                      <Button variant="danger">Delete</Button>{' '}
                    </td>
                </tr>
              ))
              } */}

                <tr>
                    <td>1</td>
                    <td>van</td>
                    <td>da</td>
                    <td>vanda</td>
                    <td className='update'>
                      <Button variant="warning"><Link to={`/Update/${id}`}>Edit</Link></Button>{' '}
                      <Button variant="danger"><Link to={`/Delete/${id}`}>Delete</Link></Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>van</td>
                    <td>da</td>
                    <td>vanda</td>
                    <td className='update'>
                      <Button variant="warning"><Link to={`/Update/${id2}`}>Edit</Link></Button>{' '}
                      <Button variant="danger"><Link to={`/Delete/${id2}`}>Delete</Link></Button>{' '}
                    </td>
                </tr>
            </tbody>
          </Table>
          </Container>
        </div>
        <Footer></Footer>
    </div>  
  );
}

export default App;
