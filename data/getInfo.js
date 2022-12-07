import Image from "next/image"

function getLogo(result) {
    if (result.displayLink) {
        return <Image src={`https://www.google.com/s2/favicons?domain=${result.displayLink}&sz=128`} width={24} height={24} alt="" className="rounded-2xl" />
    }
}
function getThumbnail(result) {
    if (result.pagemap?.cse_image?.[0]?.src) {
        return <Image src={result.pagemap.cse_image[0].src} width={196} height={96} alt="" className="rounded-2xl" />
    }
}
function getName(result) {
    if (result.pagemap?.metatags?.[0]?.['og:site_name']) {
        return <p className="text-black dark:text-white">{result.pagemap.metatags[0]['og:site_name']}</p>
    }
}
function getUrl(result) {
    if (result.displayLink) {
        return <p className="text-zinc-500 text-xs">{result.displayLink}</p>
    }
}
function getDescription(result) {
    if (result.snippet) {
        return <p className="text-xs text-zinc-600 dark:text-zinc-300 w-[250px] lg:w-[500px] truncate">{result.snippet}</p>
    }
}
function getLink(result) {
    if (result.link) {
        return (
            <a href={result.link}>
                <h2 className="w-[250px] lg:w-[500px] truncate hover:underline">
                    {result.title}
                </h2>
            </a>
        )
    }
}

module.exports = { getLogo, getThumbnail, getName, getUrl, getDescription, getLink }