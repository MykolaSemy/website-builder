import { Dispatch, SetStateAction } from "react";
import { RowType } from "../services/interfaces";
import Row from "./Row";

interface RowsListProps {
  rows: RowType[];
  setRows: Dispatch<SetStateAction<RowType[]>>;
  handleOpenSettingsModal: (rowId?: string, cellId?: string) => void;
}

const RowsList: React.FC<RowsListProps> = ({
  rows,
  setRows,
  handleOpenSettingsModal,
}) => {
  if (!!!rows.length)
    return (
      <h1 className="text-blue-700">Add rows by clicking the button above!</h1>
    );
  return (
    <div className="flex flex-col justify-start items-center w-full">
      {rows.map((row) => (
        <Row
          rowData={row}
          key={row.id}
          setRows={setRows}
          handleOpenSettingsModal={handleOpenSettingsModal}
        />
      ))}
    </div>
  );
};

export default RowsList;
