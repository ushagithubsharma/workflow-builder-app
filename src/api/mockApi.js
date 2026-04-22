export const getActions = () => {
  return [
    {
      id: "send_email",
      label: "Send Email",
      params: ["to", "subject"],
    },
    {
      id: "generate_doc",
      label: "Generate Document",
      params: ["template", "recipient"],
    },
  ];
};

export const simulateWorkflow = (nodes) => {
  let logs = [];
  let summary = [];

  nodes.forEach((node) => {
    // 🔹 START NODE
    if (node.type === "start") {
      const title = node.config?.title || "No title";
      logs.push(`Start: ${title}`);
    }

    // 🔹 TASK NODE
    if (node.type === "task") {
      const title = node.config?.title || "No task";
      const assignee = node.config?.assignee || "No assignee";

      logs.push(`Task: ${title} (Assigned to: ${assignee})`);
      summary.push(title);
    }

    // 🔹 APPROVAL NODE
    if (node.type === "approval") {
      const role = node.config?.role || "Unknown";
      const threshold = Number(node.config?.threshold || 0);

      if (threshold < 500) {
        logs.push(`Auto-approved by ${role}`);
      } else {
        logs.push(`Waiting approval from ${role}`);
      }
    }

    // 🔹 AUTOMATED NODE (FIXED 🔥)
    if (node.type === "automated") {
      const action = node.config?.action;
      const param = node.config?.param || "";

      if (action === "send_email") {
        logs.push(`Email sent with: ${param}`);
      } else if (action === "generate_doc") {
        logs.push(`Document generated for: ${param}`);
      } else {
        logs.push("Automated step executed");
      }
    }

    // 🔹 END NODE
    if (node.type === "end") {
      const message = node.config?.message || "Workflow completed";

      logs.push(`End: ${message}`);

      if (node.config?.summary) {
        logs.push("Summary:");
        summary.forEach((item, index) => {
          logs.push(`${index + 1}. ${item}`);
        });
      }
    }
  });

  return logs;
};