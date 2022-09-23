import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Gun from '../Gun/Gun';

const AllGun = ({countIncrease}) => {
    const reRender = useRef(true);
    const [guns, setGuns] = useState([]);
    useEffect(() =>{
        if(reRender.current){
            reRender.current = false;
            fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
        }
    },[])
    return (
        <div className='w-[90%] mx-auto'>
            <div className='text-center my-5'>
                <h1 className='text-4xl mb-3'>Welcome to Gun Shop</h1>
                <p>You can buy the Gun for your security purpose.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    guns.map(gun => <Gun gun={gun} countIncrease={countIncrease} key={gun.id}></Gun>)
                }
            </div>
        </div>
    );
};

export default AllGun;