import DeckCard from "./Components/DeckCard";
import PlayerCard from "./Components/PlayerCard";
import { TableVisuals } from "./Components/TableVisuals";
import useGetWidth from "./Services/useGetWidth";
import { useDragStore } from "./stores/useDrag";

export default function App () {
    const { drag, endDrag } = useDragStore();

    let width = useGetWidth();
    console.log(width)

    return (
        <>
        {/* "BODY" */}
        <div
            className="
                flex
                items-center
                justify-center
                w-screen
                h-screen
                bg-[url('https://static.vecteezy.com/system/resources/thumbnails/006/029/969/small_2x/blue-sky-skyscape-background-concept-free-vector.jpg')]
                bg-cover
            "
        >
        {/* MAIN BACKGROUND */}
            <div
                className={`
                    w-full
                    flex
                    justify-center
                    items-center
                    relative
                `}
                style={{
                    height: `${width/2}px`
                }}

                onMouseMove={drag}
                onMouseUp={endDrag}
            >
                {/* BORDA INTERIOR DA MESA */}
                <TableVisuals>
                    <div className="w-[75%] h-full flex items-center gap-[2.5%]">
                        <DeckCard rank="A" suit="♠" id={'0'} />
                        <DeckCard rank="K" suit="♠" id={'1'} />
                        <DeckCard rank="Q" suit="♠" id={'2'} />
                        <DeckCard rank="J" suit="♠" id={'3'} />
                        <DeckCard rank="10" suit="♠" id={'4'} />
                    </div>
                    <PlayerCard id={0} />
                    <PlayerCard id={1} button />
                    <PlayerCard id={2} />
                </TableVisuals>
            </div>
        </div>
        </>
    )
}