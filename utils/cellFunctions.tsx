import { Dispatch, RefObject, SetStateAction } from "react";
import ImageComponent from "../components/ImageComponent";
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
            { id: getRandomId(), content: undefined, size: "0", style: "" },
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

export const handleAddContent = (
  rowId: string,
  cellId: string,
  setRows: Dispatch<SetStateAction<RowType[]>>,
  contentType: string,
  event?: React.ChangeEvent<HTMLInputElement>
): any => {
  switch (contentType) {
    case "text":
      const text = prompt("Enter text for the cell!");
      setRows((prev) => {
        return prev.map((row) => {
          if (row.id === rowId) {
            return {
              ...row,
              columns: row.columns.map((cell) =>
                cell.id === cellId ? { ...cell, content: text } : cell
              ),
            };
          } else {
            return row;
          }
        });
      });
      break;
    case "image":
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
                      content: (
                        <ImageComponent file={file[0]} cellStyle={cell.style} />
                      ),
                    };
                  } else return cell;
                }),
              };
            } else {
              return row;
            }
          });
        });
      break;
    case "button":
      setRows((prev) => {
        return prev.map((row) => {
          if (row.id === rowId) {
            return {
              ...row,
              columns: row.columns.map((cell) =>
                cell.id === cellId
                  ? {
                      ...cell,
                      content: (
                        <button
                          className={` ${cell.style} " bg-black rounded h-full w-full text-white rouneded py-2 px-4 cursor-pointer "`}
                        >
                          Button
                        </button>
                      ),
                    }
                  : cell
              ),
            };
          } else {
            return row;
          }
        });
      });
      break;

    default:
      break;
  }
};
