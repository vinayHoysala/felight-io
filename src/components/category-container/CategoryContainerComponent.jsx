import React, { Component } from 'react';
import CategoryItem from '../category-item/category-item.component';
import './category-container.styles.scss';

class CategoryContainerComponent extends Component {
    constructor(){
        super();
        this.state = {
            courseCategories : [
              ]
        };
    }

    componentDidMount(){
      fetch('https://myfelight.firebaseapp.com/course-category.json')
        .then(response=>response.json())
        .then(items => this.setState({courseCategories:items}));
    }

    render(){
        return(
            <div className='categories-container'>
            {   
                this.state.courseCategories.map(({id,title,imageUrl})=>(
                            <CategoryItem   key={id} 
                                            title={title} 
                                            imageUrl={imageUrl} />))
            } 
            </div>
        );
    }
}

export default CategoryContainerComponent;





