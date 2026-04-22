import useStore from "../store/useStore";
import { simulateWorkflow } from "../api/mockApi";
import { useState } from "react";

const Simulator = () => {
  const nodes = useStore((state) => state.nodes);
  const [logs, setLogs] = useState([]);

  const runSimulation = () => {
    const errors = [];

    // ❌ No nodes
    if (nodes.length === 0) {
      setLogs(["⚠️ No nodes to simulate"]);
      return;
    }

    // ❌ Start / End validation
    if (!nodes.some((n) => n.type === "start")) {
      errors.push("❌ Start node is required");
    }

    if (!nodes.some((n) => n.type === "end")) {
      errors.push("❌ End node is required");
    }

    if (nodes.length < 2) {
      errors.push("❌ Add more steps to workflow");
    }

    // 🔍 Deep validation
    nodes.forEach((node, index) => {
      const i = index + 1;

      // TASK
      if (node.type === "task") {
        if (!node.config?.title) {
          errors.push(`❌ Task ${i}: Title required`);
        }

        if (!node.config?.assignee) {
          errors.push(`❌ Task ${i}: Assignee required`);
        }

        if (!node.config?.dueDate) {
          errors.push(`❌ Task ${i}: Due date required`);
        } else {
          const today = new Date().toISOString().split("T")[0];
          if (node.config.dueDate < today) {
            errors.push(`❌ Task ${i}: Due date cannot be past`);
          }
        }
      }

      // APPROVAL
      if (node.type === "approval") {
        if (!node.config?.role) {
          errors.push(`❌ Approval ${i}: Role required`);
        }

        if (!node.config?.threshold) {
          errors.push(`❌ Approval ${i}: Threshold required`);
        } else if (Number(node.config.threshold) <= 0) {
          errors.push(`❌ Approval ${i}: Threshold must be > 0`);
        }
      }

      // AUTOMATED
      if (node.type === "automated") {
        if (!node.config?.action) {
          errors.push(`❌ Step ${i}: Select an action`);
        }

        if (!node.config?.param) {
          errors.push(`❌ Step ${i}: Parameter required`);
        }
      }

      // END
      if (node.type === "end") {
        if (!node.config?.message) {
          errors.push(`❌ End node: Message required`);
        }
      }
    });

    // ❌ show errors
    if (errors.length > 0) {
      setLogs(errors);
      return;
    }

    // ✅ success
    const result = simulateWorkflow(nodes);
    setLogs(result);
  };

  // ✅ Export JSON
  const exportJSON = () => {
    const data = JSON.stringify(nodes, null, 2);
    console.log(data);
    setLogs(["📦 Workflow JSON exported (check console)"]);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ marginBottom: "12px" }}>Simulator</h2>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
        <button
          onClick={runSimulation}
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            background: "#10b981",
            color: "white",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          ▶ Run
        </button>

        <button
          onClick={exportJSON}
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            background: "#6366f1",
            color: "white",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          📦 Export
        </button>
      </div>

      {/* Logs Box */}
      <div
        style={{
          background: "#f9fafb",
          borderRadius: "8px",
          padding: "10px",
          height: "180px",
          overflowY: "auto",
          border: "1px solid #e5e7eb",
        }}
      >
        {logs.length === 0 ? (
          <p style={{ fontSize: "14px", color: "#888" }}>
            Run simulation to see output
          </p>
        ) : (
          logs.map((log, index) => (
            <div
              key={index}
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                padding: "6px 8px",
                borderRadius: "6px",
                background: log.includes("❌")
                  ? "#fee2e2"
                  : "#eef2ff",
                color: log.includes("❌") ? "#b91c1c" : "#1e293b",
              }}
            >
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Simulator;