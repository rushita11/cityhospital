import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../Component/List/List';


function Medicin(props) {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState()

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData !== null) {
            setData(localData)
        }
    }, []);

    // const handlefilter = (value) => {
    //     let fData = data.filter((d) =>
    //         (d.name.toLowerCase() === value.toLowerCase())
    //     )
    //     console.log(fData)
    //     if(fData.length > 0){
    //         setData(fData);
    //         console.log(setData(fData))
    //     }
    //     else{
    //         setData(data);
    //     }
    //     // let finalData = fData.length > 0 ? setData(fData): setData(data);
    //     // console.log(fData)
    //     // setData(fData);
    // }
    const handlefilter = (val) => {
        if (val !== '') {
            let fData = data.filter((d) =>(
                d.name.toLowerCase().includes(val.toLowerCase()) || 
                d.price.toString().includes(val)
            ))
            setFilterData(fData)

        } else {
            setFilterData()
        }
    }

    let finalData = filterData ? filterData : data;


    console.log(finalData);

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

                    {/* <input
                        type={'text'}
                        name="search"
                        placeholder='Search....'
                        onChange={(e) => handleFilter(e.target.value)}
                    /> */}
                    <input
                        type={"text"}
                        name="search"
                        placeholder='Seach...'
                        onChange={(e) => handlefilter(e.target.value)}
                    />

                    <List listdata={finalData} />

                </div>
            </section>
        </>
    );
}

export default Medicin;