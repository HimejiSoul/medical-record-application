import Sidebar from "../../components/sidebar";
import Rightbar from "../../components/rightbar";
import SearchBar from "../../components/searchBar";

export default function Dashboard() {
	return (
		<div className="grid grid-cols-5">
			<Sidebar />
			<div className="flex flex-col bg-white col-span-3 py-6 px-3 gap-6">
				<div>
					<SearchBar className="mb-10" />
				</div>
				<div className="h-full rounded-xl bg-[#D0E4FF]"></div>
			</div>
			<Rightbar />
		</div>
	);
}
