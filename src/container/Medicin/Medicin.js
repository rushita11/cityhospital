import React from 'react';
import List from '../../Component/List/List';
const data =[
    {
        id:101,
        name:"ABC",
        price:120,
        qty: 100
    },
    {
        id:102,
        name:"BCS",
        price:300,
        qty:200
    },
    {
        id:103,
        name:"DEF",
        price:400,
        qty:400
    },
    {
        id:104,
        name:"DEF",
        price:400,
        qty:400
    },
    {
        id:105,
        name:"DEF",
        price:400,
        qty:400
    }
]

function Medicin(props) {
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Medicines</h2>
                </div>
               <List listdata={data}/>
            </div>
        </section>
    );
}

export default Medicin;