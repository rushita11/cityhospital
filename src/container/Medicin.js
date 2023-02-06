import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../Component/List/List';



function Medicin(props) {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState()
    // const [users, setUsers] = useState([
    //     { id: 1, name: "One" },
    //     { id: 2, name: "Two" },
    //     { id: 3, name: "Three" }
    // ]);
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData !== null) {
            setData(localData)
            console.log(setData)
        }
    }, []);

    const handlefilter = (val) => {
        if (val !== '') {
            let fData = data.filter((d) => (
                d.name.toLowerCase().includes(val.toLowerCase()) ||
                d.price.toString().includes(val)
            ))
            setFilterData(fData)

        } else {
            setFilterData()
        }
    }

    let finalData = filterData ? filterData : data;

    const sorting = (e) => {

        const sortDirection = e.target.value;
        // console.log(sortDirection);
        const copyArray = [...data];
        console.log(copyArray);
        copyArray.sort((a, b) => {
            // return sortDirection === "0" ? a.price - b.price : b.price - a.price;
            if (sortDirection === "0") {
                return a.price - b.price;
            } else if (sortDirection === "1") {
                // alert("")
                return b.price - a.price;
            } else if (sortDirection === "2") {
                // alert("2")
                // alert("")
               let p =  a.name.localeCompare(b.name);
               console.log("hii");
                // alert("1")
                //    if (val === "name") {
                //     return a.name.localeCompare(b.name)
            }
            

            console.log(sortDirection);
        });
        setData(copyArray);
    }


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
                    <div className="d-flex gap-5 mt-3" >
                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Sorting</InputLabel> */}
                            <select defaultValue={0} onChange={sorting}>
                                <option value={1}>High to Low</option>
                                <option value={0}>Low to High</option>
                                <option value={2}>A to Z</option>
                                <option value={3}>Z to A</option>
                            </select>
                        </FormControl>

                        <input
                            type={"text"}
                            name="search"
                            placeholder='Seach...'
                            onChange={(e) => handlefilter(e.target.value)}
                        />

                    </div>
                    {/* {finalData.map((finalData) => (

                        <div key={finalData.price}>
                            {finalData.name} - {finalData.price}
                        </div>
                    ))} */}
                    <List listdata={finalData} />

                </div>
            </section>
        </>
    );
}

export default Medicin;