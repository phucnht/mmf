import { useMemo } from 'react';
import { Column, useTable } from 'react-table';

export default function Table() {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World'
      },
      {
        col1: 'react-table',
        col2: 'rocks'
      },
      {
        col1: 'whatever',
        col2: 'you want'
      }
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1' // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2'
      }
    ],
    []
  ) as readonly Column<{ col1: string; col2: string }>[];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table w-full">
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={index}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => {
                return (
                  <td {...cell.getCellProps()} key={index}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
