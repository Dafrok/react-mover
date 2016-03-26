import './style.styl'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Mover from '../lib/mover.js'

class Demo extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Mover className="mover" style={{display: 'inline-block', position: 'relative'}}>
                <div>Drag me.</div>
            </Mover>
        )
    }
}

let root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<Demo />, root)
