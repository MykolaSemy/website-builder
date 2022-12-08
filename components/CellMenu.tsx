import { Dispatch, SetStateAction, useRef, useState } from "react";
import { AiOutlineFileAdd, AiOutlineDelete } from "react-icons/ai";
import { BiColorFill } from "react-icons/bi";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { RowType, ActiveCellType } from "../services/interfaces";
import {
  addContentHandlers,
  handleChangeCellColor,
  handleDeleteCell,
} from "../utils/cellFunctions";

interface CellMenuProps {
  setRows: Dispatch<SetStateAction<RowType[]>>;
  activeCell: ActiveCellType;
  handleSelectActive: (rowId?: string, cellId?: string) => void;
}

const CellMenu: React.FC<CellMenuProps> = ({
  activeCell,
  setRows,
  handleSelectActive,
}) => {
  const [textInputValue, setTextInputValue] = useState("");
  const { handleAddButton, handleAddImage, handleAddText } = addContentHandlers;
  const { cell, row } = activeCell;
  const imgInputRef = useRef<HTMLInputElement>(null);
  const inputColorRef = useRef<HTMLInputElement>(null);

  return (
    <div className="cell-menu ">
      <button
        onClick={() => {
          handleDeleteCell(row, cell, setRows);
          handleSelectActive(row);
        }}
        className="menu-button"
      >
        <AiOutlineDelete />
      </button>
      <button
        onClick={() => handleAddButton(setRows, row, cell)}
        className="menu-button"
      >
        <BsFillMenuButtonFill />
      </button>
      <button
        onClick={() => imgInputRef.current?.click()}
        className="menu-button"
      >
        <AiOutlineFileAdd />
        <input
          type="file"
          name=""
          id=""
          hidden
          ref={imgInputRef}
          onChange={(e) => handleAddImage(setRows, row, cell, e)}
        />
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
          onChange={(e) =>
            handleChangeCellColor(setRows, row, cell, e.target.value)
          }
        />
      </button>

      <div className="bg-slate-200 w-fit rounded-md p-4 flex justify-center items-center gap-4 h-14">
        <input
          className="h-full rounded w-36 outline-none p-4"
          type="text"
          value={textInputValue}
          onChange={(e) => setTextInputValue(e.target.value)}
        />

        <button
          className="h-full w-fit flex justify-around items-center whitespace-nowrap p-4 cursor-pointer rounded bg-slate-300 hover:bg-slate-400 duration-200 ease-in-out hover:text-white "
          onClick={() => {
            handleAddText(setRows, row, cell, textInputValue);
            setTextInputValue("");
          }}
        >
          Add title
        </button>
      </div>
    </div>
  );
};

export default CellMenu;
