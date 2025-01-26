import { motion } from "framer-motion";
import Navigation from "components/Navigation";
import Project from "components/project";
import Card from "components/organisms/card";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Button from "components/atoms/button";
import { useEffect } from "react";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  //@ts-ignore
} from "react-scroll";

const scrollToBottom = () => {
  scroll.scrollToBottom({ duration: 600, smooth: true });
};

const scrollToTop = () => {
  scroll.scrollToTop({ duration: 600, smooth: true });
};

const scrollToProjects = () => {
  scroll.scrollTo(window.innerHeight * 2);
};

const App = () => {
  useEffect(() => {
    //@ts-ignore
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    //@ts-ignore
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Navigation
        scrollToContact={scrollToBottom}
        scrollToProjects={scrollToProjects}
        scrollToHero={scrollToTop}
      />
      <Hero />
      <About />
      <ProjectSection />
      <ContactInfo />
    </>
  );
};

function Hero() {
  return (
    <main className=" h-screen flex justify-center items-start flex-col gap-3 font-bold ml-48">
      <motion.p className="text-blue-600">Hi, My name is</motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className=" text-8xl text-white font-bold m-0"
      >
        Bayethe Lungah.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="text-3xl text-gray-500 font-bold"
      >
        (By-yet-tay)
      </motion.p>

      <motion.p className="text-white mt-6 text-lg w-2/3">
        I am full time Computer programming student at{" "}
        <a className="underline" href="https://www.fanshawec.ca/">
          Fanshawe College
        </a>
        . I've had a strong passion for tech since I was 12 and I love making
        new things.
      </motion.p>

      <Button
        onClick={() => scrollToProjects()}>
        <div className="flex gap-2 justify-center items-center">
          <p>See Projects</p>
          <ArrowDownIcon className="bounce" style={{ height: "25px" }} />
        </div>
      </Button>
    </main>
  );
}

function About() {
  return (
    <main className="h-screen flex flex-col justify-center items-center font-bold gap-3">
      <div className="flex justify-center items-center">
        <Card
          title="About Me"
          className=" w-2/3 flex justify-center items-center"
        >
          <p className="text-white">
            Welcome to my coding realm! I'm Bayethe Lungah (but I go by Tay), a
            dedicated software developer with a fervor for transforming complex
            problems into elegant solutions. Armed with a deep understanding in
            Javascript, C# and experience in Java and python. I thrive in the dynamic world of
            code. Whether I'm architecting robust systems, debugging intricate
            issues, or exploring the latest in tech trends, I approach each line
            with precision and passion. I'm not just a developer; I'm a problem
            solver and a tech enthusiast. Let's embark on this coding adventure
            together, where every challenge is an opportunity to innovate!
          </p>
        </Card>
      </div>
    </main>
  );
}

function ProjectSection() {
  return (
    <Element name="ProjectSection" id="ProjectSection">
      <main
        id="ProjectSection"
        className=" h-screen flex flex-col justify-center items-center font-bold gap-3"
      >
        <h1 className="text-white text-4xl">Projects</h1>
        <div className="w-2/3 flex justify-center items-center gap-5">
          <Project
            title="Tode Client"
            description="A website to visualize project depedencies"
            githubUrl="https://github.com/bayethelungah/Tode-Client"
            url=""
            rawTags="Vite,Typescript"
          />
          <Project
            title="Bioca"
            description="a genetic algorithm simulation"
            githubUrl="https://github.com/bayethelungah/Bioca"
            url=""
            rawTags="C++,Raylib"
          />
          <Project
            title="Tode Server"
            description="The background for the Tode client powered by express.js"
            githubUrl="https://github.com/bayethelungah/Tode-Server"
            url=""
            rawTags="Express.js,Node.js,Typescript"
          />
        </div>
      </main>
    </Element>
  );
}

function ContactInfo() {
  return (
    <main className="h-screen flex justify-center items-center flex-col gap-3 font-bold">
      <Card title="Contact Information">
        <>
          <ul className="flex justify-center items-center gap-3 text-white">
            <a className="text-white" href="https://github.com/bayethelungah">
              Github
            </a>
            /
            <a
              className="text-white"
              href="https://www.linkedin.com/in/bayethe-lungah-426620217/"
            >
              Linkedin
            </a>
          </ul>
          <a href="mailto:b_lungah@fanshaweonline.ca" className="text-white">
            b_lungah@fanshaweonline.ca
          </a>
        </>
      </Card>
    </main>
  );
}

export default App;
