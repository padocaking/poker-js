import { TableVisuals } from "./Components/TableVisuals";

export default function App () {
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
        >
            {/* BORDA INTERIOR DA MESA */}
            <TableVisuals>
                <div>TABLE CONTENT HERE</div>
            </TableVisuals>
        </div>
        </>
    )
}