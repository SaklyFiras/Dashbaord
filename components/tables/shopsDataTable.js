"use client"
import * as React from "react"
import { ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

const data = [
  {
    id: "m5gr84i9",
    Revenue: 316,
    Name: "Shop1",

    active: true
  },
  {
    id: "3u1reuv4",
    Revenue: 242,
    Name: "Shop2",
    email: "Abe45@gmail.com",
    active: true
  },
  {
    id: "derv1ws0",
    Revenue: 837,
    Name: "Shop3",
    active: false
  },
  {
    id: "5kma53ae",
    Revenue: 874,
    Name: "Shop4",
    active: false
  },
  {
    id: "bhqecj4p",
    Revenue: 721,
    Name: "Shop5",
    active: false
  }
]

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },

  {
    accessorKey: "active",
    header: "Active",
    cell: ({ row }) =>
      row.getValue("active") === true ? (
        <div className="text-green-600">Yes</div>
      ) : (
        <div className="text-red-600">No</div>
      )
  },
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("Name")}</div>
  },

  {
    accessorKey: "Revenue",
    header: () => <div className="text-right">Revenue</div>,
    cell: ({ row }) => {
      const Revenue = parseFloat(row.getValue("Revenue"))

      // Format the Revenue as a dollar Revenue
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(Revenue)

      return <div className="text-right font-medium">{formatted}</div>
    }
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

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
              Copy shop ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>View shop details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

export function DataTable() {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [sortOption, setSortOption] = React.useState("Revenue")

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
      rowSelection
    }
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by Name..."
          value={table.getColumn("Name")?.getFilterValue() ?? ""}
          onChange={event =>
            table.getColumn("Name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="ml-auto">
          <RadioGroup
            defaultValue="Revenue"
            onChange={value => setSortOption(value)}
            className="flex space-x-4"
          >
            <p className="">Sort By</p>
            <div>
              <RadioGroupItem value="Revenue" id="Revenue-option">
                Revenue
              </RadioGroupItem>
              <Label htmlFor="Revenue-option">Revenue</Label>
            </div>
            <div>
              <RadioGroupItem value="Name" id="Name-option">
                Name
              </RadioGroupItem>
              <Label htmlFor="Name-option">Name</Label>
            </div>
            <div>
              <RadioGroupItem value="Active" id="Active-option">
                Active
              </RadioGroupItem>
              <Label htmlFor="Active-option">Active</Label>
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
              .filter(column => column.getCanHide())
              .map(column => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={value => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map(cell => (
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
  )
}
