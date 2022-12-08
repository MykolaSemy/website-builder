import { Dispatch, SetStateAction, useRef } from "react";
import { BiColorFill } from "react-icons/bi";
import { SlSizeFullscreen, SlSizeActual } from "react-icons/sl";
import { RiDeleteBinFill } from "react-icons/ri";
import { ActiveCellType, RowType } from "../services/interfaces";
import { handleAddCell } from "../utils/cellFunctions";
import {
  handleDeleteRow,
  handleChangeRowColor,
  handleChangeRowGap,
} from "../utils/rowFunctions";
import { GrChapterAdd } from "react-icons/gr";

interface RowMenuProps {
  setRows: Dispatch<SetStateAction<RowType[]>>;
  activeCell: ActiveCellType;
  handleSelectActive: (rowId?: string, cellId?: string) => void;
}
const RowMenu: React.FC<RowMenuProps> = ({
  activeCell,
  setRows,
  handleSelectActive,
}) => {
  const inputColorRef = useRef<HTMLInputElement>(null);

  const { row } = activeCell;
  return (
    <div className="row-menu">
      <button
        onClick={() => handleAddCell(row, setRows)}
        className="menu-button"
      >
        <GrChapterAdd />
      </button>
      <button
        onClick={() => {
          handleDeleteRow(row, setRows);
          handleSelectActive();
        }}
        className="menu-button"
      >
        <RiDeleteBinFill />
      </button>

      <button
        className="menu-button relative"
        onClick={() => inputColorRef.current?.click()}
      >
        <BiColorFill />
        <input
          ref={inputColorRef}
          type="color"
          name=""
          id=""
          className="absolute opacity-0 w-full top-0 left-0"
          onChange={(e) => handleChangeRowColor(row, setRows, e)}
        />
      </button>

      <button
        className="menu-button "
        onClick={() => handleChangeRowGap(row, setRows, 5)}
      >
        <SlSizeFullscreen />
      </button>

      <button
        className="menu-button "
        onClick={() => handleChangeRowGap(row, setRows, -5)}
      >
        <SlSizeActual />
      </button>
    </div>
  );
};

export default RowMenu;
