# NextJS
 Repositorio Criado para Testa o NextJs.

 ## Instalação Tailwind 
 Criar o Projeto
 npx create-next-app my-project
cd my-project

Instalar o tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configurar o aquivo tailwind.config.js
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Adicionar no arquivo globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;


# If you're on Next.js v10 or newer
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# If you're on Next.js v9 or older
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

npx tailwindcss init -p

Adicionar o importa na pasta _app.js
import 'tailwindcss/tailwind.css'

adição de cores  
mode: 'jit',  // update this line
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],