import React from 'react';

const Modal = (props) => {
    const {image_link, description, integrations, features } = props.singleData
    console.log(integrations)
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{description ? description : "Not found"}</h2>

                            <div className='flex justify-between'>
                            <div>
                            <h3 className='text-xl font-semibold'>Features</h3>
                            {
                                Object.values(features || {}).map(feature=> <li>{feature.feature_name}</li>)
                            }
                            </div>
                            <div>
                            <h3 className='text-xl font-semibold'>Integration</h3>
                            </div>
                            </div>
                        </div>
                        <div>
                        <figure className='w-full'><img className='w-full h-96' src={image_link && image_link[0]} alt="Album" /></figure></div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;