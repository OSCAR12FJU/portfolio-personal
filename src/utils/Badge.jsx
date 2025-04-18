import PropTypes from "prop-types";

const Badge = ({text}) =>(
  <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>

  <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm  rounded-full cursor-pointer bg-card  backdrop-blur-3xl whitespace-nowrap">
    {text}
  </div>
  </span>
)

Badge.propTypes = {
    text: PropTypes.string.isRequired
};

export default Badge;