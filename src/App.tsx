import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import {Tree} from "./components/Tree/Tree.tsx";
import KanbanBoard from "./components/Kanban/KanbanBoard.tsx";

export default function App() {
    const location = useLocation();

    const linkClass = (path: string) =>
        `font-medium pb-1 ${
            location.pathname === path
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
        }`;

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white border-b px-6 py-3 flex gap-6">
                <Link to="/tree" className={linkClass("/tree")}>
                    Tree View
                </Link>

                <Link to="/kanban" className={linkClass("/kanban")}>
                    Kanban Board
                </Link>
            </nav>

            <main className="p-6">
                <Routes>
                    <Route path="/" element={<Navigate to="/tree" replace />} />
                    <Route path="/tree" element={<Tree />} />
                    <Route path="/kanban" element={<KanbanBoard />} />
                </Routes>
            </main>
        </div>
    );
}
