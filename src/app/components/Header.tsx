import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 text-center text-3xl font-bold">
      <h1>Wesley Shehadi</h1>
      <h2>Web Developer</h2>
      <Link className="hover:opacity-90" href="https://github.com/remilebeau">
        github.com/remilebeau
      </Link>
      <p>
        <a className="hover:opacity-90" href="mailto:remilebeau90@gmail.com">
          remilebeau90@gmail.com
        </a>
      </p>
    </header>
  );
};

export default Header;
