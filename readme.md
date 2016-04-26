# react-mover

## Description
A wrapper for moving target elements.

## Demo
[https://dafrok.github.io/react-mover](https://dafrok.github.io/react-mover)

## Install
```
$ npm i react-mover
```

## Usage
```es6
import React from 'react'
import Mover from 'react-mover'

export default const MovableComponent = (
    <Mover style={{display: 'block', position: 'absolute', cursor: 'move'}}>
        <span>Drag me to move</span>
    </Mover>
)
```
