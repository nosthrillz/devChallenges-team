import Card from "./Card";
import { TEAM } from "./data";
function App() {
  return (
    <div className="App">
      <header>
        <h1>The creative crew</h1>
        <div>
          <h2>Who we are</h2>
          <p>
            We are a team of creatively diverse, driven, innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </header>
      <main className="card-list">
        {TEAM.map((person, idx) => (
          <Card
            key={idx}
            img={person.img}
            name={person.name}
            role={person.role}
          />
        ))}
      </main>
      <footer>
        created by{" "}
        <a
          href="https://github.com/nosthrillz"
          target="_blank"
          rel="noreferrer"
        >
          NoSThrillZ
        </a>{" "}
        - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
