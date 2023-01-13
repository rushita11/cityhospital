import React from 'react';
import List from '../Component/List/List';
const data = [
    {
        id: 101,
        name: "ABC",
        price: 1200,
        qty:100,
        // image: "../assets/img/doctors/doctors-1.jpg"
    },
    {
        id: 102,
        name: "BCS",
        price: 120,
        qty: 200,
        // image: "../assets/img/doctors/doctors-1.jpg"
    }
]

function Medicin(props) {
    return (
        <>
  <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title">
          <h2>Medicin</h2>
          <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
        </div>
     
        <List listdata={data} />
      </div>
    </section>
        </>
    );
}

export default Medicin;