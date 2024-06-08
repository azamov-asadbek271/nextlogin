import Link from "next/link"

function Navbar() {
  return (
    <div className="bg-base-300">
      <div className="max-w-6xl mx-auto navbar ">
        <div className="navbar-start">
          <Link className="btn btn-primary" href="/">
            MW
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/price">Price</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-ghost" href="/login">
            login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar