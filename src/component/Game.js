import {useState} from 'react';

function Square({value}) {
    return <button className="square">{ value }</button>;
}

function Board({squares}) {
    return (
        <>
            <div className="board-row">
                <Square value='1'/>
                <Square value='2'/>
                <Square value='3'/>
            </div>
            <div className="board-row">
                <Square value='3'/>
                <Square value='3'/>
                <Square value='3'/>
            </div>
            <div className="board-row">
                <Square value='3'/>
                <Square value='3'/>
                <Square value='3'/>
            </div>
        </>
    );
}

function Game() {
    const [history, setHistory] = useState([Array(9).fill('null')]);
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquare = history[currentMove]

    const move = history.map((e, i) => {
        return (
            <li key={i}>
                <button>{i}</button>
            </li>
        )
    });

    return (
        <div className='game'>
            <div className='game-board'>
                <Board squares={currentSquare}/>
            </div>
            <div className='game-info'>
                {move}
            </div>
        </div>
    );
}

export default Game;
