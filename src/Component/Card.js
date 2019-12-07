import React from 'react';

const Card = ({id, name, email}) => {
    return(
        <div className="tc dib grow shadow-5 br3 bw5 pa3 ma2 bg-light-green">
            <img alt="robofriend" src= {`https://www.robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default Card;
