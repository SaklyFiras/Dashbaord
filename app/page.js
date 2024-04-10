
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

import { LineChart } from "@/components/charts/LineChart";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";



export default function Home() {
	return (
		<main className="flex-1 p-6">
			<h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
				Dashboard
			</h1>
			

			<div className="grid grid-cols-3   gap-6 mt-6">
				<Card>
					<CardHeader className="pb-2">
						<CardTitle>Today</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Gross Sales</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Client Net</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-red-800">
												<AngleDownIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Merchline Net</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Orders</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Avg Order Value</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle>Week</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Gross Sales</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Client Net</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-red-800">
												<AngleDownIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Merchline Net</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Orders</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Avg Order Value</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle>Month</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Gross Sales</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Client Net</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-red-800">
												<AngleDownIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Merchline Net</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Orders</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Avg Order Value</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle>Year</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Gross Sales</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Client Net</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-red-800">
												<AngleDownIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Merchline Net</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Orders</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Avg Order Value</TableCell>
									<TableCell className="text-right">
										<div className="flex items-center justify-end">
											$250.00
											<Badge className="ml-1 bg-indigo-800">
												<AngleUpIcon className="w-4 h-4" />
												1.5%
											</Badge>
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>

				<Card className=" col-span-3 p-8 overflow-auto">
					<div className="flex items-center justify-between">
						<p className="text-xl font-semibold">TOTALS</p>
						<div className="flex mx-auto gap-16 justify-evenly">
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">$250.00</div>
								<div className="text-gray-800 dark:text-white">Gross Sales</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">$250.00</div>
								<div className="text-gray-800 dark:text-white">Client Net</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">$250.00</div>
								<div className="text-gray-800 dark:text-white">
									Merchline net
								</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">$250.00</div>
								<div className="text-gray-800 dark:text-white">Orders</div>
							</div>
							<div className=" flex flex-col items-center">
								<div className="text-gray-800 dark:text-white">$250.00</div>
								<div className="text-gray-800 dark:text-white">
									Avg Order Value
								</div>
							</div>
						</div>
					</div>
				</Card>
				<Card className="  col-span-3 p-8">
					<LineChart />
				</Card>
			</div>
		</main>
	);
}
function HomeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	);
}

function SettingsIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}
function ReportIcon(props) {
	return (
		<svg
			className="w-6 h-6 "
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function SyncIcon(props) {
	return (
		<svg
			className="w-6 h-6 "
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
			/>
		</svg>
	);
}

function ShoppingCartIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="8" cy="21" r="1" />
			<circle cx="19" cy="21" r="1" />
			<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
		</svg>
	);
}
function AngleUpIcon(props) {
	return (
		<svg
			className="w-4 h-4 text-gray-800 "
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="m5 15 7-7 7 7"
			/>
		</svg>
	);
}

function AngleDownIcon(props) {
	return (
		<svg
			className="w-4 h-4 text-gray-800 "
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="m19 9-7 7-7-7"
			/>
		</svg>
	);
}

function UsersIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}
