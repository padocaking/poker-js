import DeckCard from "./Components/DeckCard";
import PlayerCard from "./Components/PlayerCard";
import { TableVisuals } from "./Components/TableVisuals";
import { useDragStore } from "./stores/useDrag";

export default function App () {
    const { drag, endDrag } = useDragStore();

    return (
        <>
        {/* MAIN BACKGROUND */}
        <div
            className="
                bg-[url('https://static.vecteezy.com/system/resources/thumbnails/006/029/969/small_2x/blue-sky-skyscape-background-concept-free-vector.jpg')]
                bg-cover
                h-screen
                w-screen
                flex
                justify-center
                items-center
                relative
            "
            onMouseMove={drag}
            onMouseUp={endDrag}
        >
            {/* BORDA INTERIOR DA MESA */}
            <TableVisuals>
                <div className="w-[73%] h-full flex items-center gap-2.5">
                    <DeckCard rank="A" suit="♠" id={0} />
                    <DeckCard rank="K" suit="♠" id={1} />
                    <DeckCard rank="Q" suit="♠" id={2} />
                    <DeckCard rank="J" suit="♠" id={3} />
                    <DeckCard rank="10" suit="♠" id={4} />
                </div>
                <PlayerCard />
            </TableVisuals>
        </div>
        </>
    )
}