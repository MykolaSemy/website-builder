import {  useState } from "react";
import { ActiveCellType, RowType } from "../services/interfaces";
import Panel from "./Panel";
import RowsList from "./RowsList";
import Title from "./Title";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [rows, setRows] = useState<RowType[]>([]);
  const [activeCell, setActiveCell] = useState<ActiveCellType>({
    row: "",
    cell: "",
  });

  const handleSelectActive = (rowId?: string, cellId?: string) => {
    setActiveCell({ row: rowId || "", cell: cellId || "" });
  };

  return (
    <div>
      <div className="w-full h-screen bg-white flex flex-col justify-start items-center">
        <Title />
        <Panel
          setRows={setRows}
          activeCell={activeCell}
          handleSelectActive={handleSelectActive}
        />
        <main className="w-full flex flex-start items-center flex-col">
          <RowsList rows={rows} handleSelectActive={handleSelectActive} />
        </main>
      </div>
    </div>
  );
};

export default App;
