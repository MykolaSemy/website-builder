import { RowType } from "../../services/interfaces";
import Cell from "../Cell/Cell";

interface RowProps {
  rowData: RowType;
  handleSelectActive: (rowId?: string, cellId?: string) => void;
}

const Row: React.FC<RowProps> = ({ rowData, handleSelectActive }) => {
  const { columns, id, gap, color } = rowData;

  return (
    <div
      style={{
        columnGap: gap,
        gridTemplateColumns: ` repeat(${columns.length}, minmax(0, 1fr)) `,
        background: color,
      }}
      onClick={() => handleSelectActive(rowData.id)}
      className="cursor-pointer grid-rows-1 grid-flow-row grid w-3/4  group shadow-md h-24 rounded my-1 relative"
    >
      {!!!columns.length && (
        <span className="h-full w-full flex justify-center items-center opacity-40">
          [row is empty, tap to start editing!]
        </span>
      )}
      {columns.map((cell) => (
        <Cell
          cell={cell}
          key={cell.id}
          rowId={id}
          handleSelectActive={handleSelectActive}
        />
      ))}
    </div>
  );
};

export default Row;
