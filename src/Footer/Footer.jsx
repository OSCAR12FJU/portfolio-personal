const Footer = () =>{
    
    return(
<footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">

    <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">

      <span className="text-sm sm:text-center">© 2024 <a href="#" className="hover:underline">Oscar Flores™</a>. Casi todos los derechos reservados.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Sobre mí</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contacto</a>
        </li>
    </ul>
    </div>
</footer>
    )

}
export default Footer;