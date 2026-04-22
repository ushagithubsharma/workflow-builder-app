import useStore from "../store/useStore";

const Sidebar = () => {
  const addNode = useStore((state) => state.addNode);

  const createNode = (type) => {
    addNode({
      id: Date.now() + Math.random(),
      type,
      config: {},
    });
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
    marginBottom: "10px",
    fontWeight: "500",
    transition: "0.2s",
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ marginBottom: "15px" }}>Sidebar</h2>

      <button
        style={buttonStyle}
        onClick={() => createNode("start")}
      >
         Start Node
      </button>

      <button
        style={buttonStyle}
        onClick={() => createNode("task")}
      >
         Task Node
      </button>

      <button
        style={buttonStyle}
        onClick={() => createNode("approval")}
      >
         Approval Node
      </button>

      <button
        style={buttonStyle}
        onClick={() => createNode("automated")}
      >
         Automated Node
      </button>

      <button
        style={{
          ...buttonStyle,
          background: "#ef4444",
        }}
        onClick={() => createNode("end")}
      >
         End Node
      </button>
    </div>
  );
};

export default Sidebar;