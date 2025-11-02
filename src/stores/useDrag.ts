import { create } from "zustand";

interface Position {
    x: number;
    y: number;
}

interface DragState {
    cardId: number,
    startPos: Position;
    position: Position;
    dragging: boolean;

    startDrag: (e: React.MouseEvent, id: number) => void;
    drag: (e: React.MouseEvent) => void;
    endDrag: (e: React.MouseEvent) => void;
}

export const useDragStore = create<DragState>((set, get) => ({
    cardId: 0,
    startPos: { x:0, y:0},
    position: { x:0, y:0 },
    dragging: false,

    startDrag: (e, id) => {
        set({ cardId: id })
        set({
            dragging: true,
            startPos: { x: e.clientX, y: e.clientY },
        });
    },

    drag: (e) => {
        const { dragging, startPos } = get();
        if (!dragging) return;

        set({
            position: {
                x: e.clientX - startPos.x,
                y: e.clientY - startPos.y,
            },
        });
    },

    endDrag: () => {
        set({
            dragging: false,
            position: { x:0, y:0 },
        });
    },
}));