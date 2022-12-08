import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { RowType } from "../services/interfaces";
import { getRandomId } from "./getRandomId";

export const handleAddRow = (
  setRows: Dispatch<SetStateAction<RowType[]>>
): void => {
  setRows((prev) => [
    ...prev,
    {
      color: "white",
      columns: [],
      id: getRandomId(),
    },
  ]);
};

export const handleDeleteRow = (
  rowId: string,
  setRows: Dispatch<SetStateAction<RowType[]>>
): void => {
  setRows((prev) => prev.filter((row) => row.id !== rowId));
};

export const handleChangeRowColor = (
  rowID: string,
  setRows: Dispatch<SetStateAction<RowType[]>>,
  e: ChangeEvent<HTMLInputElement>
) => {
  setRows((prev) => {
    return prev.map((row) => {
      if (row.id === rowID) {
        return { ...row, color: e.target.value };
      } else return row;
    });
  });
};
