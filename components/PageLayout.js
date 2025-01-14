import Link from "next/link";


import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";



export default function Dashboard({ children }) {
	return (
		<div className="flex h-full bg-gray-200 dark:bg-gray-900">
			<aside className="w-1/6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 lg:block hidden">
				<div className="h-16 flex items-center justify-center border-b-2">
					<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
						Admin Panel
					</h2>
				</div>
				<ul>
					<li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
						<Link className="flex items-center space-x-4" href={"/"}>
							<HomeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
							<span className="text-sm font-medium">Dashboard</span>
						</Link>
					</li>
					<li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="p-0 space-x-4">
									<ReportIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
									<span className="text-sm font-medium">Reports</span>
								</AccordionTrigger>
								<AccordionContent className="mt-1">
									<ul className="flex flex-col ">
										<li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/sales"}
											>
												<span className="text-sm ">Sales</span>
											</Link>
										</li>
										<li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/storefront_compare"}
											>
												<span className="text-sm ">Storefront Compare</span>
											</Link>
										</li>

										<li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/top_performers"}
											>
												<span className="text-sm ">Top Performers</span>
											</Link>
										</li>
										<li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/monthly_settlement"}
											>
												<span className="text-sm ">Monthly Settlement</span>
											</Link>
										</li>
										<li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/month-end_inventory"}
											>
												<span className="text-sm ">Month-End Inventory</span>
											</Link>
										</li>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</li>
					<li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
						<Link className="flex items-center space-x-4" href={"/inventory"}>
							<ShoppingCartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
							<span className="text-sm font-medium">Inventory</span>
						</Link>
					</li>
					<li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
						<Link className="flex items-center space-x-4" href={"/costumers"}>
							<UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
							<span className="text-sm font-medium">Costumers</span>
						</Link>
					</li>
					<li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
						<Link className="flex items-center space-x-4" href={"/adjustments"}>
							<SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
							<span className="text-sm font-medium">Adjustments</span>
						</Link>
					</li>
					<li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
						<Link className="flex items-center space-x-4" href={"/sync"}>
							<SyncIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
							<span className="text-sm font-medium">Sync</span>
						</Link>
					</li>
				</ul>
				
			</aside>
			{children}
		</div>
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
