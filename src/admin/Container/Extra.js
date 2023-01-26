import { CloseOutlined } from '@mui/icons-material';
import { Box, Modal, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';



const MedicineModal = ({ open, handleClose }) => {
    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name").matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40).min(2)
            .required(),
        price: yup.string().required("price is required"),
        quantity: yup.string().required("quantity is required"),
       
    });
    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity:''
        },
        validationSchema: schema,
        onSubmit: values => {
        },
    });

    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, touched } = formikObj;
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    <div className='closeIcon'><CloseOutlined onClick={handleClose} /></div>

                    <div className='Signup_form'>
                        <Formik values={formikObj}>
                            <Form className="php-email-form" onSubmit={handleSubmit}>

                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <div className="form-group ">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Medicine Name"
                                                onChange={e => {
                                                    setFieldTouched('name')
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.name ? <span>{errors.name}</span> : null}
                                        </div>
                                        {/* <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="medicine"
                                            placeholder="Medicine Name"
                                        />
                                        <TextField
                                            error
                                            id="outlined-error"
                                            label="Error"
                                            defaultValue="Name"
                                        /> */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                name="price"
                                                className="form-control"
                                                id="price"
                                                placeholder="Price"
                                                onChange={e => {
                                                    setFieldTouched('price')
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.price ? <span>{errors.price}</span> : null}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            name="quantity"
                                            className="form-control"
                                            id="quantity"
                                            placeholder="Quantity"
                                            onChange={e => {
                                                setFieldTouched('quantity')
                                                handleChange(e)
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        {errors !== '' && touched.quantity ? <span>{errors.quantity}</span> : null}
                                    </div>
                                </div>
                               
                                <div className="text-center "><button type='submit' className='appointment-btn mt-3 border-0' >Save</button></div>
                            </Form>
                        </Formik>

                    </div>
                </Box>

                <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
            </Modal>
        </div>
    )
}

export default MedicineModal