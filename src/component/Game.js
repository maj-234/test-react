import {useState} from 'react';

function Square({value, click}) {
    return <button className="square" onClick={click}>{ value }</button>;
}

function Board({squares, isX, update}) {

    function click(n) {
        if (squares[n]) {
            return;
        }
        else {
            const nextSquares = squares.slice()
            if (isX) {
                nextSquares[n] = 'X';
                console.log('clicked');
            }
            else {
                nextSquares[n] = 'O';
            }
            update(nextSquares);
        }
    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} click={() => click(0)} />
                <Square value={squares[1]} click={() => click(1)}/>
                <Square value={squares[2]} click={() => click(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} click={() => click(3)}/>
                <Square value={squares[4]} click={() => click(4)}/>
                <Square value={squares[5]} click={() => click(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} click={() => click(6)}/>
                <Square value={squares[7]} click={() => click(7)}/>
                <Square value={squares[8]} click={() => click(8)}/>
            </div>
        </>
    );
}

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquare = history[currentMove];
    const isX = currentMove % 2 === 0;

    function update(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const move = history.map((e, i) => {
        let info;
        if (i === 0) {
            info = 'back to start';
        }
        else {
            info = 'back to #' + i;
        }
        return (
            <li key={i}>
                <button>{info}</button>
            </li>
        )
    });

    return (
        <div className='game'>
            <div className='game-board'>
                <Board squares={currentSquare} isX={isX} update={update}/>
            </div>
            <div className='game-info'>
                {move}
            </div>
        </div>
    );
}

export default Game;
