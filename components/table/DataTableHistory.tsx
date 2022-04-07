import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppSelector } from 'store/store.hook';
import _map from 'lodash/map';
import DataTable from './DataTable';
import { format } from 'date-fns';
import TextCopyable from 'components/display/text/TextCopyable';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { clientMarket } from 'utils/api';
import { NftItemHistoryDto } from 'store/market/nft-item/nftItem.i';
import { HistoryType } from 'store/store.enum';

export interface DataTableHistoryProps {
  tokenId: string;
}

export default function DataTableHistory({ tokenId }: DataTableHistoryProps) {
  // const dispatch = useAppDispatch();
  // const nftItemHistory = useAppSelector(selectNftItemHistoryData);
  const [history, setHistory] = useState<NftItemHistoryDto[]>([]);
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  const data = useMemo(
    () =>
      _map(history, h => ({
        id: h.id,
        type: HistoryType[h.type],
        time: h.createdAt,
        amount: h.amount,
        price: h.price,
        from: h.fromAddress,
        to: h.toAddress
      })),
    [history]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Action',
        accessor: (row: any) => row.type
      },
      {
        Header: 'Time',
        accessor: (row: any) => format(new Date(row.time), 'dd MMM yyyy HH:mm')
      },
      {
        Header: 'Amount',
        accessor: (row: any) => row.amount
      },
      {
        Header: 'Price',
        accessor: (row: any) => `${row.price || 'NaN'} ${BUSD?.symbol}`
      },
      {
        Header: 'From',
        accessor: (row: any) => (!row.from ? '...' : <TextCopyable value={row.from} />),
        headerClassName: 'text-center'
      },
      {
        Header: 'To',
        accessor: (row: any) => (!row.to ? '...' : <TextCopyable value={row.to} />),
        headerClassName: 'justify-center'
      }
    ],
    [BUSD]
  );

  const getNftItemHistory = useCallback(async (tokenId: string) => {
    const history = await clientMarket.get(`/item-histories`, { params: { tokenId } });
    setHistory((history as any).items as any);
  }, []);

  useEffect(() => {
    getNftItemHistory(tokenId);
  }, [getNftItemHistory, tokenId]);

  return <DataTable title="Sale History" sortable data={data} columns={columns} className="my-24" />;
}
