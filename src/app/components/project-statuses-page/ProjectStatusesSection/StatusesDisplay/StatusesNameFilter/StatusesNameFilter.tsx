'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const StatusesNameFilter = ({ nameFilter }: { nameFilter?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback((nameFilter: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    if (nameFilter) {
      updatedSearchParams.set('nameFilter', nameFilter);
    } else {
      updatedSearchParams.delete('nameFilter');
    }

    const url = `${pathname}?${updatedSearchParams.toString()}`;
    router.replace(url, { scroll: false });
  }, 300);

  return (
    <Box component="div" sx={{ marginBottom: { xs: 2, md: 0 }, width: 300 }}>
      <TextField
        id="status-name-filter-input"
        label="Name Filter"
        variant="outlined"
        color="primary"
        name="name"
        fullWidth
        defaultValue={nameFilter}
        onChange={(event) => handleChange(event.target.value)}
      />
    </Box>
  );
};

export default StatusesNameFilter;
