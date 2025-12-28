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
      title: "Node",
      imageSrc: "skills/node.png",
    },
    {
      title: "Firebase",
      imageSrc: "skills/firebase.png",
    },
    {
      title: "GraphQL",
      imageSrc: "skills/graphql.png",
    },
    {
      title: "MongoDB",
      imageSrc: "skills/mongodb.png",
    },
    {
      title: "Figma",
      imageSrc: "skills/figma.png",
    },
  ];

  return (
    <>
      <div className="container skills">
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
