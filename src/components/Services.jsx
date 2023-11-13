import backend from "../assets/Backend.png";
import frontend from "../assets/Frontend.png";
import database from "../assets/database.png";
import support from "../assets/support.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      desc: "I have a strong understanding of the frontend development process and I can build any website from scratch. I have experience with HTML, CSS, JavaScript, React, Bootstrap, and Tailwind.",
      icon: frontend,
    },
    {
      id: 2,
      title: "Backend Development",
      desc: "I have a strong understanding of the backend development process and I can build any website from scratch. I have experience with Ruby, Rails, Postgresql, Mysql, Php, Python, and Rspec.",
      icon: backend,
    },
    {
      id: 3,
      title: "Database Design",
      desc: "I have a strong understanding of the database design process and I can build any database from scratch. I have experience with Postgresql & Mysql.",
      icon: database,
    },
    {
      id: 4,
      title: "Technical Support",
      desc: "I have an in-depth understanding of system's technical knowledge and offer appropriate consultancy services to users and clients.",
      icon: support,
    },
  ];
  return (
    <section className="container mt-5 py-5" id="services">
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center">Services</h1>
          <p className="text-center">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {services.map((item) => (
          <>
            <div className="col">
              <div key={item.id} className="card">
                <img
                  src={item.icon}
                  className="services-icon"
                  alt={item.title}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Services;
