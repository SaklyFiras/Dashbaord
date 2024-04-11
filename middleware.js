import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export default function middleware(req) {
	const url = req.nextUrl.clone();

	const cookieStore = cookies();
	const user = cookieStore.get("user");
	

	if (!user && url.pathname !== "/login") {
		url.pathname = "/login";
		return NextResponse.redirect(url);
	}
	return NextResponse.next();
}
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
