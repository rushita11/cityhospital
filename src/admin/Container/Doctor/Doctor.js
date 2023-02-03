// import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Form, Formik, useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useState, } from 'react';
import { Button } from 'reactstrap';
import * as yup from 'yup';



function Doctor(props) {
    const [open, setOpen] = useState(false);
    const [medData, setMeddata] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("doctor"));
        if (localData !== null) {
            setMeddata(localData);
        }
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'ID', width: 70 },
        { field: 'email', headerName: 'First name', width: 130 },
        { field: 'experience', headerName: 'Last name', width: 130 },
        {
            field: 'action',
            headerName: 'action',
            renderCell: (params) => {
                return (
                    <>
                        {/* <IconButton onClick={() => { setDId(params.row.id); setDOpen(true) }} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={() => { handleUpdate(params.row) }} aria-label="delete">
                            <EditIcon />
                        </IconButton> */}
                    </>
                )
            }
        }

    ];

   

    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name").matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40).required(),
        email: yup.string().required().email(),
        experience: yup.string().required("").matches(/^[0-9\b]+$/, 'please enter valid Experience'),
    });

    const storeMeddata = (data) => {
        alert("")
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("doctor"));
        if (localData !== null) {
            localData.push(data);
            localStorage.setItem("doctor", JSON.stringify(localData))
            setMeddata(localData);
        } else {
            localStorage.setItem("doctor", JSON.stringify([data]));
            setMeddata(localData);
        }
    }
    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            experience: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
            storeMeddata(values);
            setOpen(false);
        },
    });

    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, values, touched, setValues } = formikObj;
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <div className='Text d-flex justify-content-between align-items-center'>
                <h1>Doctor</h1>
                <div className="text-end w-100">
                    <button className='appointment-btn border-0 m-0 ' onClick={() => setOpen(true)}>Open Modal</button>
                </div>

                <Dialog open={open} onClose={handleClose}>
                    <Formik values={formikObj}>
                        <Form className="php-email-form" onSubmit={handleSubmit}>
                            <DialogTitle>Subscribe</DialogTitle>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Doctor Name"
                                    type="name"
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
                                    id="email"
                                    name="email"
                                    label="Email Id"
                                    type="name"
                                    fullWidth
                                    variant="standard"
                                    onChange={e => {
                                        setFieldTouched('email')
                                        handleChange(e)
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors !== '' && touched.email ? <span>{errors.email}</span> : null}
                                <TextField
                                    margin="dense"
                                    id="experience"
                                    name="experience"
                                    label="Experience"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={e => {
                                        setFieldTouched('experience')
                                        handleChange(e)
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors !== '' && touched.experience ? <span>{errors.experience}</span> : null}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit" >Submitt</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>

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
        </div>
    );
}

export default Doctor;