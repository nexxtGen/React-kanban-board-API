import React from 'react';
import Column from './Column';

const divStyle = {
    display: 'flex',
    flexDirection: 'row',    
    width: '80%',
    margin: '0',
    padding: '0'
};

const ColumnList = props => {    
    return (

        <div style={divStyle}>            
            {props.columns.map((item) => { 
                return (                        
                    <Column key={item.id} column={item}/>                        
                );                
            })}
        </div> 
    );   
}

export default ColumnList;