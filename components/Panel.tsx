import { Dispatch, SetStateAction } from "react";
import { ActiveCellType, RowType } from "../services/interfaces";
import { handleAddRow } from "../utils/rowFunctions";
import CellSettings from "./CellSettings";
import RowSettings from "./RowSettings";

interface PanelProps {
  setRows: Dispatch<SetStateAction<RowType[]>>;
  activeCell: ActiveCellType;
  handleSelectActive: (rowId?: string, cellId?: string) => void;
}

const Panel: React.FC<PanelProps> = ({
  setRows,
  activeCell,
  handleSelectActive,
}) => {
  return (
    <div className="panel">
      <CellSettings
        handleSelectActive={handleSelectActive}
        setRows={setRows}
        activeCell={activeCell}
      />
      <button
        onClick={() => handleAddRow(setRows)}
        className="add-button"
      >
        Add row
      </button>

      <RowSettings
        activeCell={activeCell}
        setRows={setRows}
        handleSelectActive={handleSelectActive}
      />
    </div>
  );
};

export default Panel;
