import {getCurrentUser} from "@/app/lib/session";
import {redirect} from "next/navigation";
import UserCard from "../components/UserCard/UserCard"

export default async function ServerPage() {
    const user = await getCurrentUser();
    if (!user){
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return (
        <section className="flex flex-col align-middle">
            <UserCard user={user} pagetype={"Server"}/>
        </section>
    )
}
