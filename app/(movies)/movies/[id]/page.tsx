import { Suspense } from "react";
import { API_URL } from "../../../constants";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: { id: string };
}

export async function generateMetadata({params:{id}}: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }
}

export default async function MovieDetailPage({
        params:{id}, 
    }: {
        params: {id:string}
    }) {
        // const [movie, videos] = await Promise.all([getMovie(id),getVideos(id)])
    return (
        <div>
            <h1>Movie Detail Page</h1>
            <Suspense fallback={<h1>Loading Movie Info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <h1>Video</h1>
            <Suspense fallback={<h1>Loading Movie Videos... </h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>            
    )
}