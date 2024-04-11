import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Card } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { DataTable } from "@/components/tables/inventoryDataTable";

export default function Home() {
	return (
		<main className="flex-1 p-6 w-screen">
			<h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
				Dashboard
			</h1>
			<div className="flex flex-col   gap-6 mt-6">
				<Card className=" col-span-3 p-5 overflow-auto">
					<div className="flex items-center justify-between">
						<p className="text-xl font-semibold">TOTALS</p>
						<div className="flex flex-wrap mx-auto gap-16 justify-evenly">
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">214</div>
								<div className="text-gray-800 dark:text-white">Products</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">49</div>
								<div className="text-gray-800 dark:text-white">Styles</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">301</div>
								<div className="text-gray-800 dark:text-white">Pieces</div>
							</div>
						</div>
					</div>
				</Card>
				<Card className="p-2">
					<DataTable />
				</Card>
			</div>
		</main>
	);
}
