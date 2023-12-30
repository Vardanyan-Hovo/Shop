type Tusercard ={
    user: {} ,
    pagetype: string
}

export default function UserCard({user, pagetype}:Tusercard){
    return (
        <div className="bg-slate-500 outline-dashed outline-1">
            <h4 className="text-center font-mono">Hello I em server</h4>
        </div>
    )
}

// http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F