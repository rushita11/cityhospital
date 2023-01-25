import React from 'react';
import MedicineModal from '../MedicineModal';



function Medicins(props) {
    const [open,setOpen] = React.useState(false)
    // const openModal = ()=>{

    // }
    return (
        <>
        <div className='Text d-flex justify-content-between'>
            <h1>Medicine</h1>
            <div className="text-end"><button className='appointment-btn border-0 m-0 ' onClick={()=>setOpen(true)}>Open Modal</button>
            <MedicineModal 
                open={open}
                handleClose={()=>setOpen(false)}
            /></div>
            </div>
        </>
    );
}

export default Medicins;