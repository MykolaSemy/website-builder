import { CellType } from "../services/interfaces";

interface CellProps {
  cell: CellType;
  rowId: string;
  handleSelectActive: (rowId?: string, cellId?: string) => void;
}

const Cell: React.FC<CellProps> = ({ cell, rowId, handleSelectActive }) => {
  const onSelectCell = () => handleSelectActive(rowId, cell.id);

  return (
    <div
      style={{ background: cell.color }}
      className={`" border-2 rounded  group border-slate-300 relative  " col-span-${cell.size} `}
      onClick={(e) => {
        e.stopPropagation();
        onSelectCell();
      }}
    >
      <p className="flex items-center justify-center h-full text-3xl">
        {cell.content}
      </p>
    </div>
  );
};

export default Cell;
