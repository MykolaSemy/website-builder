import { useEffect, useState } from "react";
import { ActiveCellType, RowType } from "../services/interfaces";
import { getRandomId } from "../utils/getRandomId";
import { handleAddRow } from "../utils/rowFunctions";
import Modal from "./Modal";
import RowsList from "./RowsList";
import Title from "./Title";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [activeCell, setActiveCell] = useState<ActiveCellType>({
    row: "",
    cell: "",
  });
  const [rows, setRows] = useState<RowType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log(rows);
  }, [rows]);
  
  const handleOpenSettingsModal = (rowId?: string, cellId?: string) => {
    setActiveCell({ row: rowId || "", cell: cellId || "" });
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="w-full h-screen bg-white flex flex-col justify-start items-center">
        <Title />
        <main className="w-full flex flex-start items-center flex-col">
          <button
            onClick={() => handleAddRow(setRows)}
            className="text-white bg-blue-600 w-fit font-light text-3xl rounded py-2 px-24 my-4 border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 duration-200 ease-in-out"
          >
            Add row
          </button>
          <RowsList
            setRows={setRows}
            rows={rows}
            handleOpenSettingsModal={handleOpenSettingsModal}
          />
        </main>
      </div>
      <Modal
        title={`Cell ${activeCell.cell} settings`}
        open={isModalOpen}
        handleOpenSettingsModal={handleOpenSettingsModal}
        setRows={setRows}
        activeCell={activeCell}
        func={() => console.log("123")}
      />
    </div>
  );
};

export default App;
