import { RowType } from "../services/interfaces";
import { MdAdd } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { BiColorFill } from "react-icons/bi";
import Cell from "./Cell";
import { handleAddCell } from "../utils/cellFunctions";
import { handleChangeRowColor, handleDeleteRow } from "../utils/rowFunctions";
import { Dispatch, SetStateAction, useRef } from "react";
import RowMenu from "./RowMenu";

interface RowProps {
  rowData: RowType;
  setRows: Dispatch<SetStateAction<RowType[]>>;
  handleOpenSettingsModal: (rowId?: string, cellId?: string) => void;
}

const Row: React.FC<RowProps> = ({
  rowData,
  setRows,
  handleOpenSettingsModal,
}) => {
  // const [rowColor, setrowColor] = useState();
  const { columns, id } = rowData;
  const inputColorRef = useRef<HTMLInputElement>(null);

  return (
    <div
      style={{
        gridTemplateColumns: ` repeat(${columns.length}, minmax(0, 1fr)) `,
        background: rowData.color,
      }}
      className="grid-rows-1 grid-flow-row grid w-3/4  group shadow-md h-24 rounded my-1 relative"
    >
      <RowMenu
        inputColorRef={inputColorRef}
        rowData={rowData}
        setRows={setRows}
      />
      {!!!columns.length && (
        <span className="h-full w-full flex justify-center items-center opacity-40">
          [row is empty, try to add cell in the right-side menu!]
        </span>
      )}
      {columns.map((cell) => (
        <Cell
          cell={cell}
          key={cell.id}
          rowId={id}
          setRows={setRows}
          handleOpenSettingsModal={handleOpenSettingsModal}
        />
      ))}
    </div>
  );
};

export default Row;
