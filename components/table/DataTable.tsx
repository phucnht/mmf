import _ from 'lodash';
import { FC } from 'react';
import { useTable, useSortBy, Column } from 'react-table';
import TableEmpty from './components/empty/TableEmpty';

import Table from './Table';

const { Container, Head, Row, HeaderCell, Body, Cell } = Table;

export interface DataTableProps {
  title?: string;
  sortable?: boolean;
  data: readonly Record<string, unknown>[];
  columns: readonly Column<Record<string, unknown>>[];
  className?: string;
}

const DataTable: FC<DataTableProps> = ({ title, sortable = false, data, columns, className = '' }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);
  return (
    <Container title={title} className={className}>
      <Table {...getTableProps()}>
        <Head>
          {headerGroups.map((headerGroup, index) => (
            <Row {...headerGroup.getHeaderGroupProps()} className="w-[calc(100% - 1.6rem)]">
              {headerGroup.headers.map(column => {
                return (
                  <HeaderCell
                    sortable={sortable}
                    column={column}
                    align="center"
                    {...column.getHeaderProps(sortable ? (column as any).getSortByToggleProps() : undefined)}
                  >
                    {column.render('Header')}
                  </HeaderCell>
                );
              })}
            </Row>
          ))}
        </Head>
        <Body {...getTableBodyProps()}>
          {_.isEmpty(rows) ? (
            <TableEmpty />
          ) : (
            rows.map(row => {
              prepareRow(row);
              return (
                <Row {...row.getRowProps()} className="hover:bg-primary-dark hover:opacity-70">
                  {row.cells.map(cell => {
                    const key = `${cell.column.id}-${cell.row.id}`;

                    console.log(cell.column.id);
                    return (
                      <Cell
                        align="center"
                        {...cell.getCellProps()}
                        isCopyable={['from', 'to'].includes(cell.column.id)}
                      >
                        {cell.render('Cell')}
                      </Cell>
                    );
                  })}
                </Row>
              );
            })
          )}
        </Body>
      </Table>
    </Container>
  );
};

export default DataTable;
