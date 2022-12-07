import Header from "../components/Header"
import MockResponse from "../data/MockResponse"
import SearchResults from "../components/SearchResults"

export default function Search({ results }) {
    return (
        <div>
            <Header />
            <SearchResults results={results} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const useDummyData = false
    const startIndex = context.query.start || "0"
    const data = useDummyData
        ? MockResponse
        : await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${encodeURI(context.query.input)}&start=${startIndex}`
        ).then((response) => response.json())

    return {
        props: {
            results: data,
        },
    }
}
