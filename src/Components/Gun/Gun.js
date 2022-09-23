import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Gun = (props) => {
    const [modalData, setModalData] = useState({});
    // console.log(modalData);
    const {name, action, category, bullet, img, price} = props.gun;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure>
                    <img className='w-96 h-56' src={img} alt="Gun" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <div className="badge badge-outline">{action}</div> 
                    <div className="badge badge-outline mb-3">{bullet}</div>
                    <div>
                        <button onClick={()=> props.countIncrease(price)} className="btn btn-sm btn-warning mr-2">Add to Cart</button>
                        {/* <button className="btn btn-sm btn-info">Details</button> */}
                        <label onClick={() => setModalData(props.gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm btn-success">Details</label>
                    </div>
                    </div>
                </div>
            </div>
            {
                modalData &&
                (<Modal modalData={modalData} setModalData={setModalData}></Modal>)
            }
        </div>
    );
};

export default Gun;