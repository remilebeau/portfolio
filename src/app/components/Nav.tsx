import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full p-4 mx-auto flex justify-center gap-4 text-3xl font-bold">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
