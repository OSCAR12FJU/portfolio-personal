import ExperienceItem from "../components/ExperienceItem";

const Experience = () =>{
    const ExperienceIT = [
        {
          date: "Marzo 2023",
          title: "Desarrollador Web",
          description: [
            "Desarrollos totalmente adaptativos y personalizados según las necesidades del cliente,abarcando la creación de interfaces responsivas, la configuración de servidores optimizados y el desarrollo de funcionalidades específicas para cada proyecto.",
            "Optimización en E-commerce para tiendas y plataformas de e-learning, implementando estrategias de SEO y optimización de imágenes para maximizar la velocidad de carga y mejorar la experiencia del usuario."
          ],
          subTitle: "Reckless"
        },
        {
          date: "Julio 2022",
          title: "Desarrollador Web",
          description:[
            "Desarrollador web, lideré todo el ciclo de desarrollo, desde el diseño frontend hasta el despliegue en producción y la gestión de servidores.",
            "Tecnologias utilizadas JavaScript, PHP, MySQL, Wordpress, CSS, Hostinger y Figma.",
            'Comunicación efectiva con el equipo de diseño, adaptando cada desarrollo web a un estándar de alta exigencia en diseño, con implementación "pixel perfect" y funcionalidad dinámica optimizada.'
          ] ,
          subTitle:"Servant Argentina"
        }
      ];
    console.log(ExperienceIT)
      
return(
    <ol className="relative mt-16">  
    {
        ExperienceIT.map((exp, index) => (
            <li key={index} className="text-left">
              <ExperienceItem {... exp} />
            </li>
            
        ))
    }
                   
    </ol>
    )}

export default Experience;