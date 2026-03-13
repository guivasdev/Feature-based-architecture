export async function getRandomQuote() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
        throw new Error("Erro ao buscar piada");
    }

    const data = await response.json();
    console.log(data)

    return `${data.punchline} — ${data.setup}`;
}