"use client";
import Image from "next/image";
import * as React from "react";
import { ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const data = [
	{
		id: "m5gr84i9",
		img: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
		Name: "firstArticle",
		stock: 10,
		purshased: 5,
	},
	{
		id: "3u1reuv4",
		img: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
		Name: "secondArticle",
		stock: 20,
		purshased: 10,
	},
	{
		id: "derv1ws0",
		img: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
		Name: "thirdArticle",
		stock: 30,
		purshased: 15,
	},
	{
		id: "5kma53ae",
		img: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
		Name: "fourthArticle",
		stock: 40,
		purshased: 20,
	},
	{
		id: "bhqecj4p",
		img: "https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b",
		Name: "fifthArticle",
		stock: 50,
		purshased: 25,
	},
];

export const columns = [
	{
		id: "img",
		header: "Image",
		cell: ({ row }) => {
			const article = row.original;
			return (
				<Image
					src={article.img}
					width={40}
					height={40}
					alt="Article"
					className="h-10 w-10 rounded-full"
				/>
			);
		},
	},
	{
		id: "Name",
		header: "Name",
		cell: ({ row }) => {
			const article = row.original;
			return <span>{article.Name}</span>;
		},
	},
	{
		id: "stock",
		header: "Stock",
		cell: ({ row }) => {
			const article = row.original;
			return <span>{article.stock}</span>;
		},
	},
	{
		id: "purshased",
		header: "Purshased",
		cell: ({ row }) => {
			const article = row.original;
			return <span>{article.purshased}</span>;
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<DotsHorizontalIcon className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}
						>
							Copy product ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />

						<DropdownMenuItem>View product details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export function DataTable() {
	const [sorting, setSorting] = React.useState([]);
	const [columnFilters, setColumnFilters] = React.useState([]);
	const [columnVisibility, setColumnVisibility] = React.useState({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [sortOption, setSortOption] = React.useState("Revenue");

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<Input
					placeholder="Filter by Name..."
					value={table.getColumn("Name")?.getFilterValue() ?? ""}
					onChange={(event) =>
						table.getColumn("Name")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				<div className="ml-auto">
					<RadioGroup
						defaultValue="Name"
						onChange={(value) => setSortOption(value)}
						className="flex flex-wrap space-x-4 justify-center"
					>
						<p className="">Sort By</p>
						<div>
							<RadioGroupItem value="Revenue" id="Revenue-option"/>
							<Label htmlFor="Revenue-option">Name</Label>
						</div>
						<div>
							<RadioGroupItem value="Name" id="Name-option"/>
							<Label htmlFor="Name-option">Stock</Label>
						</div>
						<div>
							<RadioGroupItem value="Active" id="Active-option"/>
							<Label htmlFor="Active-option">Purshased</Label>
						</div>
					</RadioGroup>
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="ml-auto">
							Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} of{" "}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}