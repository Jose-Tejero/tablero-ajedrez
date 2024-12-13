import PropTypes from "prop-types";
import Pawn from "./pieces/Pawn";
import Bishop from "./pieces/Bishop";
import Rook from "./pieces/Rook";
import Knight from "./pieces/Knight";
import Queen from "./pieces/Queen";
import King from "./pieces/King";
import Svg from "./Svg";

const pieces = {
  Pawn,
  Bishop,
  Rook,
  Knight,
  Queen,
  King,
};

export default function ChessPiece({ piece, color, size }) {
  const Piece = pieces[piece];

  return (
    <Svg color={color} size={size}>
      <Piece />
    </Svg>
  );
}

ChessPiece.propTypes = {
  piece: PropTypes.oneOf(["Pawn", "Bishop", "Rook", "Knight", "Queen", "King"]),
  color: PropTypes.string,
  size: PropTypes.number,
};
