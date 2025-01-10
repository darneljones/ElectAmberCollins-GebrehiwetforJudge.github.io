// src/components/Experience.js
const experiences = [
  {
    company: "FINEOS",
    role: "Technical Consultancy Team Lead",
    duration: "2022 - Present",
    description: "Lead Technical Consulatant of the firm",
  },

  {
    company: "FINEOS",
    role: "Technical Team Lead",
    duration: "2021 - 2022",
    description: "Manage a team of consultants for through out the SDLC",
  },

  {
    company: "FINEOS",
    role: "Sr. Technical Consultant",
    duration: "2020 - 2021",
    description:
      "Multi-Regional lead technical consultant coding in Java and managing jenkins software deployments to an application hosted on AWS.",
  },

  {
    company: "Bank of America Financial Center",
    role: "UI Engineer",
    duration: "2019 - 2020",
    description: "Lead web development projects using React and Node.js.",
  },
  {
    company: "Amobee",
    role: "UI Engineer",
    duration: "2017 - 2019",
    description: "Lead web development projects using React and Node.js.",
  },
  {
    company: "NCR",
    role: "Training Coordinator",
    duration: "2016 - 2017",
    description: "Lead web development projects using React and Node.js.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mt-8 mb-8">Experience</h2>
        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li key={exp.company} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">
                {exp.company} - {exp.duration}
              </p>
              <p className="mt-4">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Experience;
