import { Grid, Pagination } from '@mui/material';
import { NextLink } from 'components';
import { useSearch } from 'hooks';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { publicRoute } from 'routes';
import { marketSerivce } from 'services';

const TabAssets = ({ params }: any) => {
  const { address } = useSelector(profileSelector);

  const [dataSearch, onSearchChange] = useSearch({ owner: address, ...params });

  const { data, isLoading } = useQuery(
    ['marketSerivce.fetchItems', dataSearch],
    () => marketSerivce.fetchItems(dataSearch),
    { keepPreviousData: true },
  );
  const { items = [], total, currentPage, pages: totalPage } = data ?? {};

  return (
    <div>
      <div>{total} Assets</div>

      {items.map((item) => (
        <Grid item key={item.id} lg={4} sm={6} xs={12}>
          <NextLink href={publicRoute.itemView.url(item)!}>
            <a>
              {/* <CardItem item={item} isArtwork /> */}
              {item.id}
            </a>
          </NextLink>
        </Grid>
      ))}
      <div className='flex justify-center'>
        <Pagination
          page={currentPage ?? 1}
          count={totalPage}
          onChange={(event, value) => onSearchChange({ page: value })}
        />
      </div>
    </div>
  );
};

export default TabAssets;
