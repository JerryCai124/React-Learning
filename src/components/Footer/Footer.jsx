import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    handleCheckedAll=(event)=>{
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAllDone = ()=>{
        if(window.confirm('确定删除吗？')){
            this.props.clearAllDone()
        }
        
    }
    a
    
    render() {
        const {todos}=this.props
        const doneCount = todos.reduce((prev,todo)=>{return prev +(todo.done?1:0) }, 0)
        //console.log('%%',doneCount)
        const total= todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckedAll} checked ={doneCount===total && total!== 0? true:false}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;