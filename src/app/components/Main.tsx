import Link from "next/link";

const Main = () => {
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
    <main className="p-4 text-center text-3xl font-bold">
      <section>
        <h2>Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind</li>
        </ul>
      </section>
      <br />
      <section>
        <h2>Projects</h2>
        {/* list of projects with their links */}
        <ul>
          {Object.entries(projects).map(([projectName, projectLink]) => (
            <li key={projectName}>
              <Link href={projectLink}>{projectName}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
