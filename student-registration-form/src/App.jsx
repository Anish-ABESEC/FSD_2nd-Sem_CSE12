function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <form
        style={{
          backgroundColor: "white",
          padding: "35px",
          borderRadius: "15px",
          width: "380px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#333",
          }}
        >
          Student Registration
        </h1>

        <input
          type="text"
          placeholder="Enter Student Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Enter Course"
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Enter Mobile Number"
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
  backgroundColor: "#f9f9f9",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "linear-gradient(to right, #0072ff, #00c6ff)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default App;