import useStore from "../store/useStore";

const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "500",
};

const groupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const ConfigPanel = () => {
  const selectedNode = useStore((state) => state.selectedNode);
  const updateNodeConfig = useStore((state) => state.updateNodeConfig);

  if (!selectedNode) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Config Panel</h2>
        <p>Select a node</p>
      </div>
    );
  }

  const updateConfig = (key, value) => {
    updateNodeConfig(selectedNode.id, key, value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>
        {selectedNode.type.toUpperCase()} NODE
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

        {/* START */}
        {selectedNode.type === "start" && (
          <div style={groupStyle}>
            <label style={labelStyle}>Start Title</label>
            <input
              style={inputStyle}
              value={selectedNode.config?.title || ""}
              onChange={(e) => updateConfig("title", e.target.value)}
            />
          </div>
        )}

        {/* TASK */}
        {selectedNode.type === "task" && (
          <>
            <div style={groupStyle}>
              <label style={labelStyle}>Title</label>
              <input style={inputStyle}
                value={selectedNode.config?.title || ""}
                onChange={(e) => updateConfig("title", e.target.value)}
              />
            </div>

            <div style={groupStyle}>
              <label style={labelStyle}>Description</label>
              <input style={inputStyle}
                value={selectedNode.config?.description || ""}
                onChange={(e) => updateConfig("description", e.target.value)}
              />
            </div>

            <div style={groupStyle}>
              <label style={labelStyle}>Assignee</label>
              <input style={inputStyle}
                value={selectedNode.config?.assignee || ""}
                onChange={(e) => updateConfig("assignee", e.target.value)}
              />
            </div>

            <div style={groupStyle}>
              <label style={labelStyle}>Due Date</label>
              <input type="date"
                min={new Date().toISOString().split("T")[0]}
                value={selectedNode.config?.dueDate || ""}
                onChange={(e) => updateConfig("dueDate", e.target.value)}
              />
            </div>
          </>
        )}

        {/* APPROVAL */}
        {selectedNode.type === "approval" && (
          <>
            <div style={groupStyle}>
              <label style={labelStyle}>Title</label>
              <input style={inputStyle}
                value={selectedNode.config?.title || ""}
                onChange={(e) => updateConfig("title", e.target.value)}
              />
            </div>

            <div style={groupStyle}>
              <label style={labelStyle}>Approver Role</label>
              <input style={inputStyle}
                value={selectedNode.config?.role || ""}
                onChange={(e) => updateConfig("role", e.target.value)}
              />
            </div>

            <div style={groupStyle}>
              <label style={labelStyle}>Threshold</label>
              <input type="number" style={inputStyle}
                value={selectedNode.config?.threshold || ""}
                onChange={(e) => updateConfig("threshold", e.target.value)}
              />
            </div>
          </>
        )}

        {/* AUTOMATED */}
        {selectedNode.type === "automated" && (
          <>
            <div style={groupStyle}>
              <label style={labelStyle}>Title</label>
              <input style={inputStyle}
                value={selectedNode.config?.title || ""}
                onChange={(e) => updateConfig("title", e.target.value)}
              />
            </div>

            <div style={groupStyle}>
              <label style={labelStyle}>Action</label>
              <select style={inputStyle}
                value={selectedNode.config?.action || ""}
                onChange={(e) => updateConfig("action", e.target.value)}
              >
                <option value="">Select Action</option>
                <option value="send_email">Send Email</option>
                <option value="generate_doc">Generate Document</option>
              </select>
            </div>

            <div style={groupStyle}>
              <label style={labelStyle}>Parameter</label>
              <input style={inputStyle}
                value={selectedNode.config?.param || ""}
                onChange={(e) => updateConfig("param", e.target.value)}
              />
            </div>
          </>
        )}

        {/* END */}
        {selectedNode.type === "end" && (
          <>
            <div style={groupStyle}>
              <label style={labelStyle}>End Message</label>
              <input style={inputStyle}
                value={selectedNode.config?.message || ""}
                onChange={(e) => updateConfig("message", e.target.value)}
              />
            </div>

            <label style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={selectedNode.config?.summary || false}
                onChange={(e) => updateConfig("summary", e.target.checked)}
              />
              Enable Summary
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfigPanel;