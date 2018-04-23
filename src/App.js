import React from "react";
import './app.css';

const styles = {
    transition: 'all 1s ease-out',
    height: 400,
    width: 200
};

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            opacity: 1,
            scale: 1

        };
    }



    render() {
        return ( <div className="scrolling-wrapper">


                <div className="csscard-animation"><h2>Card</h2></div>
                <div className="csscard-animation"><h2>Card</h2></div>
                <div className="csscard-animation"><h2>Card</h2></div>
                <div className="csscard-animation"><h2>Card</h2></div>
                <div className="csscard-animation"><h2>Card</h2></div>
                <div className="csscard-animation"><h2>Card</h2></div>
                <div className="csscard-animation"><h2>Card</h2></div>
                <div className="csscard-animation"><h2>Card</h2></div>
                <div className="csscard-animation"><h2>Card</h2></div>

        </div>);
    }
}

//test
export default App;
