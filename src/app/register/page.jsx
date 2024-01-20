"use client";
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		axios
			.post(
				"https://faas-sgp1-18bc02ac.doserverless.co/api/v1/web/fn-0100bb5b-93c0-4b54-ae68-1b56a41e7f49/register_endpoint/register",
				{
					params: {
						email: "",
						password: data.password,
						full_name: "",
						username: data.username,
						phone_number: "",
					},
				}
			)
			.then(function (response) {
				if (response.status == 200) {
					console.log("Status = ", +response.status);
					console.log("Message = " + response.data.message);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		// .finally(function () {
		// 	// always executed
		// });
	};
	return (
		<div className="flex w-screen h-screen bg-white justify-center items-center overflow-hidden">
			<img
				src="/loginPage/eclipse-3.svg"
				className="absolute w-[200px] h-[200px] top-0 left-0 "
			/>
			<img
				src="/loginPage/rectangle-1.svg"
				className="absolute w-[200px] h-[200px] bottom-7 right-7"
			/>
			<img
				src="/loginPage/vector-1.svg"
				className="absolute w-[600px] h-[500px] top-0 right-0 z-0"
			/>
			<img
				src="/loginPage/vector-2.svg"
				className="absolute w-[600px] h-[500px] bottom-0 left-0 z-0"
			/>
			<div className="flex flex-col w-[400px] rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] px-7 py-12 z-10 bg-white">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-0 text-center mb-12 text-[#393939] font-urbanist">
						<p className="text-lg font-semibold">Selamat Datang</p>
						<p className="text-3xl font-bold">
							Buat akun Anda untuk melakukan reservasi
						</p>
					</div>
					<div className="flex flex-col gap-4 text-black text-opacity-30 mb-3 font-inter text-sm">
						<div className="flex shadow appearance-none border w-full px-3 py-2 focus:outline-none rounded-lg text-black gap-2">
							<img src="/loginPage/usernameFace.svg" />
							<input
								id="fullName"
								type="text"
								placeholder="Nama Panjang"
								className="w-full focus:outline-none"
								{...register("full_name")}
							/>
						</div>
						<div className="flex shadow appearance-none border w-full px-3 py-2 focus:outline-none rounded-lg text-black gap-2">
							<img src="/loginPage/usernameFace.svg" />
							<input
								id="username"
								type="text"
								placeholder="Username"
								className="w-full focus:outline-none"
								{...register("username")}
							/>
						</div>
						<div className="flex shadow appearance-none border w-full px-3 py-2 focus:outline-none rounded-lg text-black gap-2">
							<img src="/registerPage/alternate_email.svg" />
							<input
								id="email"
								type="text"
								placeholder="Email"
								className="w-full focus:outline-none"
								{...register("email")}
							/>
						</div>
						<div className="flex shadow appearance-none border w-full px-3 py-2 focus:outline-none rounded-lg text-black gap-2">
							<img src="/registerPage/call.svg" />
							<input
								id="hpNum"
								type="text"
								placeholder="Nomor Handphone"
								className="w-full focus:outline-none"
								{...register("phone_number")}
							/>
						</div>
						<div className="flex shadow appearance-none border w-full px-3 py-2 rounded-lg text-black gap-2">
							<img src="/loginPage/passKey.svg" />
							<input
								id="password"
								type="password"
								placeholder="Password"
								className="w-full focus:outline-none"
								{...register("password")}
							/>
							<img src="/loginPage/passEye.svg" />
						</div>
					</div>
					<input
						type="submit"
						value="Buat Akun"
						className="bg-[#1479FF] w-full rounded-md px-3 py-2 text-center mt-2 mb-12 text-sm hover:bg-blue-600 focus:ring-blue-500 focus:ring-2 focus:outline-none text-white"
					/>
					<p className="text-black text-opacity-30 text-center text-sm font-semibold">
						Sudah punya akun?{" "}
						<a
							href="/login"
							className="text-[#1479FF] font-bold hover:underline hover:underline-offset-2"
						>
							Masuk
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}
