import PropTypes from "prop-types";

export default function Svg({ children, size, color }) {
  return (
    <svg
      fill={color || "#fff"}
      height={`${size || "40"}px`}
      width={`${size || "40"}px`}
      display="block"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      {children}
    </svg>
  );
}

Svg.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  color: PropTypes.string
}
