import React from 'react';
import './homepage.styles.scss';
import CategoryContainerComponent from './components/category-container/CategoryContainerComponent';

const HomePage = () =>(
    <div className='homepage'>
        <CategoryContainerComponent />
    </div>
)

export default HomePage; 