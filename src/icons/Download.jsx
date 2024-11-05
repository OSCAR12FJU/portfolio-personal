import PropTypes from "prop-types";

export const Download = ({className}) => (
<svg xmlns="http://www.w3.org/2000/svg" className={`${className}`}viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path> <path d="M7 11l5 5l5 -5"></path> <path d="M12 4l0 12"></path> </svg> )

Download.prototype = {
  className: PropTypes.string, 
};