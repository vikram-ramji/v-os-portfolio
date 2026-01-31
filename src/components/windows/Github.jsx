import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";

const GithubCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      <div className="links">
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
          Repository
        </a>
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

const Github = () => {
  return (
    <MacWindow windowType="github" title="GitHub Projects">
      <div className="cards">
        {githubData.map((project) => {
          return <GithubCard key={project.id} project={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
