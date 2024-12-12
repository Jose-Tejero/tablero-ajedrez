import PropTypes from "prop-types";
import * as pieces from "./pieces";
import Svg from "./Svg";

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
