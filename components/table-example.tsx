"use client"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ChevronUp,
  Search,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type User = {
  id: number
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  lastLogin: string
}

// Extended user data for pagination demonstration
const initialUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2023-04-10",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "active",
    lastLogin: "2023-04-15",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Editor",
    status: "inactive",
    lastLogin: "2023-03-22",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "User",
    status: "active",
    lastLogin: "2023-04-18",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "User",
    status: "pending",
    lastLogin: "2023-04-01",
  },
  {
    id: 6,
    name: "Diana Prince",
    email: "diana.prince@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2023-04-20",
  },
  {
    id: 7,
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    role: "Editor",
    status: "inactive",
    lastLogin: "2023-03-15",
  },
  {
    id: 8,
    name: "Fiona Gallagher",
    email: "fiona.gallagher@example.com",
    role: "User",
    status: "active",
    lastLogin: "2023-04-22",
  },
  {
    id: 9,
    name: "George Miller",
    email: "george.miller@example.com",
    role: "User",
    status: "pending",
    lastLogin: "2023-04-05",
  },
  {
    id: 10,
    name: "Hannah Baker",
    email: "hannah.baker@example.com",
    role: "Editor",
    status: "active",
    lastLogin: "2023-04-17",
  },
  {
    id: 11,
    name: "Ian Gallagher",
    email: "ian.gallagher@example.com",
    role: "User",
    status: "inactive",
    lastLogin: "2023-03-28",
  },
  {
    id: 12,
    name: "Julia Roberts",
    email: "julia.roberts@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2023-04-19",
  },
  {
    id: 13,
    name: "Kevin Hart",
    email: "kevin.hart@example.com",
    role: "User",
    status: "active",
    lastLogin: "2023-04-11",
  },
  {
    id: 14,
    name: "Laura Palmer",
    email: "laura.palmer@example.com",
    role: "Editor",
    status: "pending",
    lastLogin: "2023-04-03",
  },
  {
    id: 15,
    name: "Michael Scott",
    email: "michael.scott@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2023-04-21",
  },
]

export function TableExample() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [sortField, setSortField] = useState<keyof User | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [searchTerm, setSearchTerm] = useState("")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const handleSort = (field: keyof User) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }

    const sortedUsers = [...users].sort((a, b) => {
      if (sortDirection === "asc") {
        return a[field] > b[field] ? 1 : -1
      } else {
        return a[field] < b[field] ? 1 : -1
      }
    })

    setUsers(sortedUsers)
    setCurrentPage(1) // Reset to first page after sorting
  }

  const handleSearch = () => {
    if (searchTerm === "") {
      setUsers(initialUsers)
      return
    }

    const filteredUsers = initialUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    setUsers(filteredUsers)
    setCurrentPage(1) // Reset to first page after search
  }

  const getSortIcon = (field: keyof User) => {
    if (sortField !== field) return <ArrowUpDown className="ml-2 h-4 w-4" />
    return sortDirection === "asc" ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
  }

  const getStatusClass = (status: User["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium"
      case "inactive":
        return "bg-red-100 text-red-800 rounded-full px-2 py-1 text-xs font-medium"
      case "pending":
        return "bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 text-xs font-medium"
      default:
        return ""
    }
  }

  // Calculate pagination values
  const totalPages = Math.ceil(users.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // Get current page items
  const currentItems = useMemo(() => {
    return users.slice(indexOfFirstItem, indexOfLastItem)
  }, [users, indexOfFirstItem, indexOfLastItem])

  // Pagination controls
  const goToPage = (page: number) => {
    if (page < 1) page = 1
    if (page > totalPages) page = totalPages
    setCurrentPage(page)
  }

  const goToFirstPage = () => goToPage(1)
  const goToPreviousPage = () => goToPage(currentPage - 1)
  const goToNextPage = () => goToPage(currentPage + 1)
  const goToLastPage = () => goToPage(totalPages)

  // Handle items per page change
  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value))
    setCurrentPage(1) // Reset to first page when changing items per page
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Input
          id="table-search"
          placeholder="Search by name, email, or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:max-w-sm"
        />
        <div className="flex gap-2">
          <Button id="search-button" onClick={handleSearch} size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button
            id="reset-table-button"
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setUsers(initialUsers)
              setSortField(null)
              setCurrentPage(1)
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-md border">
        <Table id="users-table">
          <TableHeader>
            <TableRow>
              <TableHead id="sort-by-id" className="cursor-pointer" onClick={() => handleSort("id")}>
                <div className="flex items-center">ID {getSortIcon("id")}</div>
              </TableHead>
              <TableHead id="sort-by-name" className="cursor-pointer" onClick={() => handleSort("name")}>
                <div className="flex items-center">Name {getSortIcon("name")}</div>
              </TableHead>
              <TableHead id="sort-by-email" className="cursor-pointer" onClick={() => handleSort("email")}>
                <div className="flex items-center">Email {getSortIcon("email")}</div>
              </TableHead>
              <TableHead id="sort-by-role" className="cursor-pointer" onClick={() => handleSort("role")}>
                <div className="flex items-center">Role {getSortIcon("role")}</div>
              </TableHead>
              <TableHead id="sort-by-status" className="cursor-pointer" onClick={() => handleSort("status")}>
                <div className="flex items-center">Status {getSortIcon("status")}</div>
              </TableHead>
              <TableHead id="sort-by-login" className="cursor-pointer" onClick={() => handleSort("lastLogin")}>
                <div className="flex items-center">Last Login {getSortIcon("lastLogin")}</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              currentItems.map((user) => (
                <TableRow key={user.id} id={`user-row-${user.id}`}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span className={getStatusClass(user.status)}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Rows per page:</span>
          <Select value={String(itemsPerPage)} onValueChange={handleItemsPerPageChange}>
            <SelectTrigger id="items-per-page-select" className="h-8 w-[70px]">
              <SelectValue placeholder={itemsPerPage} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem id="rows-5" value="5">
                5
              </SelectItem>
              <SelectItem id="rows-10" value="10">
                10
              </SelectItem>
              <SelectItem id="rows-15" value="15">
                15
              </SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, users.length)} of {users.length} items
          </span>
        </div>

        <div className="flex items-center gap-1">
          <Button
            id="first-page-button"
            variant="outline"
            size="icon"
            onClick={goToFirstPage}
            disabled={currentPage === 1}
            className="h-8 w-8"
            aria-label="First page"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            id="previous-page-button"
            variant="outline"
            size="icon"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="h-8 w-8"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span id="pagination-info" className="px-2 text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            id="next-page-button"
            variant="outline"
            size="icon"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="h-8 w-8"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            id="last-page-button"
            variant="outline"
            size="icon"
            onClick={goToLastPage}
            disabled={currentPage === totalPages}
            className="h-8 w-8"
            aria-label="Last page"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
