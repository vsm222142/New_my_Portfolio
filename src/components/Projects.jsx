import React from "react";
// import projects from "./data/projects.json";

const Projects = () => {

   const projectsData=[
  {
    "key": 1,
    "title": "React E-Commerce",
    "imageSrc": "https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg",
    "description": "This is a project made with complete React js.",
    "demo": "https://www.example.com",
    "source": "https://www.github.com"
  },
  {
    "key": 2,
    "title": "MERN Blogging",
    "imageSrc": "https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_640.jpg",
    "description": "This is a project made with complete React js.",
    "demo": "https://www.example.com",
    "source": "https://www.github.com"
  },
  {
    "key": 3,
    "title": "React Recipe",
    "imageSrc": "https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg",
    "description": "This is a project made with complete React js.",
    "demo": "https://www.example.com",
    "source": "https://www.github.com"
  },
  {
    "key": 4,
    "title": "React Firebase App",
    "imageSrc": "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg",
    "description": "This is a project made with complete React js.",
    "demo": "https://www.example.com",
    "source": "https://www.github.com"
  }
]


  return (
    <>
      <div className="container projects my-3">
        <h1><strong>Projects</strong></h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projectsData.map((data) => (
            <>
              <div key={data.id} className="mx-4 my-4 col-sm-6 col-md-4 col-lg-3"
               data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem",border:'2px solid yellow',boxShadow:'5px 5px 10px 10px rgba(101,175,10,0.5)' }}
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                     <img
                    src={data.imageSrc}
                    className="card-img-top" style={{width:'250px',
                       height:'250px',
                       border:'2px solid yellow',
                       borderRadius:'10px'
                      }}
                    alt="Project_Image"
                  />
                  </div>
                  
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
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
