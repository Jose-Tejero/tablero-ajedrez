// icon:cross | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from "react";

function Queen({ size }) {
  return (
    <svg
      fill="#FFFFFF"
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
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M382.131,406.75c-0.346-0.413-34.321-41.783-52.164-90.233c-12.739-34.575-14.216-65.119-14.196-79.87h19.992 c3.505,0,6.741-2.182,8.509-5.217c1.757-3.035,1.767-6.929,0.029-9.973l-22.482-39.415c-1.352-2.37-3.613-4.065-6.199-4.701 c24.139-17.937,39.812-46.676,39.812-78.987C355.431,44.131,311.312,0,257.09,0c-54.222,0-98.341,44.114-98.341,98.336 c0,32.313,15.673,61.028,39.809,78.968c-2.586,0.634-4.847,2.288-6.197,4.658l-22.482,39.334 c-1.738,3.047-1.729,7.099,0.029,10.134c1.767,3.035,5.004,5.217,8.509,5.217h19.524c-0.555,14.751-3.056,50.157-14.002,79.87 c-15.039,40.825-52.875,90.24-53.249,90.73c-1.287,1.709-2.533,3.632-2.533,5.774v88.507c0,5.436,5.488,10.473,10.924,10.473 h236.017c5.436,0,8.744-5.037,8.744-10.473v-88.507C383.843,410.735,383.591,408.507,382.131,406.75z M178.418,98.331 c0-43.379,35.293-78.672,78.672-78.672c43.379,0,78.672,35.293,78.672,78.672c0,43.379-35.293,78.672-78.672,78.672 C213.711,177.003,178.418,141.71,178.418,98.331z M195.368,216.978l11.236-19.668h100.972l11.236,19.668H306.26H207.92H195.368z M364.175,492.332H147.825v-76.055c9.834-11.227,39.862-54.517,54.027-92.96c12.11-32.873,15.267-69.46,15.795-86.67h78.423 c-0.057,14.751,1.347,49.158,15.167,86.67c16.508,44.82,45.562,82.646,52.937,93.172V492.332z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export default Queen;
