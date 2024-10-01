const ExperienceItem = (exp) =>{
    const {title, description, link, date} = exp;

    return( 
    <>
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4 color-[#ffffff26]">
    {/* Punto decorativo */}
    <div className="relative pb-12 md:col-span-2">
    <div className="sticky top-0">
      <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">•</span>
      <h3 className="text-lg font-bold text-yellow-400">{title}</h3>
      <h4 className="font-semibold text-white">{title}</h4>
      <time className="p-0 m-0 text-sm text-white/80">{date}</time>
    </div>
   </div>

  {/* Contenido principal */}
  <div className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3">
    <p className="mb-4 text-base font-normal  text-gray-200 text-balance">{description}</p>
    <a
      href={link}
      className="inline-flex items-center text-lg font-medium text-yellow-200 hover:text-yellow-300 hover:text-yellow-700"
    >
      Learn more
      <svg
        className="w-3 h-3 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>

  </>)
}
export default ExperienceItem;