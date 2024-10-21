'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const MembershipsUsernameFilter = ({ usernameFilter }: { usernameFilter?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback((usernameFilter: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    if (usernameFilter) {
      updatedSearchParams.set('membershipUsernameFilter', usernameFilter);
    } else {
      updatedSearchParams.delete('membershipUsernameFilter');
    }

    const url = `${pathname}?${updatedSearchParams.toString()}`;
    router.replace(url, { scroll: false });
  }, 300);

  return (
    <Box component="div" sx={{ marginBottom: { xs: 2, md: 0 }, width: 300 }}>
      <TextField
        id="membership-username-filter-input"
        label="Username Filter"
        variant="outlined"
        color="primary"
        name="username"
        fullWidth
        defaultValue={usernameFilter}
        onChange={(event) => handleChange(event.target.value)}
      />
    </Box>
  );
};

export default MembershipsUsernameFilter;
