import Navbar from "./components/Navbar";
import { getCurrentUser } from "./lib/session";
import Asigninform from "./components/signin/page";

export default async function Home() {
  const user = await getCurrentUser();
  // console.log(user);
  return (
    <div>
      {user ? <Navbar/> : <Asigninform/>} 
    </div>
  )
}
