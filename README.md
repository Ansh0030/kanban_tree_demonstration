
---

## 🌳 Tree View Features

- Recursive tree rendering
- Expand / collapse nodes
- Add new nodes
- Rename nodes (inline editing)
- Delete nodes
- Drag and drop support
- Visual hierarchy with indentation
- Read-only nodes for external links (portfolio)

### Key Concepts
- Recursive components
- Immutable state updates
- Controlled inputs
- Drag handles for better UX

---

## 🗂 Kanban Board Features

- Three columns: **To Do**, **In Progress**, **Done**
- Task count per column
- Add, rename, and delete tasks
- Drag tasks between columns
- Grab-handle based dragging
- Drag overlay preview for smooth UX
- Color-coded column headers

### Key Concepts
- @dnd-kit drag-and-drop system
- DragOverlay for active item preview
- State normalization
- Component separation

---

## 🧭 Navigation

A simple navigation bar allows switching between:
- Tree View
- Kanban Board

Routing is implemented using **React Router DOM** without unnecessary abstraction.

---

## 🎨 Styling

- Tailwind CSS v4
- Light grey container backgrounds
- Color-coded buttons and column headers
- Consistent spacing and layout
- Clean, minimal UI focused on usability

---

## ▶️ Getting Started

```bash
npm install
npm run dev
