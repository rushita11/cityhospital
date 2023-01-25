import { CloseOutlined } from '@mui/icons-material';
import { Box, Modal, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react'


const MedicineModal = ({ open, handleClose }) => {
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
                        <form method="post" role="form" className="php-email-form" >
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
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
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email" id="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="mobile" id="number"
                                        placeholder="Your contact"
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="radio"
                                        name="gender"
                                    /> Male
                                    <input
                                        type="radio"
                                        className='ms-3'
                                        name="gender"

                                    /> Female
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                            </div>
                        </form>
                        <div className="text-center "><button type='submit' className='appointment-btn mt-3 border-0' >Save</button></div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default MedicineModal