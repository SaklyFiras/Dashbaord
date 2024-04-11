"use client"
import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/charts/BarChart";

export default function Home() {
	return (
		<main className="flex-1 p-6 w-screen min-h-screen">
			<h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
				Dashboard
			</h1>
			<div className="flex flex-col   gap-6 mt-6">
				<Card className=" col-span-3 p-5 overflow-auto">
					<div className="flex items-center justify-between">
						<p className="text-xl font-semibold">TOTALS</p>
						<div className="flex flex-wrap mx-auto gap-16 justify-evenly">
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">$250.00</div>
								<div className="text-gray-800 dark:text-white">
									{"Gross Sales (-discounts)"}
								</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">$250.00</div>
								<div className="text-gray-800 dark:text-white">
									Merchline Net
								</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">$250.00</div>
								<div className="text-gray-800 dark:text-white">Client Net</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">300</div>
								<div className="text-gray-800 dark:text-white">Orders</div>
							</div>
						</div>
					</div>
				</Card>
				<Card className="p-8 h-96">
					<BarChart  />
				</Card>
			</div>
		</main>
	);
}
