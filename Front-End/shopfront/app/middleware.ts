// //without a defined matcher, this one line applies next-aut 
// //to the entire project
export {default} from "next-auth/middleware"

// //Middleware allows you to run code before a request is completed
// //https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {matcher: ["/extra", "/dashboard"]}



// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }