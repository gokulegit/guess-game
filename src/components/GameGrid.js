
import React from 'react';

const GameGrid = ({ attempts }) => {
    return <div>
        <hr />
        <table style={{ margin: `0 auto` }}>
            <thead>
                <tr>
                    <td>Attempt</td>
                    <td>Guess</td>
                </tr>
            </thead>
            <tbody>
                {attempts.map((guess, index) => (<tr key={index}>
                    <td>{index + 1}</td>
                    <td>{guess}</td>
                </tr>))}
            </tbody>
        </table>
    </div>;
}

export default GameGrid;