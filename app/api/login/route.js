import { NextResponse } from "next/server";
import auth from "../../dummies/authDummy.json";
import { cookies } from "next/headers";

const verifyUser = (email, password, auth) => {
	if (auth && auth.password === password) {
		return auth;
	}
	return null;
};

export async function GET(request) {
	return NextResponse.json({ message: "Hello World" });
}

export async function POST(request) {
	try {
		const { email, password } = await request.json();
		const user = verifyUser(email, password, auth);
		if (user) {
			// set a cookie or session
			cookies().set({
				name: "user",
				value: JSON.stringify(user),
				httpOnly: true,
				path: "/",
			});
			return NextResponse.json({ message: "Success", user });
		}
		return NextResponse.json(
			{ message: "Invalid credentials" },
			{ status: 401 }
		);
	} catch (error) {
		console.log(error);
	}
}
