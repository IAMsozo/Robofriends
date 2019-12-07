import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div className='ma3'>
           {
            robots.map((users, i) => {
                return (<Card key={i} name={users.name} id={users.id} email = {users.email} />)
            })
            }
        </div>
        );

}

export default CardList;
