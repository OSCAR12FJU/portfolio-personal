/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1.5': '1.5px'
      },
      colors: {
        bgPresentation: "hsl(221 45% 11%)",
        // Mapeo de variables CSS
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Colores adicionales de Portainer (en formato hexadecimal)
        // Verde con transparencia y sólido
        verdeTransparente: 'rgba(36, 184, 156, 0.19)',
        verde: 'rgb(36, 184, 156)',
         
         // Naranja con transparencia y sólido
         naranjaTransparente: 'rgba(211, 155, 78, 0.19)',
         naranja: 'rgb(211, 155, 78)',
         
         // Celeste con transparencia y sólido
         celesteTransparente: 'rgba(24, 164, 227, 0.19)',
         celeste: 'rgb(24, 164, 227)',

         violetaTransparente: 'rgba(138, 43, 226, 0.19)',
         violeta: 'rgb(138, 43, 226)',
        
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        // secondary:{
        //   DEFAULT: "hsl(var(--muted-foreground))",
        //   foreground: 
        // }
        secondary: "hsl(var(--muted-foreground))",
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      zIndex:{
        '-2':'-2',
      },
      boxShadow: {
        'white': '0 2px 2px rgba(255, 255, 255, 0.5)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
        }, 

    },
    
  },
  plugins: [],
}
