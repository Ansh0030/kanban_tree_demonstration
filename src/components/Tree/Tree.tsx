import {useState} from "react";
import {DndContext, type DragEndEvent, DragOverlay, type DragStartEvent} from "@dnd-kit/core";
import type {TreeNode} from "../../types/tree.types.ts";
import {initialTree} from "../../data/initialTree.ts";
import {addNode, deleteNode, findNode, insertNode, removeNode, renameNode} from "../../helpers/treeHelpers.ts";
import DragPreview from "./DragPreview.tsx";
import { TreeNodeRec } from "./TreeNode";

export function Tree() {
    const [tree, setTree] = useState<TreeNode>(initialTree);
    const [activeNode, setActiveNode] = useState<TreeNode | null>(null);

    const handleDragStart = (event: DragStartEvent) => {
        const dragged = findNode(tree, String(event.active.id));
        if (dragged) setActiveNode(dragged);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveNode(null);

        if (!over || active.id === over.id) return;

        const draggedNode = findNode(tree, String(active.id));
        if (!draggedNode) return;

        let updatedTree = removeNode(tree, String(active.id));
        updatedTree = insertNode(updatedTree, String(over.id), draggedNode);

        setTree(updatedTree);
    };

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="p-4">
                <TreeNodeRec
                    node={tree}
                    onRename={(id, name) =>
                        setTree((p) => renameNode(p, id, name))
                    }
                    onAdd={(id) =>
                        setTree((p) => addNode(p, id))
                    }
                    onDelete={(id) =>
                        setTree((p) => deleteNode(p, id)!)
                    }
                />
            </div>

            <DragOverlay>
                {activeNode && <DragPreview node={activeNode} />}
            </DragOverlay>
        </DndContext>
    );
}