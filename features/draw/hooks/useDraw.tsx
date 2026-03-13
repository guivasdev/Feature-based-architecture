import { useState } from "react";
import { getRandomQuote } from "../services/Draw";

export function useDraw() {
    const [resultString, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleDraw() {
        try {
            setLoading(true);

            const quote = await getRandomQuote();

            setResult(quote);

        } catch (error) {
            setResult("Erro ao gerar a piada 😢");
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    return {
        resultString, setResult, loading, setLoading, handleDraw
    }
}