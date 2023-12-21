import Link from "next/link";

const ProjectsPage = () => {
  const projectNames = [
    "nextjs-blogproject",
    "nextjs-wikirocket",
    "python-weather",
    "chat-app",
    "typescript-todolist",
    "typescript-shoppingcart",
  ];
  const projectLinks = [
    "https://nextjs-blogproject.vercel.app/",
    "https://nextjs-wikirocket-black.vercel.app/",
    "https://python-weather-o9ui.onrender.com/",
    "https://io-project-kqna.onrender.com/",
    "https://typescript-todolist.onrender.com/",
    "https://typescript-shoppingcart.onrender.com/",
  ];

  const projects = Object.fromEntries(
    projectNames.map((projectName, index) => [projectName, projectLinks[index]])
  );
  return (
    <section>
      <h2>Projects</h2>
      {/* list of projects with their links */}
      <ul>
        {Object.entries(projects).map(([projectName, projectLink]) => (
          <li key={projectName}>
            <Link className="hover:opacity-90" href={projectLink}>
              {projectName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsPage;
