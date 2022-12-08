import { Dispatch, RefObject, SetStateAction } from "react";
import { BiColorFill } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { RowType } from "../services/interfaces";
import { handleAddCell } from "../utils/cellFunctions";
import { handleDeleteRow, handleChangeRowColor } from "../utils/rowFunctions";

interface RowMenuProps {
  setRows: Dispatch<SetStateAction<RowType[]>>;
  inputColorRef: RefObject<HTMLInputElement>;
  rowData: RowType;
}

const RowMenu: React.FC<RowMenuProps> = ({
  inputColorRef,
  rowData,
  setRows,
}) => {
  const { id } = rowData;
  return (
    <div className="row-menu">
      <button
        onClick={() => handleAddCell(id, setRows)}
        className="row-menu__button"
      >
        <MdAdd />
      </button>
      <button
        onClick={() => handleDeleteRow(id, setRows)}
        className="row-menu__button"
      >
        <RiDeleteBinFill />
      </button>
      <button className="row-menu__button relative">
        <BiColorFill onClick={() => inputColorRef.current?.click()} />
        <input
          ref={inputColorRef}
          type="color"
          name=""
          id=""
          className="absolute opacity-0 w-full top-0 left-0"
          onChange={(e) => handleChangeRowColor(id, setRows, e)}
        />
      </button>
    </div>
  );
};

export default RowMenu;
