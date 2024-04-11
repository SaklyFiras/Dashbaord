import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import React from "react";

import { DataTable } from "@/components/tables/shopsDataTable";
import { columns } from "@/components/tables/shopsDataTable";

const data = [
	{
		status: "Pending",
		email: "xyz@gmail.com",
		amount: "$100",
	},
	{
		status: "Completed",
		email: "aze@gmail.com",
		amount: "$200",
	},
];

export function DrawerButton() {
	return (
		<Drawer>
			<DrawerTrigger className=" bg-[#020817] p-[8px] px-4 hover:bg-inherit rounded-md">
				Shops
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Select shops</DrawerTitle>
					<DrawerDescription>
						Select the shops you want
						<DataTable columns={columns} data={data} />
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button>Select</Button>
					<DrawerClose>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
