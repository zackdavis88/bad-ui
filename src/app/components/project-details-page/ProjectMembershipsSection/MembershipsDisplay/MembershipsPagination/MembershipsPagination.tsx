'use client';
import { useCallback } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const MembershipsPagination = ({
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

  const handlePageChange = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      if (page !== 0) {
        updatedSearchParams.set('membershipPage', (page + 1).toString());
      } else {
        updatedSearchParams.delete('membershipPage');
      }

      const url = `${pathname}?${updatedSearchParams.toString()}`;

      router.replace(url);
    },
    [searchParams, pathname, router]
  );

  return (
    <TablePagination
      component="div"
      count={totalItems}
      page={page - 1}
      rowsPerPage={itemsPerPage}
      rowsPerPageOptions={[8]}
      onPageChange={handlePageChange}
      sx={(theme) => ({
        '& .MuiTablePagination-input > svg': {
          color: theme.palette.text.primary,
        },
      })}
    />
  );
};

export default MembershipsPagination;
