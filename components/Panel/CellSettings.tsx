import { Dispatch, SetStateAction } from "react";
import { ActiveCellType, RowType } from "../../services/interfaces";
import CellMenu from "./CellMenu";

interface CellSettingsProps {
  handleSelectActive: (rowId?: string, cellId?: string) => void;
  setRows: Dispatch<SetStateAction<RowType[]>>;
  activeCell: ActiveCellType;
}

const CellSettings: React.FC<CellSettingsProps> = ({
  activeCell,
  handleSelectActive,
  setRows,
}) => {
  if (!activeCell.cell && !activeCell.row) return null;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-1/2 h-full bg-red-50 bg-opacity-30 rounded bg-transparent flex px-2  justify-center items-center"
    >
      <CellMenu
        handleSelectActive={handleSelectActive}
        setRows={setRows}
        activeCell={activeCell}
      />
      <h1 className="text-xl whitespace-nowrap ml-5 opacity-60 bg-slate-300 rounded px-3">
        Cell:{" "}
        {activeCell.cell ? (
          <span className="text-blue-600">{activeCell.cell}</span>
        ) : (
          <span className="text-red-400">none</span>
        )}
      </h1>
    </div>
  );
};

export default CellSettings;
