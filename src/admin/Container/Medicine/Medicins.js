import React, { useEffect, useState } from 'react';
import MedicineModal from '../MedicineModal';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import * as yup from 'yup';


function Medicins(props) {
    const [medData, setMedData] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
    ];

    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name").matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40).required(),
        price: yup.string().required("price is required"),
        quantity: yup.string().required("quantity is required"),

    });


    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));
        if (localData !== null) {
            setMedData(localData);
        }
    }, [])


    const storeMeddata = (values) => {

        let localData = JSON.parse(localStorage.getItem("medicine"));
        let idData = Math.round(Math.random() * 1000);
        let data = { ...values, id: idData };
        console.log(localData);

        if (localData !== null) {
            localData.push(data);
            localStorage.setItem("medicine", JSON.stringify(localData))
            // save data into state
            setMedData(localData);
        } else {
            localStorage.setItem("medicine", JSON.stringify([data]));
            // save data into state
            setMedData(data);
        }
    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            storeMeddata(values);
        },
    });


    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, touched } = formikObj;
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <div className='Text d-flex justify-content-between'>
                <h1>Medicine</h1>
                <div className="text-end"><button className='appointment-btn border-0 m-0 ' onClick={() => setOpen(true)}>Open Modal</button>

                    <Dialog open={open} onClose={handleClose}>
                        <Formik values={formikObj}>
                            <Form className="php-email-form" onSubmit={handleSubmit}>

                                <DialogTitle>Add Medicine</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="Enter Medicine Name"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={e => {
                                            setFieldTouched('name')
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    {errors !== '' && touched.name ? <span>{errors.name}</span> : null}
                                    <TextField
                                        margin="dense"
                                        id="price"
                                        label="Enter Price"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={e => {
                                            setFieldTouched('price')
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    {errors !== '' && touched.name ? <span>{errors.price}</span> : null}
                                    <TextField
                                        margin="dense"
                                        id="quantity"
                                        label="Enter Quantity"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        onChange={e => {
                                            setFieldTouched('quantity')
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    {errors !== '' && touched.quantity ? <span>{errors.quantity}</span> : null}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>Submit</Button>
                                </DialogActions>

                            </Form>
                        </Formik>
                    </Dialog>
                    {/* </Modal> */}

                </div>

            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={medData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    );
}

export default Medicins;