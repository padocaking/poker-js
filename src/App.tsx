import DeckCard from "./Components/DeckCard";
import PlayerCard from "./Components/PlayerCard";
import { TableVisuals } from "./Components/TableVisuals";
import useGetWidth from "./Services/useGetWidth";
import { useDragStore } from "./stores/useDrag";
import game, { Game } from "./Script/Game";
import AddPlayerCard from "./Components/AddPlayerCard";


const RenderPlayers = () => {
    return [...Array(8)].map((_, i) => {
        const player = game.players.find(p => p.id == i);

        return player ? (
            <PlayerCard
                key={i}
                id={player.id}
                button={player.id == 0}
                img={player.image}
                name={player.name}
                balance={player.balance}
            />
        ) : (
            <AddPlayerCard key={i} id={i} />
        )
    })
};

export default function App () {
    const { drag, endDrag } = useDragStore();

    let width = useGetWidth();
    
    return (
        <>
        {/* "BODY" (COM IMAGEM BACKGROUND) */}
        <div
            className="
                flex
                items-center
                justify-center
                min-w-screen
                min-h-screen
                bg-[url('https://static.vecteezy.com/system/resources/thumbnails/006/029/969/small_2x/blue-sky-skyscape-background-concept-free-vector.jpg')]
                bg-cover
                select-none
            "
            style={{
                backgroundColor: '#21462b',
                opacity: '1',
                backgroundImage:  'linear-gradient(#173b20 2.5px, transparent 2.5px), linear-gradient(to right, #173b20 2.5px, #21462b 2.5px)',
                backgroundSize: '3.5% 7%',
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 200px 0px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
            }}
        >
        {/* CONTEÚDO DO BACKGROUND */}
            <div
                className={`
                    w-full
                    flex
                    justify-center
                    items-center
                    relative
                `}
                style={{
                    height: `${width/2.15}px`
                }}

                onMouseMove={drag}
                onMouseUp={endDrag}
            >
                {/* MESA */}
                <TableVisuals>
                    <div className="w-[75%] h-full flex items-center gap-[2.5%]">
                        <DeckCard rank="A" suit="♠" id={'0'} rotate={false} playerCard={false} backCard={false} />
                        <DeckCard rank="K" suit="♠" id={'1'} rotate={false} playerCard={false} backCard={false} />
                        <DeckCard rank="Q" suit="♠" id={'2'} rotate={false} playerCard={false} backCard={false} />
                        <DeckCard rank="J" suit="♠" id={'3'} rotate={false} playerCard={false} backCard={false} />
                        <DeckCard rank="10" suit="♠" id={'4'} rotate={false} playerCard={false} backCard={false} />
                    </div>
                    <RenderPlayers />
                </TableVisuals>
            </div>
        </div>
        </>
    )
}