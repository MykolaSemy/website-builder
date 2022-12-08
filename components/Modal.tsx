import { Dispatch, SetStateAction, useState } from "react";
import ReactDOM from "react-dom";
import { ActiveCellType, RowType } from "../services/interfaces";
import { handleChangeCellStyle } from "../utils/cellFunctions";

interface ModalProps {
  title: string;
  open: boolean;
  setRows: Dispatch<SetStateAction<RowType[]>>;
  handleOpenSettingsModal: (rowId?: string, cellId?: string) => void;
  activeCell: ActiveCellType;
  func: (props: any) => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  func,
  activeCell,
  handleOpenSettingsModal,
  setRows,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleAcceptSettings = () => {
    handleChangeCellStyle(inputValue, activeCell.row, activeCell.cell, setRows);
    handleOpenSettingsModal();
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <div
      onClick={() => handleOpenSettingsModal()}
      className="h-screen w-full fixed top-0 left-0 bg-black bg-opacity-25 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-fit h-fit p-5 bg-white rounded flex flex-col justify-around items-center"
      >
        <div className="w-full flex justify-end items-center">
          <span
            className="cursor-pointer m-2 font-bold opacity-70"
            onClick={() => handleOpenSettingsModal()}
          >
            X
          </span>
        </div>

        <h1 className="text-2xl">{title}</h1>
        <p className="opacity-50 text-sm w-3/4 my-5">
          Add your own styles to the cell component! (only twcss styles
          available)
        </p>
        <input
          type="text"
          className="border-blue-600 border-2 rounded-xl p-2 w-full outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded my-3  "
          onClick={() => handleAcceptSettings()}
        >
          OK
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
