import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ModeToggle";

import { DatePickerWithRange } from "@/components/DatePicker";

import { DrawerButton } from "@/components/Drawer";

export default function Navbar() {
	return (
		<div className="flex flex-wrap items-center justify-between px-4 py-2 bg-white dark:bg-gray-800">
			<Link className="flex items-center gap-2" href="#">
				<MountainIcon className="h-6 w-6" />
				<span className="text-lg font-semibold">MyDASHBOARD</span>
			</Link>
			<div className="  inline-flex space-x-4 w-max">
				<DrawerButton  />
				<DatePickerWithRange />
			</div>
			<div className="flex items-center p-1">
				<p>Anis</p>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
			<ModeToggle />
			<Sheet>
				<SheetTrigger asChild>
					<Button className="lg:hidden" size="icon" variant="outline">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<div className="grid w-[200px] p-4">
						<ul>
							<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
								<Link className="flex items-center space-x-4" href="/">
									<MountainIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
									<span className="text-sm font-medium">Dashboard</span>
								</Link>
							</li>
							<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
								<div className="flex flex-col ">
									<p className="flex items-center space-x-4">
										<MountainIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
										<span className="text-sm font-medium">Reports</span>
									</p>
									<ul>
										<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/sales"}
											>
												<span className="text-sm ">Sales</span>
											</Link>
										</li>
										<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/storefront_compare"}
											>
												<span className="text-sm ">Storefront Compare</span>
											</Link>
										</li>
										<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/top_performers"}
											>
												<span className="text-sm ">Top Performers</span>
											</Link>
										</li>
										<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/monthly_settlement"}
											>
												<span className="text-sm ">Monthly Settlement</span>
											</Link>
										</li>
										<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
											<Link
												className="flex items-center space-x-4"
												href={"/reports/month-end_inventory"}
											>
												<span className="text-sm ">Month-End Inventory</span>
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
								<Link
									className="flex items-center space-x-4"
									href="/reports/traffic"
								>
									<MountainIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
									<span className="text-sm font-medium">Inventory</span>
								</Link>
							</li>
							<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
								<Link
									className="flex items-center space-x-4"
									href="/reports/engagement"
								>
									<MountainIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
									<span className="text-sm font-medium">Costumers</span>
								</Link>
							</li>
							<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
								<Link
									className="flex items-center space-x-4"
									href="/reports/engagement"
								>
									<MountainIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
									<span className="text-sm font-medium">Adjustments</span>
								</Link>
							</li>
							<li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
								<Link
									className="flex items-center space-x-4"
									href="/reports/engagement"
								>
									<MountainIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
									<span className="text-sm font-medium">Sync</span>
								</Link>
							</li>
						</ul>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}

function MenuIcon(props) {
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
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(props) {
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
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}


