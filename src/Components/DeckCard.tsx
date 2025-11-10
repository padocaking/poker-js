import useGetWidth from "../Services/useGetWidth";
import { useDragStore } from "../stores/useDrag";

type DeckCardProps = {
    rank: string,
    suit: string,
    id: string,
    rotate: boolean,
    playerCard: boolean,
    backCard: boolean
}

export default function DeckCard({
        rank = 'A',
        suit = '♥',
        id = '',
        rotate = false,
        playerCard = false,
        backCard = false
    } : DeckCardProps){

    const { cardId, position, dragging, startDrag } = useDragStore();
    
    const color = (suit === "♥" || suit === "♦") ? 'text-red-500' : 'text-black';

    let width = useGetWidth();
    
    // TAMANHOS PROPORCIONAIS AO WIDTH
    const cornerFontSize = 0.0092 * width + 1.083;
    const cornerSuitSize = 0.0092 * width + 1.083;
    const centerSuitSize = 0.02 * width + 2.9;
  
    return (
        <div 
            className={`
                cursor-pointer
                relative
                bg-gray-50
                w-${playerCard ? '[100%]' : '[18%]'}
                h-${playerCard ? '[120%]' : '[25%]'}
                flex
                flex-col
                items-center
                justify-center
                select-none
                rounded-xl
                shadow-xl
                ${rotate ? 'left-[-10%]' : null}
                ${rotate ? 'top-[15%]' : null}
                ${!dragging ? 'hover:scale-95' : null}
                ${dragging && cardId === id ? 'scale-105' : null}
                ${dragging && cardId === id ? 'z-999' : 'z-100'}
            `}
            onMouseDown={(e) => startDrag(e, id)}
            style={{
                rotate: `${rotate && !dragging || rotate && dragging && cardId !== id ? `15deg` : `0deg`}`,
                transform: `${cardId === id ? `translate(${position.x}px, ${position.y}px)` : null}`,
                transition: "all 0.2s, transform 0.2s ease-out",
            }}
        >
            {/* CANTO SUPERIOR ESQUERDO */}
            <div 
                className={`
                    top-[5%]
                    left-[5%]
                    absolute
                    flex
                    flex-col
                    items-center
                    ${color}
                    font-bold
                `}
                style={{
                    display: backCard ? 'none' : 'flex'
                }}
                >
                <span 
                    className="leading-none"
                    style={{ fontSize: `${cornerFontSize}px` }}
                >
                    {rank}
                </span>
                <span 
                    className="leading-none"
                    style={{ fontSize: `${cornerSuitSize}px` }}
                >
                    {suit}
                </span>
            </div>


            {/* CENTRO DA CARTA */}
            <div
                className="
                    flex-1
                    flex
                    items-center
                    justify-center
                "
                style={{
                    display: backCard ? 'none' : 'flex'
                }}
            >
                <span 
                    className={color}
                    style={{ fontSize: `${centerSuitSize}px` }}
                >
                    {suit}
                </span>
            </div>


            {/* CANTO INFERIOR DA CARTA (invertido) */}
            <div 
                className={`
                    absolute
                    bottom-[5%]
                    right-[5%]
                    flex
                    flex-col
                    items-center
                    ${color}
                    font-bold
                    rotate-180
                `}
                style={{
                    display: backCard ? 'none' : 'flex'
                }}
            >
                <span 
                    className="leading-none"
                    style={{ fontSize: `${cornerFontSize}px` }}
                >
                    {rank}
                </span>
                <span 
                    className="leading-none"
                    style={{ fontSize: `${cornerSuitSize}px` }}
                >
                    {suit}
                </span>
            </div>


            {/* COSTAS DA CARTA */}
            <div
                className="
                    w-[93%]
                    h-[94%]
                    bg-red-600
                    overflow-hidden
                    rounded-xl
                "
                style={{
                    display: !backCard ? 'none' : 'flex',
                    backgroundColor: '#ff0000',
                    opacity: '0.8',
                    backgroundImage:  'linear-gradient(135deg, #f63636 25%, transparent 25%), linear-gradient(225deg, #f63636 25%, transparent 25%), linear-gradient(45deg, #f63636 25%, transparent 25%), linear-gradient(315deg, #f63636 25%, #ff0000 25%)',
                    backgroundPosition:  '10px 0, 10px 0, 0 0, 0 0',
                    backgroundSize: '10px 10px',
                    backgroundRepeat: 'repeat'
                }}
            ></div>

        </div>
    );
}