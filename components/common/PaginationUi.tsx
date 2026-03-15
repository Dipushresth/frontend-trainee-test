import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationUiInterface {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

export function PaginationUi({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationUiInterface) {
  const pages: (number | string)[] = []

  for (let i = 1; i <= totalPages; i++) pages.push(i)
  if (currentPage < totalPages - 1) pages.push("...")
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
        {pages.map((p, i) =>
          p === "..." ? (
            <PaginationItem key={i}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={typeof p === "number" && currentPage === p}
                href="#"
                onClick={() => setCurrentPage(p as number)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
