import React from 'react';
import MedicineModal from '../MedicineModal';



function Medicins(props) {
    const [open,setOpen] = React.useState(false)
    const openModal = ()=>{

    }
    return (
        <div>
            <h1>Medicine</h1>
            <div className="text-end"><button className='appointment-btn mt-3 border-0' onClick={()=>setOpen(true)}>Open Modal</button></div>
            <MedicineModal 
                open={open}
                handleClose={()=>setOpen(false)}
            />
        </div>
    );
}

export default Medicins;