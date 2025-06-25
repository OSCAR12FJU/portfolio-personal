import PropTypes from "prop-types";

const NavItem = ({link, className = '', text}) =>{
    return (
     <a className={`relative block px-2 py-2 transition hover:text-primary cursor-pointer ${className}`} href={link}>
        {text}
     </a>

    )
}
NavItem.propTypes = {
 
    link: PropTypes.string, 
    className: PropTypes.string, 
    text: PropTypes.string, 

};
export default NavItem