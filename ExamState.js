import React,{Component} from 'react'
import Display from './Display';
export default class ExamState extends Component{
    state={
        name1:"lakshmi"
    }
    render (){
        return(
            <div>
                <center>
                    <h2>hello world{this.state.name1}</h2>
                    <Display/>
                </center>
            </div>
        )
    }
}

