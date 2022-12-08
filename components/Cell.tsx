import { Dispatch, SetStateAction, useContext, useRef } from "react";
import { AiOutlineFileAdd, AiOutlineMinus } from "react-icons/ai";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { ImTextColor } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { CellType, RowType } from "../services/interfaces";
import { handleDeleteCell, handleAddContent } from "../utils/cellFunctions";
import CellMenu from "./CellMenu";

interface CellProps {
  cell: CellType;
  rowId: string;
  setRows: Dispatch<SetStateAction<RowType[]>>;
  handleOpenSettingsModal: (rowId?: string, cellId?: string) => void;
}

const Cell: React.FC<CellProps> = ({
  cell,
  rowId,
  setRows,
  handleOpenSettingsModal,
}) => {
  const onAddContent = (
    type: "image" | "button" | "text",
    event?: React.ChangeEvent<HTMLInputElement>
  ) => {
    event
      ? handleAddContent(rowId, cell.id, setRows, type, event)
      : handleAddContent(rowId, cell.id, setRows, type);
  };

  const onDeleteCell = () => handleDeleteCell(rowId, cell.id, setRows);
  const onOpenSettingsModal = () => handleOpenSettingsModal(rowId, cell.id);

  return (
    <div
      className={`" border-2 rounded  group border-slate-300 relative  " col-span-${cell.size} `}
    >
      <CellMenu
        onAddContent={onAddContent}
        handleOpenSettingsModal={handleOpenSettingsModal}
        onOpenSettingsModal={onOpenSettingsModal}
        onDeleteCell={onDeleteCell}
      />
      <p className="flex items-center justify-center h-full text-3xl">
        {cell.content}
      </p>
    </div>
  );
};

export default Cell;
