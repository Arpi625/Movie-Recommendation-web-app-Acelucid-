export default function App() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "60px auto",
      padding: "30px",
      background: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
    }}>
      <h1 style={{ textAlign: "center", color: "#1e3a8a" }}>
        🎬 Movie Recommendation App
      </h1>

      <textarea
        placeholder='e.g. "Sci-fi movies with time travel"'
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

      <button style={{
        marginTop: "15px",
        width: "100%",
        padding: "12px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        fontWeight: "600",
        cursor: "pointer"
      }}>
        Get Recommendations
      </button>
    </div>
  );
}
