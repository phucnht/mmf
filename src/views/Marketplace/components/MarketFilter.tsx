import { AlignVerticalCenter, CategoryOutlined, RestartAlt } from '@mui/icons-material';
import { Button, debounce, FormControlLabel, Menu, MenuItem, Switch } from '@mui/material';
import { useAnchor } from 'hooks';
import router, { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';

const SORT_TYPES = [
  { orderBy: '', desc: 'true', name: 'Recently Listed' },
  { orderBy: 'price', desc: 'false', name: 'Price: Low To High' },
  { orderBy: 'price', desc: 'true', name: 'Price: High To Low' },
];

type MarketFilterType = {
  onSearchChange: (search?: any) => void;
};

const MarketFilter = ({ onSearchChange }: MarketFilterType) => {
  const { query } = useRouter();
  const { isLoggedIn, address } = useSelector(profileSelector);

  const [orderBy, setOrderBy] = useState(query.orderBy || '');
  const [desc, setDesc] = useState(query.desc || 'true');
  const [owner, setOwner] = useState(query.owner || '');

  const [anchorSort, openSort, onOpenSort, onCloseSort] = useAnchor();

  const [params, setParams] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeParams = useCallback(
    debounce((values) => {
      setParams((prev) => ({ ...prev, ...values }));
    }, 300),
    [],
  );

  const handleClickReset = () => {
    setOwner('');
  };

  useEffect(() => {
    const search = new URLSearchParams({ orderBy, desc, owner } as Record<string, string>).toString();
    router.push(`${router.pathname}?${search}`, undefined, { shallow: true });

    onSearchChange({
      ...{ orderBy, desc, owner },
      ...params,
    });
  }, [onSearchChange, orderBy, desc, owner, params]);

  return (
    <div className='flex-1 flex justify-between'>
      <div className='flex gap-5'>
        <Button classes={{ containedPrimary: 'bg-white' }} startIcon={<CategoryOutlined />} onClick={onOpenSort}>
          {SORT_TYPES.find((item) => item.orderBy === orderBy && item.desc === desc)?.name ?? SORT_TYPES[0].name}
        </Button>
        <Menu
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          anchorEl={anchorSort}
          open={openSort}
          onClose={onCloseSort}
          onClick={onCloseSort}
        >
          {SORT_TYPES.map((item, index) => (
            <MenuItem
              key={index}
              classes={{ selected: 'bg-info-light' }}
              selected={item.orderBy === orderBy && item.desc === desc}
              onClick={() => {
                setOrderBy(item.orderBy);
                setDesc(item.desc);
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>

        <Button classes={{ containedPrimary: 'bg-white' }} startIcon={<AlignVerticalCenter />}>
          Price Range
        </Button>
        <FormControlLabel
          label='My Listing'
          control={
            <Switch
              color='info'
              checked={isLoggedIn && address === owner}
              onChange={(event, checked) => {
                if (checked) setOwner(address || '');
                else setOwner('');
              }}
            />
          }
        />
      </div>

      <Button classes={{ containedPrimary: 'bg-white' }} startIcon={<RestartAlt />} onClick={handleClickReset}>
        Reset
      </Button>
    </div>
  );
};

export default MarketFilter;
