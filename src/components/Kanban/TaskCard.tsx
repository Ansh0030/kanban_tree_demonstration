import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { FaGripVertical } from "react-icons/fa";
import type { Task } from "../../types/kanban.types";

export default function TaskCard({
                                     task,
                                     columnId
                                 }: {
    task: Task;
    columnId: string;
}) {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useDraggable({
            id: `${columnId}|${task.id}`
        });

    const style = {
        transform: CSS.Transform.toString(transform),
        opacity: isDragging ? 0 : 1
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="bg-white p-2 rounded shadow flex items-center gap-2"
        >
      <span
          {...listeners}
          {...attributes}
          className="cursor-grab text-gray-400 hover:text-gray-600"
      >
        <FaGripVertical />
      </span>

            <span className="text-sm">{task.text}</span>
        </div>
    );
}
