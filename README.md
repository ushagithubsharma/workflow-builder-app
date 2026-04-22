                                              Workflow Builder Application
->Overview

This project is a dynamic Workflow Builder application that allows users to create, configure, and simulate workflows using different types of nodes such as Start, Task, Approval, Automated, and End.
The application focuses on clean architecture, dynamic UI rendering, and logical workflow execution.

->Architecture

The application is built using React.js with Zustand for state management.

* Key Layers:
•	UI Layer: Sidebar, Canvas, Config Panel, Simulator
•	State Layer: Zustand store for managing nodes and configurations
•	Logic Layer: Workflow simulation logic (mock API)

* Folder Structure:
•	components/ → UI components
•	store/ → Zustand state management
•	api/ → Simulation logic

* How to Run
1.	Clone the repository:
2.	git clone <your-repo-link>
3.	cd <project-folder>
4.	Install dependencies:
5.	npm install
6.	Start the application:
7.	npm run dev
8.	Open in browser:
9.	http://localhost:5173

->Features Implemented

* Core Features:
•	Dynamic node creation (Start, Task, Approval, Automated, End)
•	Node selection and configuration panel
•	Real-time state updates using Zustand
•	Workflow simulation engine
•	Conditional logic handling (approval thresholds, actions)

* Additional Features:
•	Workflow validation (required fields, logical checks, date validation)
•	JSON export functionality
•	Improved UI with card-based layout and structured panels

-> Design Decisions
•	Zustand for state management: Lightweight and simpler than Redux
•	Component-based architecture: Improves scalability and maintainability
•	Separation of concerns:
o	UI (components)
o	State (store)
o	Logic (simulation)
•	Validation before execution: Ensures correct workflow behavior
•	Extensible node structure: Easy to add new node types

->What is Completed vs Future Improvements

* Completed:
•	Core workflow builder functionality
•	Dynamic configuration system
•	Simulation engine with conditional logic
•	Validation system
•	JSON export feature

 *Future Improvements:
•	Import workflow from JSON
•	Undo/Redo functionality
•	Drag-and-drop node arrangement
•	Visual error highlighting on nodes
•	Auto-layout and node connections
•	Zoom and mini-map support


