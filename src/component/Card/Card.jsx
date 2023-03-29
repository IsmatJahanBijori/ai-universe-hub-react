import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleCard from '../SingleCard/SingleCard';



const Card = () => {
    const [card, setCard] = useState([]);
    const [showAll, setShowAll] = useState(false)
    const [uniqueId, setUniqueId] = useState(null)
    const [singleData, setSingleData] = useState({})

    // console.log(uniqueId)
    const handleShowAll = () => {
        setShowAll(true)
    }

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setCard(data.data.tools))
    }, []);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [uniqueId]);
    // console.log(singleData)
    // console.log(data.data.tools)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                card.slice(0, showAll ? 12 : 6).map((singleCard) => <SingleCard singleCard={singleCard} key={singleCard.id} setUniqueId={setUniqueId}></SingleCard>)
            }
            {(!showAll) && <span onClick={handleShowAll}>
                <Button>See More</Button></span>}
            <Modal singleData={singleData}></Modal>
        </div>
    );
};

// showall jodi false hoy, mane false set kora ache taile hobe (true)=6
// showall jodi true hoy, mane false set kora ache taile hobe (false)=12
export default Card;