export default function App() {
  return (
    <>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "2.6rem",
            background: "linear-gradient(90deg,#ef4444,#f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🎬 CineMatch
        </h1>

        <p style={{ color: "#9ca3af", marginTop: "10px" }}>
          Describe your mood, favorite genres, or movies you like — we’ll find
          the perfect match.
        </p>
      </header>

      <textarea
        placeholder="e.g. Sci-fi movies with time travel"
        style={{
          width: "100%",
          minHeight: "110px",
          padding: "15px",
          background: "#020617",
          border: "1px solid #1f2937",
          borderRadius: "10px",
          color: "#f9fafb",
          resize: "none",
        }}
      />

      <button
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          fontWeight: "600",
          cursor: "pointer",
          background: "linear-gradient(135deg,#ef4444,#f97316)",
          color: "white",
        }}
      >
        Get Recommendations
      </button>
    </>
  );
}
