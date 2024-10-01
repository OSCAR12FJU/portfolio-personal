import Git from "../icons/Git";
import Link from "../icons/Link";


const TAGS = {
  NEXT: {
    name: 'Next.js',
    className: 'bg-black text-white ',
    icon:(
      <svg width="1em" height="1em" viewBox="0 0 256 154" fill="none" xmlns="http://www.w3.org/2000/svg" ><mask id="mask0_408_139" style={{
        maskType: "alpha"
      }} maskUnits="userSpaceOnUse" x={0} y={0} width={180} height={180}><circle cx={90} cy={90} r={90} fill="black" /></mask><g mask="url(#mask0_408_139)"><circle cx={90} cy={90} r={87} fill="black" stroke="white" strokeWidth={6} /><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)" /><rect x={115} y={54} width={12} height={72} fill="url(#paint1_linear_408_139)" /></g><defs><linearGradient id="paint0_linear_408_139" x1={109} y1={116.5} x2={144.5} y2={160.5} gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset={1} stopColor="white" stopOpacity={0} /></linearGradient><linearGradient id="paint1_linear_408_139" x1={121} y1={54} x2={120.799} y2={106.875} gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset={1} stopColor="white" stopOpacity={0} /></linearGradient></defs></svg>
    ),
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    className: 'bg-[#003159] text-white ',
    icon: (
      <svg viewBox="0 0 256 154" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"><stop stopColor="#2298BD" offset="0%" /><stop stopColor="#0ED7B5" offset="100%" /></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="#38bdf8" /></svg>
    )
  },
};

const PROJECTS = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam nascetur suscipit, netus nullam ultrices eget placerat ornare fames congue.',
    link: '#',
    github: '#',
    image: 'https://codingartistweb.com/wp-content/uploads/2022/06/memory-game-01-1024x576.png',
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];


const Projects = () =>{

    return(
     <>
     {PROJECTS.map(({ title, description, image, tags }) => (
        <article key={title} className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
         <div className="w-full md:w-1/2">
          <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            src={image}
            alt={`Captura de pantalla del proyecto ${title}`}
          />
         </div>
        </div>

        <div className="w-full md:w-1/2 md:max-w-lg text-left">
          <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
          
        <div className="flex flex-wrap mt-2">
          <ul className="flex gap-x-2 flex-row mb-2">
            {tags.map((tag, index) => (
              <li key={index}>
              <span className={`flex gap-x-2 rounded-full text-xs ${tag.className} px-2 py-1`}>
              {tag.icon}
              {tag.name}</span>
              </li>
            ))}
          </ul>
        <div className="mt-2 text-gray-400">
        {description}
        </div>
        <div className="flex items-end justify-start mt-4 gap-x-4">
          <a className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition" href="">
            <Git className="size-4 md:size-6 w-6 h-6" />
            GitHub
           </a>
          <a className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition" href="">
            <Link className="size-4 md:size-6 w-6 h-6" />
            Preview
           </a>

          </div>

         </div> 
        </div>
        </article>
      ))}
     </>

    )
}
export default Projects;