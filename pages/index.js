import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  function search() {
    const term = document.getElementById("searchInput").value
    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <div className="dark:bg-zinc-900 dark:text-white h-screen w-full grid justify-items-center items-center">
      <div className="text-center justify-items-center items-center grid lg:grid-cols-2">
        <div>
          <Image alt="" src={require("../public/logo.svg")} />
        </div>
        <div className="grid grid-rows-2 justify-items-center items-center">
          <div>
            <h1 className="logo text-[56px]">Kaw<span className="text-[#52B02B]">o</span><span className="text-[#FF3E59]">o</span>n</h1>
            <p>Українська пошукова система</p>
          </div>
          <div className="flex gap-2">
            <input placeholder="Пошук" id="searchInput" className="bg-zinc-100 dark:bg-zinc-800 placeholder-zinc-600 dark:placeholder-zinc-400 text-center p-2 rounded-2xl" onKeyDown={(key) => {
              if (key.key == "Enter") search()
            }} />
            <button className="p-2 rounded-2xl bg-zinc-100 dark:bg-zinc-800" onClick={search} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-600 dark:text-zinc-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
