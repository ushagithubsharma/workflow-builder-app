import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import ConfigPanel from "./components/ConfigPanel";
import Simulator from "./components/Simulator";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "20%",
          padding: "15px",
          background: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
        }}
      >
        <Sidebar />
      </div>

      {/* Canvas */}
      <div
        style={{
          width: "60%",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            minHeight: "100%",
          }}
        >
          <Canvas />
        </div>
      </div>

      {/* Right Panel */}
      <div
        style={{
          width: "20%",
          padding: "15px",
          borderLeft: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {/* Config Panel */}
        <div
          style={{
            flex: 1,
            background: "#ffffff",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            overflowY: "auto",
          }}
        >
          <ConfigPanel />
        </div>

        {/* Simulator */}
        <div
          style={{
            flex: 1,
            background: "#ffffff",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <Simulator />
        </div>
      </div>
    </div>
  );
}

export default App;