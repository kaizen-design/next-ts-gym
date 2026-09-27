// TODO (Этап 1, дни 7-9): сделай этот компонент дженериком.
//
// type Column<T> = { header: string; accessor: (row: T) => React.ReactNode };
// function Table<T>({ data, columns }: { data: T[]; columns: Column<T>[] })
//
// Затем примени <Table<Order> ... /> на странице /orders вместо ручного .map

export default function Table({ data, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col, j) => (
              <td key={j}>{col.accessor(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
