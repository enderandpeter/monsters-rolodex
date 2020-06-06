import React, {ChangeEvent} from 'react';

import './search-box.styles.css';

interface SearchBoxProps {
    placeholder: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox:React.FC<SearchBoxProps> = ({placeholder, handleChange}) => {
    return (
        <input
            className={'search'}
            type={'search'}
            placeholder={placeholder} onChange={handleChange}/>
    );
}