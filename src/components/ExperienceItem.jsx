const ExperienceItem = (exp) =>{
    const {title,subTitle, description, date} = exp;

    return( 
    <>
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4 color-[#ffffff26]">
    {/* Punto decorativo */}
    <div className="relative pb-8 md:col-span-2">
    <div className="sticky top-0">
      <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">•</span>
      <h3 className="text-lg font-bold text-yellow-400">{title}</h3>
      <h4 className="font-semibold text-white">{subTitle}</h4>
      <time className="p-0 m-0 text-sm text-white/80">{date}</time>
    </div>
   </div>

  {/* Contenido principal */}
  <div className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3">
    {/* <p className="mb-4 text-base font-normal  text-gray-200 text-balance">{description}</p> */}
    <ul>
    {description.map((desc, index) =>(
      <li  key={index} className="mb-4 text-base font-normal text-gray-200 text-balance">
        {desc}
      </li>
    ))}
    </ul>
  </div>
</div>

  </>)
}
export default ExperienceItem;