import React from "react";

class userFavoriteAnimals extends React.Component {
    render() {
        return(
        <div>
            <h2>My Favorite Animals</h2>
            <ul>
                {this.props.favAnimals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
        </div>
    )}
}

export default userFavoriteAnimals;