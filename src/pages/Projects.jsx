import Nextjs from "../icons/Nextjs";
import Tailwindcss from "../icons/Tailwindcss"

const TAGS = {
  NEXT: {
    name: 'Next.js',
    className: 'bg-black text-white ',
    icon: <Nextjs />,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    className: 'bg-[#003159] text-white ',
    icon: <Tailwindcss />
  },
};

const PROJECTS = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam nascetur suscipit, netus nullam ultrices eget placerat ornare fames congue. Phasellus luctus cubilia elementum fusce cum pulvinar purus, conubia pretium ad sem dapibus inceptos dui, sed urna libero interdum magnis nisi.',
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
        <article key={title} className="text-left">
          <h3 className="text-2xl font-semibold text-yellow-200 mb-2">{title}</h3>
          <p className="text-lg mb-4 text-pretty">{description}</p>
          <ul className="flex gap-x-2 flex-row mb-2">
            {tags.map((tag, index) => (
              <li key={index}>
              <span className={`flex gap-x-2 rounded-full text-xs ${tag.className} px-2 py-1`}>
              {tag.icon}
              {tag.name}</span>
              </li>
            ))}
          </ul>
          <img
            className="rounded shadow-2xl shadow-white/10"
            src={image}
            alt={`Captura de pantalla del proyecto ${title}`}
          />
        </article>
      ))}
     </>

    )
}
export default Projects;