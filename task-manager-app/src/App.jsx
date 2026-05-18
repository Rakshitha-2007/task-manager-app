function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{
        color: "#2563eb",
        fontSize: "40px"
      }}>
        Task Management App
      </h1>

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        marginTop: "20px"
      }}>

        <input
          type="text"
          placeholder="Enter Task"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <button style={{
          width: "100%",
          padding: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Add Task
        </button>

      </div>
    </div>
  )
}

export default App