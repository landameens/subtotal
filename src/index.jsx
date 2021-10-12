import React from 'react'
import {render} from 'react-dom'
import './style.scss'
import 'materialize-css/dist/js/materialize.min'


const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr/>
        <div className="logo"/>
        <hr/>
        <pre/>
        <hr/>
    </div>
)

render(<App/>, document.getElementById('root'))