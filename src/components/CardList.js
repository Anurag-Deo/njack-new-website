import React, { useEffect, useState } from 'react';

const Card = ({ name, mobNo, description }) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{mobNo}</p>
            <p>{description}</p>
        </div>
    );
};

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/notion');
                const data = await response.json();

                // setCards(data);
                // console.log('data', data);
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default CardList;
