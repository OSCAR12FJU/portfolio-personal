import Amistades from "../files/Amistades.jpg"
import { AboutIcon } from "../icons/AboutIcon";

const About = () =>{
    return (
        <section id="About" className="relative min-h-[90vh] pt-16 pb-10">
        <div className="relative container z-2">
          <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center ' id="About">
            <AboutIcon className="size-8"/>
            Sobre mí
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
        <article className="flex flex-col items-center justify-center gap-8 font-normal text-secondary text-balance md:flex-row col-span-2">
          <div className="[&>p]:mb-4 text-pretty order-2 md-order-1">
           <p><strong className="text-primary">Me motiva la mejora continua y el aprendizaje</strong>, especialmente en investigación y desarrollo. Cada experiencia laboral me ha permitido explotar mis habilidades y entender los desafíos del mundo IT, ayudándome a darme cuenta de que este es el camino que quiero seguir.</p>

           <p><strong className="text-primary">Mi mentalidad se refleja en mi vida personal</strong> y en los hobbies que disfruto, así como en las personas que me rodean, quienes influyen en mi crecimiento. Mi círculo de amistades es reducido pero valioso, compuesto por personas de diferentes edades y trayectorias. La diversidad en nacionalidad y profesión ha sido clave; aunque tengo amigos cercanos que me motivaron a entrar en el mundo IT, también he aprendido de otros con perspectivas distintas.</p>

           <p>Para mí, establecer buenas relaciones con personas diferentes se basa en pasos sencillos: <strong className="text-primary">"te escucho y me escuchas"</strong>, <strong className="text-primary">"opino y escucho tu opinión"</strong>.</p>

           </div>

        </article>
        <div className="sm:flex sm:justify-center col-span-1">
           <img src={Amistades} alt="Amistades" className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 ring-black/70" style={{objectPosition:'50% 50%'}}/>
        </div>
        </div>
        </div>
        </section>

    )
}
export default About;