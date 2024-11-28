'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const StoriesTitleFilter = ({ titleFilter }: { titleFilter?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback((titleFilter: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    if (titleFilter) {
      updatedSearchParams.set('titleFilter', titleFilter);
    } else {
      updatedSearchParams.delete('titleFilter');
    }

    const url = `${pathname}?${updatedSearchParams.toString()}`;
    router.replace(url, { scroll: false });
  }, 300);

  return (
    <Box component="div" sx={{ marginBottom: { xs: 2, md: 0 }, width: 300 }}>
      <TextField
        id="story-title-filter-input"
        label="Title Filter"
        variant="outlined"
        color="primary"
        name="title"
        fullWidth
        defaultValue={titleFilter}
        onChange={(event) => handleChange(event.target.value)}
      />
    </Box>
  );
};

export default StoriesTitleFilter;
