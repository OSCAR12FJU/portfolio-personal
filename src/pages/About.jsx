import Amistades from "../files/amistades.jpg"

const About = () =>{
    return (
        <>
        <article className="flex flex-col items-center justify-center gap-8 font-normal text-gray-200 text-balance md:flex-row">
          <div className="[&>p]:mb-4 text-pretty order-2 md-order-1">
           <p><strong className="text-yellow-400">Me motiva la mejora continua y el aprendizaje</strong>, especialmente en investigación y desarrollo. Cada experiencia laboral me ha permitido explotar mis habilidades y entender los desafíos del mundo IT, ayudándome a darme cuenta de que este es el camino que quiero seguir.</p>

           <p><strong className="text-yellow-400">Mi mentalidad se refleja en mi vida personal</strong> y en los hobbies que disfruto, así como en las personas que me rodean, quienes influyen en mi crecimiento. Mi círculo de amistades es reducido pero valioso, compuesto por personas de diferentes edades y trayectorias. La diversidad en nacionalidad y profesión ha sido clave; aunque tengo amigos cercanos que me motivaron a entrar en el mundo IT, también he aprendido de otros con perspectivas distintas.</p>

           <p>Para mí, establecer buenas relaciones con personas diferentes se basa en pasos sencillos: <strong className="text-yellow-400">"te escucho y me escuchas"</strong>, <strong className="text-yellow-400">"opino y escucho tu opinión"</strong>.</p>

           </div>
           <img width="200" height="200" src={Amistades} alt="Amistades" className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 ring-black/70" style={{objectPosition:'50% 50%'}}/>
        </article>
        </>
    
    )
}
export default About;