import { AlignVerticalCenter, CategoryOutlined, RestartAlt } from '@mui/icons-material';
import { Button, FormControlLabel, Menu, MenuItem, Switch } from '@mui/material';
import { useAnchor } from 'hooks';

const Filter = ({}) => {
  const [anchorSort, openSort, onOpenSort, onCloseSort] = useAnchor();

  return (
    <div className='flex-1 flex justify-between'>
      <div className='flex gap-5'>
        <Button classes={{ containedPrimary: 'bg-white' }} startIcon={<CategoryOutlined />} onClick={onOpenSort}>
          Recently Listed
        </Button>
        <Menu
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          anchorEl={anchorSort}
          open={openSort}
          onClose={onCloseSort}
          onClick={onCloseSort}
        >
          <MenuItem>Price: Low To High</MenuItem>
          <MenuItem>Price: High To Low</MenuItem>
          <MenuItem>Recently Listed</MenuItem>
        </Menu>

        <Button classes={{ containedPrimary: 'bg-white' }} startIcon={<AlignVerticalCenter />}>
          Price Range
        </Button>
        <FormControlLabel label='My Listing' control={<Switch color='info' />} />
      </div>

      <Button classes={{ containedPrimary: 'bg-white' }} startIcon={<RestartAlt />}>
        Reset
      </Button>
    </div>
  );
};

export default Filter;
