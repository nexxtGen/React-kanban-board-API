import React from 'react';
import style from './Column.css';
//import style from './TodoForm.css';

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: ''
        };        
    }  

    render() {
        return (
            <div className={style.column_template}>
                <div className={style.container}>
                    <div className={style.t_form}>
                        <button className="btn-delete t-header__btn-head">remove column</button>     
                        <h2 className={style.column_title}>{this.props.column.name}</h2>                        
                        <button className="add-card">Add a card</button>                                               
                        <ul id={this.props.id} className={style.column_card_list}>
                            
                        </ul>                             
                    </div>
                </div>
            </div>
        )
    }
};

export default Column;