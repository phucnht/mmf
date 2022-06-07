import { Grid, Pagination } from '@mui/material';
import { NextLink } from 'components';
import { useSearch } from 'hooks';
import { useQuery } from 'react-query';
import { publicRoute } from 'routes';
import { marketService } from 'services';
import { CardItem } from 'views/Cards';

const TabInventory = () => {
  const [dataSearch, onSearchChange] = useSearch();

  const { data, isLoading } = useQuery(
    ['marketService.fetchInventory', dataSearch],
    () => marketService.fetchInventory(dataSearch),
    { keepPreviousData: true },
  );
  const { items = [], total, currentPage, pages: totalPage } = data ?? {};

  return (
    <div>
      <div className='mb-6'>
        <div className=''>{total} Assets</div>
      </div>

      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item lg={12 / 5} md={4} sm={6} xs={12} key={item.id}>
            <NextLink href={publicRoute.itemView.url(item)!}>
              <a>
                <CardItem item={item} />
              </a>
            </NextLink>
          </Grid>
        ))}
      </Grid>
      <div className='flex justify-center my-8'>
        <Pagination
          page={currentPage ?? 1}
          count={totalPage}
          onChange={(event, value) => onSearchChange({ page: value })}
        />
      </div>
    </div>
  );
};

export default TabInventory;
