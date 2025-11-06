import { useState } from "react"
import useGetWidth from "../Services/useGetWidth";

export default function PlayerCard({ button = false }) {
    const [openAction, setOpenAction] = useState(false);
    const [openHand, setOpenHand] = useState(true);

    let width = useGetWidth();

    let titleFont =     width * 0.005 + 4.5;
    let balanceFont =   width * 0.011 + 1.83;
    let actionFont =    width * 0.008 + 4.17;
    let handFont =      width * 0.005 + 5.5;

    // TO DO:
    // - DEALER BUTTON
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
            "
        >
            {/* DIV PRINCIPAL */}
            <div
                className="
                    relative
                    w-full
                    h-full
                "
            >

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
                        flex
                        items-center
                        justify-center
                        p-[5%]
                        w-[18%]
                        h-[40%]
                        font-bold
                    "
                    style={{
                        borderWidth: `${handFont - 14}px`,
                        fontSize: handFont
                    }}
                >D</div>

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
                        src="https://f4.bcbits.com/img/a4056940133_10.jpg"
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
                            h-[80%]
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
                        <span className="text-lime-200" style={{fontSize: titleFont}}>PADOCAKING</span>
                        <span className="font-bold" style={{fontSize: balanceFont}}>$900</span>
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
                            top-[75%]
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
                            top-[75%]
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