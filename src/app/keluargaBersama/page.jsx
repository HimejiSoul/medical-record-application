import Sidebar from "../../components/sidebar";
import Rightbar from "../../components/rightbar";

export default function Dashboard() {
	return (
		<div className="grid grid-cols-5">
			<Sidebar />
			<div className="flex flex-col bg-white col-span-3 py-6 px-3 gap-6">
				<div className="h-14 rounded-xl bg-[#D0E4FF] text-[#6F90BA] font-medium flex items-center justify-center">
					Ceritanya Search Bar tapi di KB
				</div>
				<div className="h-full rounded-xl bg-[#D0E4FF]"></div>
			</div>
			<Rightbar />
		</div>
	);
}
