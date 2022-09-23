import React from 'react';

const Modal = (props) => {
    console.log(props.modalData);
    const {name, price, capacity} = props.modalData;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label onClick={()=>props.setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="py-4">Price: ${price?price:"Not Found"}</p>
                <p className="py-4">Capacity: {capacity?capacity: "Not Found"}</p>
            </div>
            </div>
        </div>
    );
};

export default Modal;