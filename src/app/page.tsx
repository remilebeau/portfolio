import Link from "next/link";

export default function HomePage() {
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
        {/* List of languages */}
        <h2>Languages</h2>
        <ul className="border">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Ruby</li>
        </ul>

        <h2 className="mb-4">Technologies</h2>

        <ul className="columns-3 text-left">
          <li className="mb-4">HTML</li>
          <li className="mb-4">CSS</li>
          <li className="mb-4">JavaScript</li>
          <li className="mb-4">TypeScript</li>
          <li className="mb-4">MongoDB</li>
          <li className="mb-4">Express</li>
          <li className="mb-4">React</li>
          <li className="mb-4">Node.js</li>
          <li className="mb-4">Next.js</li>
          <li className="mb-4">Tailwind</li>
          <li className="mb-4">Prisma</li>
          <li className="mb-4">Mongoose</li>
          <li className="mb-4">PostgreSQL</li>
        </ul>
      </section>
      <br />
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
    </main>
  );
}
