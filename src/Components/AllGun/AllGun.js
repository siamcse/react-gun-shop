import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllGun = () => {
    const [guns, setGuns] = useState([]);
    console.log(guns);
    useEffect(() =>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res => res.json())
        .then(data => setGuns(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllGun;