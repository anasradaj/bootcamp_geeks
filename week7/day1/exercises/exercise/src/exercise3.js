import React from 'react';
import './exercise.css';

class exercise extends React.Component {
    
    render() {
        const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
        };
        return(
        <div>
            {/* <h1 className="header" style={{ color: "red", backgroundColor: "lightblue" }}>This is a header</h1> */}
            <h1 className="header" style={style_header}>This is a header</h1>
            <p className="paragraph">This is a paragraph.</p>
            <a href="https://example.com" className="link">This is a link</a>
            <form className="form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="input" />
                <button type="submit" className="button">Submit</button>
            </form>
            <img src="https://images.icon-icons.com/2699/PNG/512/reactjs_logo_icon_170805.png" alt="Placeholder" className="image" />
            <ul className="list">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
    );
    }

}

export default exercise;