import React from "react";
// import skills from "./data/skills.json";

const Skills = () => {
  const skillsData = [
    {
      title: "HTML",
      imageSrc: "skills/html.png",
    },
    {
      title: "CSS",
      imageSrc: "skills/css.png",
    },
    {
      title: "JavaScript",
      imageSrc: "skills/javascript.png",
    },
    {
      title: "React",
      imageSrc: "skills/react.png",
    },
    {
      title: "Java",
      imageSrc: "skills/javalogo.png",
    },
    {
      title: "Python",
      imageSrc: "skills/Pythonlogo.png",
    },
    {
      title: "MySQL",
      imageSrc: "skills/Mysql_logo.png",
    },
    {
      title: "Git and Github",
      imageSrc: "skills/gitandgithub_logo.png",
    },
    {
      title: "VS Code",
      imageSrc: "skills/Vscodelogo.png",
    },
  ];

  return (
    <>
      <div className="container skills" id="skills">
        <h1>
          <strong>Skills</strong>
        </h1>

        <div className="items">
          {skillsData.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`./assets/${data.imageSrc}`} alt="Skills_Img" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
