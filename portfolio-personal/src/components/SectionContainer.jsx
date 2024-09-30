import PropTypes from "prop-types";

const SectionContainer = ({ children, className = '', ...props }) => {

    return(
    <>
    
    <section className={`${className} w-full lg:w-[740px] mx-auto pb-24`} {...props}>
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
