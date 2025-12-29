import React from "react";
// import projects from "./data/projects.json";

const Projects = () => {
  const projectsData = [
    {
      key: 1,
      title: "Online Table Booking Restaurant",
      imageSrc: "projects/Restaurant_img.png",
      description: "This is a project made with complete HTML, CSS and JS.",
      demo: "https://vsm222142.github.io/Online_Food_Restaurant/",
      source: "https://github.com/vsm222142/Online_Food_Restaurant",
    },
    {
      key: 2,
      title: "Electricity Billing System",
      imageSrc: "projects/Electricity_img.png",
      description: "This is a project made with complete HTML CSS.",
      demo: "https://vsm222142.github.io/Online-Electricity-Bill-Generate-WebApp/",
      source:
        "https://github.com/vsm222142/Online-Electricity-Bill-Generate-WebApp",
    },
    {
      key: 3,
      title: "Find Movies ",
      imageSrc: "projects/Movies_img.png",
      description: "This is a project made with complete React js.",
      demo: "https://www.example.com",
      source: "https://github.com/vsm222142?tab=repositories",
    },
    {
      key: 4,
      title: "Personal Portfolio",
      imageSrc: "projects/Restaurant_img.png",
      description: "This is a project made with complete React js.",
      demo: "https://www.example.com",
      source: "https://github.com/vsm222142?tab=repositories",
    },
  ];

  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>
          <strong>Projects</strong>
        </h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projectsData.map((data) => (
            <>
              <div
                key={data.id}
                className="mx-4 my-4 col-sm-6 col-md-4 col-lg-3"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    border: "2px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
                  }}
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={`./assets/${data.imageSrc}`}
                      className="card-img-top"
                      style={{
                        width: "250px",
                        height: "250px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                      alt="Project_Image"
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {" "}
                      <span style={{ color: "orange" }}> {data.title} </span>
                    </h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
