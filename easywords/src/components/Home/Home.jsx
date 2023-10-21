import React from 'react';
import Waves from '../Waves/Waves';
import {
    Link
  } from "react-router-dom";

export default class Home extends React.Component {
    render () {
        return (
            <>
            <div className="home">
                <button className="home__btn"><Link to="/cards">Start this jorney</Link></button>
            </div>
            <Waves />
            </>
        )
    }
}