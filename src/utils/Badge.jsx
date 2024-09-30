import PropTypes from "prop-types";

const Badge = ({text}) =>(
  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
    {text}
  </span>
)

Badge.propTypes = {
    text: PropTypes.string.isRequired
};

export default Badge;