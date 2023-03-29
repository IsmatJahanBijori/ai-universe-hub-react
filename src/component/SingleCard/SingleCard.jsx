import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    // console.log(props)
    const { id, image, features, name, published_in } = props.singleCard
    const setUniqueId=props.setUniqueId

    // const setUniqueId=()=>{
    //     console.log(id)
    // }
    return (
        <div className="card w-96 bg-base-100 mx-20 mb-16 mt-10 shadow-2xl " style={{border: "1px solid #159895"}}>
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="card-body">
                <h3 className='text-2xl font-semibold ml-2 my-5'>Features</h3>
                {
                    features.map((feature, index) => <p className='ml-3'>{index+1}. {feature}
                    </p>)
                }
                <hr className='my-2' />
                <h2 className='ml-2 text-2xl font-semibold'>{name}</h2>
                <div className="flex justify-between mt-3">
                <p><FontAwesomeIcon icon={faCalendar}/> {published_in}</p>
                <label onClick={()=>setUniqueId(id)} htmlFor="my-modal-5" className='cursor-pointer'><FontAwesomeIcon icon={faArrowRight}/></label></div>
            </div>
        </div>
    );
};

export default SingleCard;

// <div className='single-card w-96 mx-28 mb-16 mt-10 rounded-md'>
//             <img src={image} alt="" />
//             <div className='ml-3'>
//             <h2 className='text-2xl font-semibold my-5'>Features:</h2>
//             {
//                 features.map(feature=><li>{feature}</li>)
//             }
//             <h2 className='text-2xl font-semibold'>{name}</h2>
//             <p>  <FontAwesomeIcon icon={faCalendar}/>
//             {published_in}</p></div>
//         </div>