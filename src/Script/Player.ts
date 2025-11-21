import type { Card } from "./Card";

const images = [
    'https://f4.bcbits.com/img/a4056940133_10.jpg',
    'https://wallpapers.com/images/featured/fotos-do-nicolas-cage-dc6w7bas472ewg5z.jpg',
    'https://ih1.redbubble.net/image.1603557678.9463/raf,360x360,075,t,fafafa:ca443f4786.u1.jpg',
    'https://i.pinimg.com/474x/30/e2/1e/30e21ea1b3b4e18e082cdbc84e9af571.jpg',
    'https://i.pinimg.com/736x/59/c7/df/59c7dfefe3bf2e9c7058d3045e9ea560.jpg',
    'https://m.media-amazon.com/images/I/61wxAPifCCL._AC_UF894,1000_QL80_.jpg',
    'https://ih1.redbubble.net/image.3808537520.3221/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    'https://i.pinimg.com/236x/cb/6c/01/cb6c0178dc32ea8d0d8703fca9ef7a68.jpg',
    'https://i.pinimg.com/474x/a2/2b/ff/a22bfffa17c25940449ce711defdbce3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Uji3yIxThtVIvvihha8pVFKuKFBCj_u0c5nwUAzqta85TbuA84EQ5eMQCkCKMVlx3mQ&usqp=CAU',
    'https://i.pinimg.com/236x/ba/f9/58/baf958abca0e1e917e8520ea2dab5726.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9ayFHOaFGTxxJxlSfLLPjVNrCaFIq0pq1p-ky9PKDPpOJMZDQVHktBd56zffTvQK1RY&usqp=CAU',
    'https://pbs.twimg.com/media/DvcYTsOX4AIKVSe.jpg',
    'https://i.pinimg.com/736x/59/ab/a1/59aba14d4369040402b0007ce247273c.jpg',
    'https://i.pinimg.com/474x/f7/29/b7/f729b7acf9a1c056d2bd97bdb2140244.jpg',
    'https://i.pinimg.com/236x/bc/06/bd/bc06bd20c3aa411daa61a53569a3e710.jpg',
    'https://i.redd.it/fo3qemtoagx91.jpg',
    'https://i.pinimg.com/736x/64/0d/ad/640dad511bebe9e45ba68840fe8ac069.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJK47C5WRP-HUVK6A-kuXBnh0T2eTC_wpCKEGpaFCSKU57vM4UmmITEzy5faUqTKhzf5k&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKDCL3UC7QROThIl_PYpaURKlkh3AOX-mhGPr9AixS71lexgztQ41cIbPhGxhx-IiayU&usqp=CAU',
    'https://www.astortheatre.net.au/wp-content/uploads/1408918510-nicolas-cage-001-200x132.jpg',
    'https://i1.sndcdn.com/artworks-yy2YszflPsukoKFl-vS64SQ-t1080x1080.jpg',
    'https://www.zbrushcentral.com/uploads/default/original/4X/4/a/a/4aad36ca1281b9f2a95e76db4ccb22073fb375eb.jpeg',
    'https://ih1.redbubble.net/image.674836688.3194/st,extra_large,507x507-pad,600x600,f8f8f8.u3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OLfcW2IT_MvsGjPJOtt_HcFefmCulE0pnQ&s',
    'https://i.etsystatic.com/28063779/r/il/bbf7e4/3810297495/il_570xN.3810297495_ifzx.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9raPDn53d5XP47FsOr792eIAl7UKL7Ox0IET60GoS9sCNk7VjHtryBodQI6t5PikNoE&usqp=CAU',
    'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_20151020-25144-4y7mma.jpg?resize=920,613',
    'https://www.dexerto.com/cdn-image/wp-content/uploads/2024/02/14/Baldurs-Gate-3-Nicolas-Cage.jpg'
]

class Player {
    id: number;
    name: string;
    image: string;
    balance: number;
    position: number;
    hand: Card[];
    potBet: number;
    roundBet: number;
    fold: boolean;

    constructor (id: number, name: string, balance: number, position: number) {
        this.id = id;
        this.name = name;
        this.image = images[Math.floor(Math.random() * images.length)];
        this.balance = balance;
        this.position = position;
        this.hand = [];
        this.potBet = 0;
        this.roundBet = 0;
        this.fold = false;
    }
}

export default Player