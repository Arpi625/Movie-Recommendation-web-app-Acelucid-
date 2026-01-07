import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <h1>🎬 Movie Recommendation App</h1>
        <p className="subtitle">
          Describe your mood, favorite genres, or movies you like
        </p>

        <textarea placeholder="e.g. Sci-fi movies with time travel"></textarea>

        <button>Get Recommendations</button>

        <div className="results">
          <h3>Recommended Movies</h3>
          <ul>
            <li>Inception (2010)</li>
            <li>Interstellar (2014)</li>
            <li>Shutter Island (2010)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
