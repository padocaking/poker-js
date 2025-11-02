import type { ReactNode } from "react"

type TableVisualsProps = {
    children: ReactNode;
}

export function TableVisuals ({ children }: TableVisualsProps ) {
    return (
        <>
            {/* SOMBRA INFERIOR DA BORDA */}
            <div
                className="
                    absolute
                    translate-y-[5%]
                    w-[50%]
                    h-6/8
                    bg-sky-950
                    rounded-[50%]
                    z-0
                "
            ></div>

            {/* BORDA DA MESA + SOMBRA SUPERIOR DA BORDA (AFTER) */}
            <div
                className="
                    relative
                    z-10
                    bg-sky-800
                    p-[2%_3%]
                    w-[50%]
                    h-[75%]
                    rounded-[50%]

                    after:content-['']
                    after:absolute
                    after:top-[-1.5%]
                    after:left-[6%]
                    after:w-[88%]
                    after:h-full
                    after:rounded-[50%]
                    after:border-sky-950
                    after:border-t-17
                    after:rotate-x-30
                    after:z-10
                    "
            >
                {/* BORDA INTERIOR DA MESA */}
                <div
                    className="
                        bg-blue-300
                        w-full
                        h-full
                        rounded-[50%]
                        inset-shadow-2xs
                        shadow-[inset_0_0_10px_black]
                        p-[4%_3%_3%_3%]
                    "
                >   
                    {/* MESA INTERNA */}
                    <div
                        className="
                            bg-[#85ac86]
                            text-white
                            w-full
                            h-full
                            rounded-[50%]
                            border-gray-100
                            border-t-[0.6rem]
                            border-l-[0.8rem]
                            border-r-[0.8rem]
                            border-b-[1rem]
                            flex
                            items-center
                            justify-center
                        "
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}