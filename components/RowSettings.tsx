import { Dispatch, SetStateAction } from "react";
import { ActiveCellType, RowType } from "../services/interfaces";
import RowMenu from "./RowMenu";

interface RowSettingsProps {
  activeCell: ActiveCellType;
  setRows: Dispatch<SetStateAction<RowType[]>>;
  handleSelectActive: (rowId?: string, cellId?: string) => void;
}

const RowSettings: React.FC<RowSettingsProps> = ({
  activeCell,
  setRows,
  handleSelectActive,
}) => {
  if (!activeCell.row) return null;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-1/2 h-full bg-blue-50 bg-opacity-30  rounded bg-transparent flex px-2  justify-start items-center"
    >
      <h1 className="text-xl whitespace-nowrap mr-5 opacity-60 bg-slate-300 rounded px-3">
        Row:{" "}
        {activeCell.row ? (
          <span className="text-blue-600">{activeCell.row}</span>
        ) : (
          <span className="text-red-400">none</span>
        )}
      </h1>
      <RowMenu
        activeCell={activeCell || "none"}
        setRows={setRows}
        handleSelectActive={handleSelectActive}
      />
    </div>
  );
};

export default RowSettings;
