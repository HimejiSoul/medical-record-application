"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Rightbar() {
	const [date, setDate] = useState(new Date());

	return (
		<div className="flex flex-col gap-6 bg-white w-full h-screen p-6">
			<div className="bg-slate-900 h-10">akun</div>
			<div className="flex flex-col text-black font-bold ">
				Kalender
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="text-black self-center"
				/>
			</div>
			<div className="border border-[#C5D3E3] my-2" />
			<div className="text-black">
				<div className="h-10 text-lg font-bold">Reservasi Hari ini</div>
				<div className="flex flex-row justify-between">
					<div className="h-10">
						<div className="text-sm">Nazwa Barokah Utari</div>
						<div className="text-xs font-normal text-[#A5A5A5]">
							Keluarga Berencana (KB)
						</div>
					</div>
					<div className="text-xs self-center text-[#A5A5A5]">18.30</div>
				</div>
			</div>
		</div>
	);
}
