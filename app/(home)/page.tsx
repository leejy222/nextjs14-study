export const metadata = {
    title: "Home"
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    
    await new Promise((resolve) => setTimeout(resolve,3000));
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            <h1>Home Page !</h1>
            { JSON.stringify(movies) }
        </div>
    )
}