import { useEffect, useRef, useState } from "react";
import { BiSave } from "react-icons/bi";
import { ActiveCellType, RowType } from "../services/interfaces";
import Panel from "./Panel/Panel";
import RowsList from "./Row/RowsList";
import Title from "./Title";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [rows, setRows] = useState<RowType[]>([]);
  const [activeCell, setActiveCell] = useState<ActiveCellType>({
    row: "",
    cell: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/rows");
        const data = await response.json();
        setRows(JSON.parse(data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const onSave = () => {
    setIsSaving(true);
    fetch("/api/rows", {
      method: "POST",
      body: JSON.stringify(rows),
    })
      .then((response) => alert(response.statusText))
      .finally(() => setIsSaving(false));
  };

  const handleSelectActive = (rowId?: string, cellId?: string) => {
    setActiveCell({ row: rowId || "", cell: cellId || "" });
  };

  return (
    <div>
      <div className="w-full h-screen bg-white flex flex-col justify-start items-center">
        <button
          disabled={isSaving}
          onClick={onSave}
          className={`${
            isSaving && " animate-pulse "
          } " flex justify-center items-center fixed left-5 top-5 cursor-pointer `}
        >
          <BiSave className="mx-2 " />
        </button>
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
