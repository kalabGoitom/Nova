import { NavLink } from "react-router";

function Home() {
  return (
    <main>
      <section id="hero-section">
        <div className="container">
          <h1> Discover something new. </h1>
          <p> Everything you need, all in one place.</p>
          <button>
            <NavLink to={"/store"}>Shop now</NavLink>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
