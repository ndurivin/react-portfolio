import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import avartar from "../assets/avartar.png";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const socials = [
    {
      id: 2,
      link: "https://github.com/ndurivin",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/vincent-nduri-8b2228b5/",
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      link: "https://twitter.com/vinnduri",
      icon: <FaTwitter />,
    },
  ];

  const [text] = useTypewriter({
    words: ["Full-stack Developer", "Cybersecurity Expert", "Technical Mentor"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 90,
  });

  return (
    <section className="section container py-5" id="about">
      <div>
        <h1 className="text-center mt-5">VINCENT NDURI</h1>
        <h1 className="text-center py-2">
          I am a
          <span className="p-2" style={{ fontWeight: "light", color: "teal" }}>
            {text}
          </span>
          <span style={{ color: "gray" }}>
            <Cursor />
          </span>
        </h1>
        <p className="text-center py-3">
          <span className=""></span>I am a certified full stack developer with a
          passion for building innovative and impactful applications. My
          expertise lies in utilizing HTML, CSS, JavaScript, React, Mysql,
          Postgresql, Ruby, Rspec, Rails, Python, PHP and Django to bring ideas
          to life. With a certification from Moringa School, I have honed my
          skills and gained valuable experience in software development. I am
          always eager to learn and grow, and I thrive when working with a team
          of diverse individuals, both remotely and physically. I believe that
          collaboration is key to creating amazing products, and I am committed
          to constantly improving my skills and contributing to the development
          community.
        </p>
        <div className="d-flex justify-content-center py-4">
          {socials.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className="mx-5"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <img src={avartar} alt="profile picture" />
        </div>
        <div className="py-2 d-flex justify-content-center">
          <a
            className="btn btn-warning"
            href="../../public/Vincent Nduri.pdf"
            download={true}
          >
            Download Resume{" "}
            <span>
              <BsArrowDown />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
