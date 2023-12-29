import Navbar from "./components/Navbar"
import { getCurrentUser } from "./lib/session"

export default async function Home() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div>
      <Navbar/>
    </div>
  )
}
