import React from "react";
// import about from "./data/About.json";

const About = () => {
   
  const aboutData=[
  {
    "id": 1,
    "role": "🎓 BCA Student | Aspiring Web Developer",
    "startLine": " 💻  I am a BCA student with a strong interest in web development and programming. I have hands-on experience working with HTML, CSS, JavaScript, React.js, Python and MySQL. I also use Git and GitHub for version control and project collaboration.",
    "midLine": " 🌐 I enjoy building responsive and user-friendly web applications and I regularly work on projects to improve my practical skills and problem-solving ability.",

    "endLine": "📚 I am currently focusing on strengthening my frontend development skills and working with real-world projects"
  }
]


  return (
    <>
      <div className="container about">
        <div className="image" data-aos="fade-up-right"
         data-aos-duration="1000">
          <img src={"./assets/hero/Prt1.png"} alt="" />
        </div>
        <div className="about-contain">
          {aboutData.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="about-items text-center my-5"
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div className="right">
                    <h1 style={{ display: "flex", alignContent: "start" }}>
                      {" "}
                      <strong> About</strong>
                    </h1>
                    <h2>
                      {" "}
                      <span style={{ color: "orange" }}>{data.role}</span>
                    </h2>
                    <br />
                    <h5>
                      <span style={{ color: "yellowgreen" }}>
                        {data.startLine} <br />{" "}
                      </span>{" "}
                      <span style={{ color: "yellow" }}>{data.midLine} </span>{" "}
                      <br />
                      <br />{" "}
                      <span style={{ color: "yellowgreen" }}>
                        {" "}
                        {data.endLine}
                      </span>
                    </h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
