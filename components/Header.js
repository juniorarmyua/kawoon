import Image from "next/image"
import { useRouter } from "next/router"

export default function Header() {

    const router = useRouter()

    function search() {
        const input = document.getElementById("searchInput").value
        if (!input) return
        router.push(`/search?input=${input}`)
    }
    return (
        <div className="grid w-full items-center justify-items-center lg:justify-items-start dark:bg-zinc-900 p-4">
            <div className="flex gap-2">
                <a className="flex gap-2" href="/">
                    <Image alt="" src={require('../public/logo.svg')} width={32} height={32} />
                    <h1 className="hidden lg:block logo text-[24px] self-center">Kaw<span className="text-[#52B02B]">o</span><span className="text-[#FF3E59]">o</span>n</h1>
                </a>
                <input placeholder="Пошук" id="searchInput" className="bg-zinc-100 dark:bg-zinc-800 placeholder-zinc-600 dark:placeholder-zinc-400 py-2 rounded-2xl px-4 lg:ml-8 w-[16rem] lg:w-[32rem]" onKeyDown={(key) => {
                    if (key.key == "Enter") search()
                }} />
                <button className="p-2 rounded-2xl bg-zinc-100 dark:bg-zinc-800" onClick={search} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-600 dark:text-zinc-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
