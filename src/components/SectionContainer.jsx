import PropTypes from "prop-types";

const SectionContainer = ({ children, className = '', ...props }) => {

    return(
    <>
    <section className={`${className} max-w-lg mx-auto container md:max-w-4xl pb-24`} {...props}>
     {children} 
    </section>
    </>
    )
};

SectionContainer.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node.isRequired, 
    className: PropTypes.string, 

};


export default SectionContainer;
