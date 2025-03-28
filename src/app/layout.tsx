'use client';

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Label } from "./components/Label";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

/* export const metadata: Metadata = {
  title: "Mauricio Silva",
  description: "Generated by create next app",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <div className="grid grid-rows-[100vh_100vh_70rem_60px] min-h-screen">
          <section className="bg-red-500 text-white flex flex-col">
            <nav className="bg-white p-4 justify-between flex flex-row min-h-[92px] items-center">
                <h1 className="text-lg text-zinc-900">Mauricio Silva</h1>
                <ul className="flex space-x-4 text-zinc-900">
                  <li><a href="#">Página inicial</a></li>
                  <li><a href="#">Sobre</a></li>
                  <li><a href="#">Contato</a></li>
                </ul>
            </nav>
              <div className="bg-white text-white p-16 h-full flex flex-row">
                <div className="bg-white text-white p-4 h-full justify-center items-start flex flex-col w-4/6">
                  <span className="text-zinc-900 font-normal text-base font-[family-name:var(--font-montserrat)]">Olá, eu sou</span>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }} // Tempo da animação em segundos
                    className="
                      text-5xl font-medium
                      text-zinc-900
                      font-[family-name:var(--font-montserrat)]
                    "
                  >
                    MAURICIO SILVA
                  </motion.h1>
                  
                  <div className="mt-5 flex flex-col">
                    <span className="text-zinc-900">A curiosity driven frontend developer with design chops 🎨.</span>
                    <span className="text-zinc-900">I believe its OK to be you, You is dope.!</span>
                  </div>
                </div>
                <div className="bg-white p-4 h-full w-2/6 flex justify-center items-center">
                  <img width={350} src="profile.png" />
                </div>
              </div>
          </section>
          <section className="bg-zinc-50 text-zinc-900 p-4 flex flex-col justify-start items-center py-[6rem]">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // Tempo da animação em segundos
              className="text-2xl font-semibold"
            >
              A BIT ‘BOUT MY JOURNEY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2 }}
              className="mt-8 max-w-[700px] text-zinc-900"
            >
              I’m a freelance frontend developer based in Ahmedabad, India, with almost 6 years of experience.
               My journey started at an MNC, then I moved to a startup where I had the chance to build some cool
               projects that taught me a ton. I began with JavaScript, built apps using Angular, and then switched
               to React, where I had the opportunity to work on projects from scratch that really shaped my
               skills in JS and UI development.
                I don't dive into the back-end too often, but in case you're wondering, I know Node.js, Express
                & MongoDB. Just a peek behind the curtain!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2.5 }}
              className="mt-8 max-w-[700px] text-zinc-900"
            >
              I’ve always been passionate about working on projects that push me to grow, learn new things,
              and collaborate with great people. This led me to take the leap into freelancing, where I’ve had
              the chance to work with awesome clients. Right now, I’m working with a cool startup, building sleek
              UIs with Next.js, Typescript, Tailwind and more.
            </motion.p>

            <p className="mt-8">Here’s some tech and frameworks I love and work with:</p>

            <ul className="flex flex-wrap gap-2 mt-4 max-w-[700px]">
              <Label name="JavaScript" iconUrl="labels/icon-javascript.svg" />
              <Label name="React" iconUrl="labels/icon-react.svg" />
              <Label name="Next.js" iconUrl="labels/icon-nextjs.svg" />
              <Label name="Tailwind" iconUrl="labels/icon-tailwindcss.svg" />
              <Label name="Typescript" iconUrl="labels/icon-typescript.svg" />
              <Label name="Node.js" iconUrl="labels/icon-node.svg" />
              <Label name="Express" iconUrl="labels/icon-express.svg" />
              <Label name="Cypress" iconUrl="labels/icon-cypress.svg" />
              <Label name="Figma" iconUrl="labels/icon-figma.svg" />
              <Label name="Jest" iconUrl="labels/icon-jest.svg" />
              <Label name="Sass" iconUrl="labels/icon-sass.svg" />
              <Label name="Storybook" iconUrl="labels/icon-storybook.svg" />
            </ul>
          </section>
          <section className="bg-white text-zinc-900 p-[6rem] flex flex-col justify-start items-center">
            <div className="max-w-[700px] gap-1">
              <h1 className="text-2xl font-semibold">Work</h1>
              <h2 className="font-normal text-base mt-1">Check out some of my recent work – cool products I’ve been part of, built using the latest
                tech and libraries to create something awesome!</h2>

              <div className="flex flex-row mt-8 bg-white p-4 justify-center items-start gap-4">
                <div className="min-w-[60px]">
                  <img height={60} width={60} src="logos/ClassApp.png" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-lg">Engenheiro de Software Sênior</span>
                  <div className="flex gap-2">
                    <span>ClassApp</span>
                    <span>2019 - 2021</span>
                  </div>
                  <p>
                    Construção de sistemas distribuídos através de microfrontends utilizando module federation
                    Implantação em projetos e melhorias no design system
                    Construção de estruturas cross e boilerplates para a contribuição com diversos times
                    Documentação em sistemas legados e novos projetos
                    Ajuda nas tomadas de decisão sobre arquiteturas e formas de escalabilidade no frontend
                    Estruturação de feature em projetos utilizando Next JS, Trpc, GraphQL,React-Query e Capacitor JS
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                  </div>
                </div>
                
              </div>

              <div className="flex flex-row mt-8 bg-white p-4 justify-center items-start gap-4">
                <div className="min-w-[60px]">
                  <img height={60} width={60} src="logos/ClassApp.png" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-lg">Engenheiro de Software Sênior</span>
                  <div className="flex gap-2">
                    <span>ClassApp</span>
                    <span>2019 - 2021</span>
                  </div>
                  <p>
                    Construção de sistemas distribuídos através de microfrontends utilizando module federation
                    Implantação em projetos e melhorias no design system
                    Construção de estruturas cross e boilerplates para a contribuição com diversos times
                    Documentação em sistemas legados e novos projetos
                    Ajuda nas tomadas de decisão sobre arquiteturas e formas de escalabilidade no frontend
                    Estruturação de feature em projetos utilizando Next JS, Trpc, GraphQL,React-Query e Capacitor JS
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                    <Label small name="Storybook" iconUrl="labels/icon-storybook.svg" />
                  </div>
                </div>
                
              </div>
            </div>
          </section>
          <footer className="bg-red-500 text-white p-4">Footer</footer>
        </div>
        {/*children*/}
      </body>
    </html>
  );
}
