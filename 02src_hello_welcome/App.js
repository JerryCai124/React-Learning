import React,{Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'

export default class App extends Component{
    render(){
        return(
            <div>
              {/* <h2>hello, react</h2> */}
              <Hello/>
              <Welcome/>
            </div>
        )
    }
}
