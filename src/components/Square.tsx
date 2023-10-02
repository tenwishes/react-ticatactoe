import {Player} from "./Board";

type SquareProps = {
    winner: Player;
    value: "X" | "O" | null;
    onClick: () => void;
}

const Square = ({winner, value, onClick}: SquareProps) => {
    if(!value) {
        return (
            <button
                className={`square`}
                onClick={onClick}
                disabled={!!winner}
            >
                {value}
            </button>
        )
    }
    return (
        <button
            disabled
            className={`square ${value.toLocaleLowerCase()}` }
        >
            {value}
        </button>
    )
}

export default Square;