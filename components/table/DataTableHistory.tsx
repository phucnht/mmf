import { useEffect, useMemo } from 'react';
import { getNftItemHistory } from 'store/market/nft-item/nftItem.api';
import { selectNftItemHistoryData } from 'store/market/nft-item/nftItemHistory.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import _map from 'lodash/map';
import DataTable from './DataTable';
import { format } from 'date-fns';
import TextCopyable from 'components/display/text/TextCopyable';
import Web3 from 'web3';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';

export interface DataTableHistoryProps {
  nftItemId: string;
}

export default function DataTableHistory({ nftItemId }: DataTableHistoryProps) {
  const dispatch = useAppDispatch();
  const nftItemHistory = useAppSelector(selectNftItemHistoryData);
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  const data = useMemo(
    () =>
      _map(nftItemHistory, history => ({
        id: history.id,
        time: history.createdAt,
        amount: history.amount,
        from: history.fromAddress,
        to: history.toAddress
      })),
    [nftItemHistory]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Time',
        accessor: (row: any) => format(new Date(row.time), 'dd MMM yyyy HH:mm')
      },
      {
        Header: 'Amount',
        accessor: (row: any) => `${Web3.utils.fromWei(`${row.amount}`)} ${BUSD?.symbol}`
      },
      {
        Header: 'From',
        accessor: (row: any) => <TextCopyable value={row.from} />,
        headerClassName: 'text-center'
      },
      {
        Header: 'To',
        accessor: (row: any) => <TextCopyable value={row.to} />,
        headerClassName: 'justify-center'
      }
    ],
    [BUSD]
  );

  useEffect(() => {
    if (nftItemId) {
      dispatch(getNftItemHistory({ nftItemId }));
    }
  }, [dispatch, nftItemId]);

  return <DataTable title="Sale History" sortable data={data} columns={columns} className="my-24" />;
}
