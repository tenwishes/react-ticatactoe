const Rules = () => {
    return (
        <div className="rules">
            <h1>Rules</h1>
            <p>
                The game is played on a grid that's 3 squares by 3 squares.
            </p>
            <p>
                You are X, your friend is O. Players take turns putting their marks in empty squares.
            </p>
            <p>
                The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
            </p>
            <p>
                When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a
                tie.
            </p>
        </div>
    )
}

export default Rules;