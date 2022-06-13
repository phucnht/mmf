import { Container, Grid, Pagination } from '@mui/material';
import { NextLink } from 'components';
import { useSearch } from 'hooks';
import { useQuery } from 'react-query';
import { publicRoute } from 'routes';
import { marketService } from 'services';
import { CardSaleItem } from 'views/Cards';
import { MarketFilter } from './components';

const TabListing = () => {
  const [dataSearch, onSearchChange] = useSearch();

  const { data } = useQuery(['marketService.fetchSales', dataSearch], () => marketService.fetchSales(dataSearch), {
    keepPreviousData: true,
  });
  const { items = [], total, currentPage, pages: totalPage } = data ?? {};

  return (
    <Container className='py-10'>
      <div className='flex items-end mb-6'>
        <div className='font-bold text-2xl mr-10'>Marketplace</div>
        <MarketFilter onSearchChange={onSearchChange} />
      </div>

      <div className='mb-6'>
        <div>{total} Items found</div>
      </div>

      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xl={12 / 5} lg={3} md={4} sm={6} xs={12} key={item.id}>
            <NextLink href={publicRoute.itemView.url({ id: item.nftItem })!}>
              <a>
                <CardSaleItem item={item} />
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
    </Container>
  );
};

export default TabListing;
