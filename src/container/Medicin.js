import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../Component/List/List';


function Medicin(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData !== null) {
            setData(localData)
        }
    }, [])

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