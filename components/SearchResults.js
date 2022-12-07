import PaginationButtons from "./PaginationButtons"
import { getThumbnail, getLogo, getUrl, getDescription, getLink, getName } from "../data/getInfo"

export default function SearchResults({ results }) {
    return (
        <div>
            {results.items?.map((result) => {
                return (
                    <div className="grid gap-2 m-4 bg-zinc-800/25 rounded-2xl p-4 lg:ml-[12.5rem]">
                        <div>
                            <div className="flex gap-2 items-center">
                                {getLogo(result)}
                                {getUrl(result)}
                            </div>
                            <div>
                                {getLink(result)}
                                {getDescription(result)}
                            </div>
                        </div>
                        <div>
                            {getThumbnail(result)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
