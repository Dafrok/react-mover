import React, {Component} from 'react'

let draggingStates = {
    originX: 0,
    originY: 0,
    offsetX: 0,
    offsetY: 0
}

export default class Mover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0,
        }
        this.setOffsets = this.setOffsets.bind(this)
        this.move = this.move.bind(this)
    }
    setOffsets (e) {
        e.stopPropagation()
        this.props.dragImage && e.dataTransfer.setDragImage(this.props.dragImage, 0, 0)
        const currentStyle = getComputedStyle(e.target)
        const top = parseInt(currentStyle.top, 10)
        const left = parseInt(currentStyle.left, 10)
        draggingStates.originX = e.target.offsetLeft - left
        draggingStates.originY = e.target.offsetTop - top
        draggingStates.offsetX = e.pageX - e.target.offsetLeft
        draggingStates.offsetY = e.pageY - e.target.offsetTop
    }
    move (e) {
        e.stopPropagation()
        e.pageX && e.pageY && this.setState({
            x: e.pageX - draggingStates.offsetX - draggingStates.originX,
            y: e.pageY - draggingStates.offsetY - draggingStates.originY
        })
    }
    render () {
        return React.cloneElement(
            <span {...this.props} onDrag={this.move} draggable={true} onDragStart={this.setOffsets}>
                {this.props.children}
            </span>
        , {style:Object.assign({top: this.state.y, left: this.state.x}, this.props.style)})
    }
}
