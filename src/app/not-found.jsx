"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <FileSearch size={32} className="text-color-accent"/>
                <h3 className="text-color-accent text-2xl font-bold">NOT FOUND</h3>
                <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent transition-all underline">Back</button>
            </div>
        </div>
    )
}

export default Page