import React, { useState, useEffect, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap'; // Import Col from 'react-bootstrap'
import axios from 'axios';

const CRUD = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const[code, setCode] = useState('')
    const[name, setName] = useState('')
    const[regionImageUrl, setRegionImageUrl] = useState('')
   

    const[editcode, setEditCode] = useState('')
    const[editname, setEditName] = useState('')
    const[editregionImageUrl, setEditRegionImageUrl] = useState('')

    // const regionData = [
    //     {
    //         id: 'guid1', // Example GUID
    //         Code: 'BOP',
    //         Name: 'Bay Of Plenty',
    //         RegionImageUrl: 'image1.png'
    //     },
    //     {
    //         id: 'guid2', // Example GUID
    //         Code: 'NTL',
    //         Name: 'Northland',
    //         RegionImageUrl: 'image2.png'
    //     },
    // ];

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () =>{
        axios.get('https://localhost:7051/api/Regions')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    
    const handleEdit = (id) => {
        // alert(id);
        handleShow();

    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this region") === true) {
            alert(id);
        }
    }

    const handleUpdate = () => {
        // Implement your update logic here
        handleClose(); // Close the modal after updating
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <input type='text' className='form-control' placeholder='Enter Code'
                        value={code} onChange={(e)=> setCode(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <input type='text' className='form-control' placeholder='Enter Name'
                        value={name} onChange={(e)=> setName(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <input type='text' className='form-control' placeholder='Enter RegionImageUrl' 
                        value={regionImageUrl} onChange={(e)=> setRegionImageUrl(e.target.value)}
                        
                        />
                    </Col>
                    <Col>
                        <button className='btn btn-primary'>Submit</button>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>RegionImageUrl</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index +1}</td> {/* Corrected */}
                                        <td>{item.id}</td>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.regionImageUrl}</td>
                                        <td colSpan={2}>
                                            <button className='btn btn-primary' onClick={() => handleEdit(item.id)} >Edit</button> &nbsp;
                                            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify / Update Region</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                    <Col>
                        <input type='text' className='form-control' placeholder='Enter Code'
                        value={editcode} onChange={(e)=> setEditCode(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <input type='text' className='form-control' placeholder='Enter Name'
                        value={editname} onChange={(e)=> setEditName(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <input type='text' className='form-control' placeholder='Enter RegionImageUrl' 
                        value={editregionImageUrl} onChange={(e)=> setEditRegionImageUrl(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <button className='btn btn-primary'>Submit</button>
                    </Col>
                </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default CRUD;
