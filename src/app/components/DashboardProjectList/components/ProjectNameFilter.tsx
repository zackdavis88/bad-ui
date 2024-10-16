'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const ProjectNameFilter = ({ projectName }: { projectName?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback((projectName: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    if (projectName) {
      updatedSearchParams.set('projectName', projectName);
    } else {
      updatedSearchParams.delete('projectName');
    }

    const url = `${pathname}?${updatedSearchParams.toString()}`;
    router.replace(url);
  }, 300);

  return (
    <Box component="div" width={300} sx={{ marginBottom: { xs: 2, md: 0 } }}>
      <TextField
        id="dashboard-project-filter-input"
        label="Name Filter"
        variant="outlined"
        color="primary"
        name="name"
        fullWidth
        defaultValue={projectName}
        onChange={(event) => handleChange(event.target.value)}
      />
    </Box>
  );
};

export default ProjectNameFilter;
