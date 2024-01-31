export default function Sidebar() {
	return (
		<div className="bg-white w-full h-screen p-6 text-sm">
			<div className="h-full w-full flex flex-col justify-between font-semibold">
				<div className="flex flex-col gap-8 ">
					<div className="bg-slate-900 h-14">Logo Name</div>
					<div className="flex flex-col gap-2">
						<div className="flex h-11 active:text-[#041833] text-[#6F90BA] hover:bg-[#D0E4FF] items-center rounded-lg">
							Dashboard
						</div>
						<div className="flex  h-11 active:text-[#041833] text-[#6F90BA]  hover:bg-[#D0E4FF] items-center rounded-lg">
							Keluarga Berencana
						</div>
						<div className="flex h-11 active:text-[#041833] text-[#6F90BA] hover:bg-[#D0E4FF] items-center rounded-lg">
							Periksa Kehamilan
						</div>
						<div className="border border-[#C5D3E3] my-2" />
						<div className="flex h-11 active:text-[#041833] text-[#6F90BA] hover:bg-[#D0E4FF] items-center rounded-lg">
							Jadwalkan Reservasi
						</div>
						<div className="flex h-11 active:text-[#041833] text-[#6F90BA] hover:bg-[#D0E4FF] items-center rounded-lg">
							Bantuan
						</div>
					</div>
				</div>
				<div className="text-[#DF645F]">Log Out</div>
			</div>
		</div>
	);
}
