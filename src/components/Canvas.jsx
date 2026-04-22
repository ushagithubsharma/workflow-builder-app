import useStore from "../store/useStore";

const Canvas = () => {
  const { nodes, deleteNode, setSelectedNode, selectedNode } = useStore();

  return (
  <div style={{ padding: "20px" }}>
    <h2 style={{ marginBottom: "15px" }}>Canvas</h2>

      {nodes.length === 0 && <p>No nodes yet</p>}

      {nodes.map((node) => (
        <div
          key={node.id}
          onClick={() => setSelectedNode({ ...node })}
          style={{
            background: "#fff",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            border:
              selectedNode?.id === node.id
                ? "2px solid #4f46e5"
                : "1px solid #ccc",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <span>{node.type.toUpperCase()} NODE</span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteNode(node.id);
            }}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              padding: "6px 10px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Canvas;