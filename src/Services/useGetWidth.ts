import { useEffect, useState } from "react";

export default function useGetWidth () {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );
    
    useEffect(() => {
        // Função para atualizar o estado
        const handleResize = () => {
        setWindowWidth(window.innerWidth)
        };

        // Adiciona o listener
        window.addEventListener("resize", handleResize)

        // Remove o listener na limpeza (unmount)
        return () => {
        window.removeEventListener("resize", handleResize)
        };
    }, [])

    return windowWidth
}