export default function AddPlayerCard ({ id = 0 }) {

    // MAP DE ID -> POSIÇÃO NA MESA
    type Pos = {
        bottom: string,
        top: string,
        left: string,
        right: string
    }

    const tablePos : Record<number, Pos> = {
        0: {
            bottom: '0%',
            top: '',
            left: '46%',
            right: ''
        },

        1: {
            bottom: '14%',
            top: '',
            left: '8%',
            right: ''
        },

        2: {
            bottom: '44%',
            top: '',
            left: '-2%',
            right: ''
        },

        3: {
            bottom: '',
            top: '14%',
            left: '8%',
            right: ''
        },

        4: {
            bottom: '',
            top: '0%',
            left: '46%',
            right: ''
        },

        5: {
            bottom: '',
            top: '14%',
            left: '',
            right: '8%'
        },

        6: {
            bottom: '44%',
            top: '',
            left: '',
            right: '-2%'
        },

        7: {
            bottom: '14%',
            top: '',
            left: '',
            right: '8%'
        },
    }

    return (
        <>
        {/* DIV PRINCIPAL */}
        <div
            className="
                absolute
                bg-sky-600
                z-21
                w-[10%]
                h-[14%]
                rounded-[100%]
                cursor-pointer
                hover:scale-[95%]
                active:scale-[105%]
            "
            style={{
                bottom: tablePos[id].bottom,
                top: tablePos[id].top,
                left: tablePos[id].left,
                right: tablePos[id].right
            }}
        >
            {/* TRAÇO VERTICAL */}
            <div
                className="
                    bg-white
                    w-[10%]
                    h-[60%]
                    translate-x-[450%]
                    translate-y-[30%]
                    rounded-4xl
                "
            ></div>
            {/* TRAÇO HORIZONTAL */}
            <div
                className="
                    bg-white
                    w-[60%]
                    h-[10%]
                    translate-x-[32%]
                    translate-y-[-160%]
                    rounded-4xl
                "
            ></div>
        </div>
        </>
    )
}