import { Dispatch, RefObject, SetStateAction } from "react";
import { RowType } from "../services/interfaces";
import { getRandomId } from "./getRandomId";

export const handleAddCell = (
  rowId: string,
  setRows: Dispatch<SetStateAction<RowType[]>>
): void => {
  setRows((prev) => {
    return prev.map((row) => {
      if (row.id === rowId && row.columns.length < 12) {
        return {
          ...row,
          columns: [
            ...row.columns,
            {
              id: getRandomId(),
              content: undefined,
              size: "0",
              style: "",
              color: "white",
              contentType: "none",
            },
          ],
        };
      } else return row;
    });
  });
};

export const handleDeleteCell = (
  rowId: string,
  cellId: string,
  setRows: Dispatch<SetStateAction<RowType[]>>
): void => {
  setRows((prev) => {
    return prev.map((row) => {
      if (row.id === rowId) {
        return {
          ...row,
          columns: row.columns.filter((cell) => cell.id !== cellId),
        };
      } else {
        return row;
      }
    });
  });
};

export const handleChangeCellStyle = (
  cellStyle: string,
  rowId: string,
  cellId: string,
  setRows: Dispatch<SetStateAction<RowType[]>>
) => {
  setRows((prev) => {
    return prev.map((row) => {
      if (row.id === rowId) {
        return {
          ...row,
          columns: row.columns.map((cell) => {
            if (cell.id === cellId) {
              return { ...cell, style: cellStyle };
            } else return cell;
          }),
        };
      } else {
        return row;
      }
    });
  });
};

export const handleChangeCellColor = (
  setRows: Dispatch<SetStateAction<RowType[]>>,
  rowId: string,
  cellId: string,
  cellColor: string
) => {
  setRows((prev) => {
    return prev.map((row) => {
      if (row.id === rowId) {
        return {
          ...row,
          columns: row.columns.map((cell) => {
            if (cell.id === cellId) {
              return { ...cell, color: cellColor };
            } else return cell;
          }),
        };
      } else {
        return row;
      }
    });
  });
};

export const addContentHandlers = {
  handleAddText: (
    setRows: Dispatch<SetStateAction<RowType[]>>,
    rowId: string,
    cellId: string,
    data: string
  ) => {
    setRows((prev) => {
      return prev.map((row) => {
        if (row.id === rowId) {
          return {
            ...row,
            columns: row.columns.map((cell) =>
              cell.id === cellId
                ? { ...cell, contentType: "text", content: data }
                : cell
            ),
          };
        } else {
          return row;
        }
      });
    });
  },
  handleAddButton: (
    setRows: Dispatch<SetStateAction<RowType[]>>,
    rowId: string,
    cellId: string,
    buttonName: string
  ) => {
    setRows((prev) => {
      return prev.map((row) => {
        if (row.id === rowId) {
          return {
            ...row,
            columns: row.columns.map((cell) =>
              cell.id === cellId
                ? {
                    ...cell,
                    content: buttonName,
                    contentType: "button",
                    color: "green",
                  }
                : cell
            ),
          };
        } else {
          return row;
        }
      });
    });
  },
  handleAddImage: (
    setRows: Dispatch<SetStateAction<RowType[]>>,
    rowId: string,
    cellId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: any = event?.target?.files;
    file &&
      setRows((prev) => {
        return prev.map((row) => {
          if (row.id === rowId) {
            return {
              ...row,
              columns: row.columns.map((cell) => {
                if (cell.id === cellId) {
                  return {
                    ...cell,
                    contentType: "image",
                    content: URL.createObjectURL(file[0]),
                  };
                } else return cell;
              }),
            };
          } else {
            return row;
          }
        });
      });
  },
};
