import { useState } from "react"
import useGetWidth from "../Services/useGetWidth";
import DeckCard from "./DeckCard";

type PlayerCardProps = {
    id: number,
    img: string,
    name: string,
    balance: number,
    button: boolean
}

export default function PlayerCard({ id, img, name, balance, button} : PlayerCardProps) {
    // STATES DOS CARDS DE AÇÃO & MÃO FINAL
    const [openAction, setOpenAction] = useState(false);
    const [openHand, setOpenHand] = useState(true);

    // CURRENT WIDTH GETTER
    let width = useGetWidth();

    // VARIAVEIS COM TAMANHOS DE FONTES DINÂMICAS
    let titleFont =     width * 0.005 + 4.5;
    let balanceFont =   width * 0.011 + 1.83;
    let actionFont =    width * 0.008 + 4.17;
    let handFont =      width * 0.005 + 5.5;

    // MAP DE ID -> POSIÇÃO NA MESA
    type Pos = {
        bottom: string,
        top: string,
        left: string,
        right: string
    }

    const tablePos : Record<number, Pos> = {
        0: {
            bottom: '4%',
            top: '',
            left: '41%',
            right: ''
        },

        1: {
            bottom: '13%',
            top: '',
            left: '3%',
            right: ''
        },

        2: {
            bottom: '44%',
            top: '',
            left: '-7%',
            right: ''
        },

        3: {
            bottom: '',
            top: '13%',
            left: '3%',
            right: ''
        },

        4: {
            bottom: '',
            top: '4%',
            left: '41%',
            right: ''
        },

        5: {
            bottom: '',
            top: '13%',
            left: '',
            right: '0%'
        },

        6: {
            bottom: '44%',
            top: '',
            left: '',
            right: '-13%'
        },

        7: {
            bottom: '13%',
            top: '',
            left: '',
            right: '0%'
        },
    }

    // TO DO:
    // - PLAYER CARDS
    // - POSITIONS ON BOARD BASED ON ID

    return (
        <>
        {/* CARD DO PLAYER */}
        <div
            className="
                bottom-[8%]
                h-[12%]
                w-[22%]
                absolute
                z-20
            "
            style={{
                bottom: tablePos[id].bottom,
                top: tablePos[id].top,
                left: tablePos[id].left,
                right: tablePos[id].right
            }}
        >

            {/* DIV DO JOGADOR PRINCIPAL */}
            <div
                className="
                    relative
                    w-full
                    h-full
                "
                style={{
                    display: '',
                }}
            >

                {/* CARTAS DOS JOGADORES */}
                <div
                    className="
                        absolute
                        w-[80%]
                        h-full
                        top-[-80%]
                        left-[10%]
                        flex
                        z-[-1]
                    "
                >
                    <DeckCard playerCard id={'p'+id} backCard={true} rank={""} suit={""} rotate={false} />
                    <DeckCard playerCard rotate id={'p'+id+'b'} backCard={true} rank={""} suit={""} />
                </div>

                {/* BOTÃO DO DEALER */}
                <div
                    className="
                        absolute
                        right-[-7%]
                        top-[20%]
                        z-10
                        text-red-500
                        bg-amber-50
                        border-red-500
                        rounded-full
                        items-center
                        justify-center
                        p-[5%]
                        w-[18%]
                        h-[40%]
                        font-bold
                    "
                    style={{
                        display: `${button ? 'flex' : 'none'}`,
                        borderWidth: `${handFont - 14}px`,
                        fontSize: handFont
                    }}
                >
                    D
                </div>

                {/* IMAGEM DO AVATAR */}
                <div
                    className="
                        rounded-[100%]
                        bg-white
                        h-[120%]
                        w-[48%]
                        absolute
                        left-[-35%]
                        top-[-25%]
                        flex
                        items-center
                        justify-center
                        z-10
                        overflow-hidden
                    "
                >
                    <img
                        src={img}
                        alt="Avatar"
                        srcSet=""
                        className="
                            w-full
                            h-full
                            object-cover
                            object-center
                        "   
                    />
                </div>

                {/* PLAYER INFO */}
                <div
                    className="
                        flex
                        flex-col
                        h-full
                        w-full
                    "
                >
                    {/* NOME E BALANÇO */}
                    <div
                        className="
                            bg-sky-700
                            h-[72%]
                            flex
                            flex-col
                            items-center
                            justify-around
                            leading-none
                            p-[5%]
                            gap-[5px]
                            rounded-[0_100px_100px_0]
                            z-5
                            shadow-[0px_10px_15px_-15px_black]
                        "
                    >
                        <span className="text-lime-200" style={{fontSize: titleFont}}>{name}</span>
                        <span className="font-bold" style={{fontSize: balanceFont}}>${balance}</span>
                    </div>

                    {/* INFORMAÇÃO DA AÇÃO */}
                    <div
                        className={`
                            bg-sky-700
                            flex
                            items-center
                            justify-center
                            w-[85%]
                            absolute
                            top-[65%]
                            left-[5%]
                            rounded-[0_0_5px_5px]
                            overflow-hidden
                            shadow-2xl
                            pt-1
                            z-4
                        `}
                        style={{height: `${openAction ? '45%' : '0%'}`}}
                    >
                        <span className="text-lime-300 font-bold"  style={{fontSize: actionFont}}>
                            CHECK
                        </span>
                    </div>

                    {/* INFORMAÇÃO DA MÃO */}
                    <div
                        className={`
                            bg-sky-950
                            flex
                            items-center
                            justify-center
                            w-[75%]
                            absolute
                            top-[67%]
                            left-[10%]
                            rounded-[0_0_5px_5px]
                            overflow-hidden
                            shadow-2xl
                            z-4
                        `}
                        style={{height: `${openHand ? '45%' : '0%'}`}}
                    >
                        <span className="text-white font-bold"  style={{fontSize: handFont}}>
                            TWO PAIRS
                        </span>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}