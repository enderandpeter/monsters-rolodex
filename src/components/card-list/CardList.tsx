import React from 'react';
import {Monster} from '../../App';
import {Card} from '../card/Card';

import './card-list.styles.css';

export interface CardListProps {
    monsters: Monster[];
}

export const CardList: React.FC<CardListProps> = ({monsters}) => {
    return (
        <div className='card-list'>
            {
                monsters.length ?
                    monsters.map((monster: Monster) => (
                        <Card key={monster.id} monster={monster}/>
                    ))
                    :
                    'Please wait...'
            }
        </div>
    );
}