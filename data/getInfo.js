import Image from "next/image"

function getLogo(result) {
    if (result.displayLink) {
        return <Image src={`https://www.google.com/s2/favicons?domain=${result.displayLink}&sz=128`} width={128} height={128} alt="" className="rounded-2xl" />
    }
}
function getThumbnail(result) {
    if (result.pagemap?.cse_image?.[0]?.src) {
        return <Image src={result.pagemap.cse_image[0].src} width={128} height={128} alt="" className="rounded-2xl" />
    }
}
function getName(result) {
    if (result.pagemap?.metatags?.[0]?.['og:site_name']) {
        return <p className="text-black">{result.pagemap.metatags[0]['og:site_name']}</p>
    }
}
function getUrl(result) {
    if (result.displayLink) {
        return <p className="text-black">{result.displayLink}</p>
    }
}
function getDescription(result) {
    if (result.snippet) {
        return <p className="text-black">{result.snippet}</p>
    }
}
function getLink(result, classes) {
    if (result.link) {
        return (
            <a href={result.link}>
                <h2 className={classes}>
                    {result.title}
                </h2>
            </a>
        )
    }
}

module.exports = { getLogo, getThumbnail, getName, getUrl, getDescription, getLink }