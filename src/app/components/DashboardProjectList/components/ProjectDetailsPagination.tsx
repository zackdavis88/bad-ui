'use client';
import { ChangeEvent, useCallback } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const ProjectDetailsPagination = ({
  itemsPerPage,
  page,
  totalItems,
}: {
  itemsPerPage: number;
  page: number;
  totalItems: number;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRowsPerPageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set('page', '1');
      updatedSearchParams.set('itemsPerPage', event.target.value);

      const url = `${pathname}?${updatedSearchParams.toString()}`;

      router.push(url);
    },
    [searchParams, pathname, router]
  );

  const handlePageChange = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set('page', (page + 1).toString());

      const url = `${pathname}?${updatedSearchParams.toString()}`;

      router.push(url);
    },
    [searchParams, pathname, router]
  );

  return (
    <TablePagination
      component="div"
      count={totalItems}
      page={page - 1}
      rowsPerPage={itemsPerPage}
      onRowsPerPageChange={handleRowsPerPageChange}
      onPageChange={handlePageChange}
    />
  );
};

export default ProjectDetailsPagination;
