const ExperienceItem = (exp) =>{
    const {title, description, link, date} = exp;

    return( 
    <>
     {/* <li className="mb-10 ms-4"> */}
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-sky-200/80 ">{date}</time>
        <h3 className="text-lg font-semibold text-yellow-200 mt-2">{title}</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200 text-balance">{description}</p>
        <a href= {link} 
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
         Learn more 
        <svg className="w-3 h-3 ms-2 rtl:rotate-180" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none"
         viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg></a>
    {/* </li> */}
  </>)
}
export default ExperienceItem;