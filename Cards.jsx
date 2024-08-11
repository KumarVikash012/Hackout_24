import React from 'react';

function Cards({ img_url, setSelectedtab }) {
    return (
        <div className="card cards-main" style={{ width: '15rem', height: '20rem' }} onClick={() => setSelectedtab("Fertilizers")}>
            <img src={img_url} alt="image" style={{ width: '100%', height: '100%' }} />
        </div>
    );
}

export default Cards;
