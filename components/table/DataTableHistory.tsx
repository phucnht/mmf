import { useCallback, useEffect, useMemo, useState } from 'react';
import { getNftItemHistory } from 'store/market/nft-item/nftItem.api';
import { selectNftItemHistoryData } from 'store/market/nft-item/nftItemHistory.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import _map from 'lodash/map';
import DataTable from './DataTable';
import { format } from 'date-fns';
import TextCopyable from 'components/display/text/TextCopyable';
import Web3 from 'web3';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { clientMarket } from 'utils/api';
import { NftItemHistoryDto } from 'store/market/nft-item/nftItem.i';

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
        time: h.createdAt,
        amount: h.amount,
        from: h.fromAddress,
        to: h.toAddress
      })),
    [history]
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

  const getNftItemHistory = useCallback(async (tokenId: string) => {
    const history = await clientMarket.get(`/item-histories`, { params: { tokenId } });
    setHistory((history as any).items as any);
  }, []);

  useEffect(() => {
    getNftItemHistory(tokenId);
  }, [getNftItemHistory, tokenId]);

  return <DataTable title="Sale History" sortable data={data} columns={columns} className="my-24" />;
}
