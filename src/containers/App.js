import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import { hot } from 'react-hot-loader';
import moment from 'moment';

import ColumnList from '../components/ColumnList'

class KanbanApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myHeaders: {
                'X-Client-Id': '3519',
                'X-Auth-Token': '24c31d181777d61db46ede0c65399590' 
            },
            baseUrl: 'https://kodilla.com/pl/bootcamp-api',
            columns: [{
                id: 0,
                name: '',
                cards: [{
                    id: 0,
                    bootcamp_kanban_column_id: 0,
                    name: ''
                }]                
            }],            
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchBoard();
    }
    //metody
    //Download data from REST API and set state in react container
    fetchBoard() {
        fetch(this.state.baseUrl + '/board', { headers: this.state.myHeaders }) //ADD v2
            .then(function(resp) {
                return resp.json();
            })
            .then(resp => {
                this.setState({
                    columns: resp.columns
                })
                console.log('state columns por fetchu', this.state.columns)
        });
    }  

    promptF(){ 
        const name = prompt("Enter text kurwaaa");
        console.log(name);
        //return name;        
    }

    //render
    render() {
        //const { isLoading, users, error } = this.state;
        return (            
            
            <div className={style.board}>
                <div className={style.header_hero}>
                    <div className={style.hero_content}>
                        <h1 className={style.hero_h1}>Kanban board API</h1>
                        <button className={style.create_column_btn} onClick={() => this.promptF()}>Add a column</button>             
                    </div>  
                </div> 
                <div className={style.column_container}> 
                    <ColumnList columns={this.state.columns}/>                
                </div>
            </div>   
        )
    }
}

export default hot(module)(KanbanApp);