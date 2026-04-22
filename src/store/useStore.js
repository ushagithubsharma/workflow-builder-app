import { create } from "zustand";

const useStore = create((set) => ({
  nodes: [],
  selectedNode: null,

  // ➕ Add Node
  addNode: (node) =>
    set((state) => ({
      nodes: [...state.nodes, node],
    })),

  // ❌ Delete Node
  deleteNode: (id) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== id),
      selectedNode:
        state.selectedNode?.id === id ? null : state.selectedNode,
    })),

  // 🎯 Select Node
  setSelectedNode: (node) =>
    set(() => ({
      selectedNode: node,
    })),

  // 🔥 FULL NODE UPDATE (IMPORTANT FIX)
  updateNode: (updatedNode) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === updatedNode.id ? updatedNode : node
      ),
      selectedNode: updatedNode,
    })),

  // ⚙️ Update Config (optional helper)
  updateNodeConfig: (id, key, value) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id
          ? {
              ...node,
              config: {
                ...node.config,
                [key]: value,
              },
            }
          : node
      ),

      selectedNode:
        state.selectedNode?.id === id
          ? {
              ...state.selectedNode,
              config: {
                ...state.selectedNode.config,
                [key]: value,
              },
            }
          : state.selectedNode,
    })),
}));

export default useStore;