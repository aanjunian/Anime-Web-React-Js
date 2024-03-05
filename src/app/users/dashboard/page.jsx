import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const Page = async () => {
    const user = await authUserSession()
    // if(!user) redirect("/")
    return (
        <div className="text-color-primary flex-col flex justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
            <Image src={user.image} alt="..." width={250} height={250} />
         <div className="flex flex-wrap gap-4 py-8">
            <Link 
            className="bg-color-accent text-color-dark 
            font-bold py-3 px-4 text-xl" 
            href="/users/dashboard/collection">My Collection
            </Link>
            <Link 
            className="bg-color-accent text-color-dark 
            font-bold py-3 px-4 text-xl" 
            href="/users/dashboard/comment">My Comment
            </Link>
         </div>
        </div>
    )

}

export default Page