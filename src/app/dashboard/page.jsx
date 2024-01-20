import Sidebar from "../../components/sidebar";
import Rightbar from "../../components/rightbar";

export default function Dashboard() {
	return (
		<div className="flex flex-row justify-between">
			<Sidebar />
			<Rightbar />
		</div>
	);
}
