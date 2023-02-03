import React, { useEffect, useState } from 'react';
import MedicineModal from '../MedicineModal';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Form, Formik, useFormik } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid'
import * as yup from 'yup';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { DateRange } from '@mui/icons-material';


function Doctor(props) {
    const [medData, setData] = useState([])
    const [Dopen, setDOpen] = React.useState(false);
    const [dId, setDId] = useState();
    const [Eid, setEid] = useState();
    const [open, setOpen] = React.useState(false)


    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("doctor"));
        if (localData !== null) {
            setData(localData);
        }
    }, [])

    const handleDelete = () => {
        let localData = JSON.parse(localStorage.getItem("doctor"));
        let deData = localData.filter((l) => l.id !== dId)
        localStorage.setItem("doctor", JSON.stringify(deData));
        setData(deData);
        handleDClose();
        setDId();
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'mobile', headerName: 'Number', width: 130 },
        { field: 'experience', headerName: 'Experience', width: 130 },
        {
            field: 'action',
            headerName: 'action',
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => { setDId(params.row.id); setDOpen(true) }} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={() => { handleUpdate(params.row) }} aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name").matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40).required(),
        // gender: yup.string().required("price is required"),
        experience: yup.string().required("quantity is required"),
        gender: yup.string().required('Please select gender'),
        mobile: yup.string().required("").test("mobile", "Phone number is not valid", value => {
            if (value)
                return value.toString().length === 10
        }),

    });


    const storedata = (values) => {

        let localData = JSON.parse(localStorage.getItem("doctor"));
        let idData = Math.round(Math.random() * 1000);
        let data = { ...values, id: idData };
        // console.log(localData);

        if (localData !== null) {
            localData.push(data);
            localStorage.setItem("doctor", JSON.stringify(localData))
            // save data into state
            setData(localData);
        } else {
            localStorage.setItem("doctor", JSON.stringify([data]));
            // save data into state
            setData(data);
        }
    }
    const handleUpdateData = (values) => {
        let localData = JSON.parse(localStorage.getItem("doctor"));
        let updateData = localData.map((l) => {
            if (l.id === values.id) {
                return values;
            } else {
                return l;
            }
        })
        localStorage.setItem("doctor", JSON.stringify(updateData));
        setData(updateData);
        handleDClose();
        setEid();
        formikObj.resetForm();
        // console.log(setEid());

    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            experience: '',
            gender: '',
            mobile: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            {
                if (Eid) {
                    handleUpdateData(values);
                } else {
                    alert("")
                    storedata(values);
                }
            }

            setOpen(false);
        },
    });

    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, values, touched, setValues } = formikObj;

    const handleUpdate = (values) => {
        setEid(values);
        // console.log(values)
        setOpen(true);
        setValues(values);

    }
    const handleClose = () => {
        alert("close")
        setOpen(false);
    };

    const handleDClose = () => {
        setDOpen(false);
    };

    return (
        <>
            <Dialog
                open={Dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure Delete the Data?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDClose}>Disagree</Button>
                    <Button onClick={() => handleDelete()} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <div className='Text d-flex justify-content-between'>
                <h1>doctor</h1>
                <div className="text-end"><button className='appointment-btn border-0 m-0 ' onClick={() => setOpen(true)}>Modal</button>

                    <Dialog open={open} onClose={handleClose}>
                        <Formik values={formikObj}>
                            <Form className="php-email-form" onSubmit={handleSubmit}>
                                {
                                    Eid ? <DialogTitle>Update detail</DialogTitle> : <DialogTitle>Add detail</DialogTitle>
                                }
                                <DialogContent>
                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="Enter Your Name"
                                        type="text"
                                        fullWidth
                                        value={values.name}
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
                                        id="mobile"
                                        label="Enter Contact Number"
                                        type="text"
                                        fullWidth
                                        value={values.mobile}
                                        variant="standard"
                                        onChange={e => {
                                            setFieldTouched('mobile')
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    {errors !== '' && touched.mobile ? <span>{errors.mobile}</span> : null}
                                    <TextField
                                        margin="dense"
                                        id="experience"
                                        label="Enter experience"
                                        type="text"
                                        value={values.experience}
                                        fullWidth
                                        variant="standard"
                                        onChange={e => {
                                            setFieldTouched('experience')
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    {errors !== '' && touched.price ? <span>{errors.price}</span> : null}
                                    {/* <TextField
                                        margin="dense"
                                        name="quantity"
                                        label="Enter experience"
                                        type="number"
                                        value={values.quantity}
                                        fullWidth
                                        variant="standard"
                                        onChange={e => {
                                            setFieldTouched('quantity')
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    {errors !== '' && touched.quantity ? <span>{errors.quantity}</span> : null} */}
                                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" />
                                    </RadioGroup> */}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    {
                                        Eid ? <Button type='submit'>Update</Button> : <Button type='submit'>Submit</Button>
                                    }

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

export default Doctor;