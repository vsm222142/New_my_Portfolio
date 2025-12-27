import React from "react";
import about from "./data/About.json";

const About = () => {
  return (
    <>
      <div className="container about">
        <div className="image" data-aos="fade-up-right"
         data-aos-duration="1000">
          <img src={"./assets/hero/Prt1.png"} alt="" />
        </div>
        <div className="about-contain">
          {about.map((data) => {
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
