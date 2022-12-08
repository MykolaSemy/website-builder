import { useRef } from "react";
import { AiOutlineFileAdd, AiOutlineMinus } from "react-icons/ai";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { ImTextColor } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { handleDeleteCell } from "../utils/cellFunctions";

interface CellMenuProps {
  onAddContent: (
    type: "image" | "button" | "text",
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleOpenSettingsModal: (rowId?: string, cellId?: string) => void;
  onOpenSettingsModal: () => void;
  onDeleteCell: () => void;
}

const CellMenu: React.FC<CellMenuProps> = ({
  onDeleteCell,
  onOpenSettingsModal,
  onAddContent,
  handleOpenSettingsModal,
}) => {
  const imgInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="cell-menu ">
      <button
        onClick={() => onAddContent("text")}
        className="cell-menu__button"
      >
        <ImTextColor />
      </button>
      <button
        onClick={() => onAddContent("button")}
        className="cell-menu__button"
      >
        <BsFillMenuButtonFill />
      </button>
      <button
        onClick={() => imgInputRef.current?.click()}
        className="cell-menu__button"
      >
        <AiOutlineFileAdd />
        <input
          type="file"
          name=""
          id=""
          hidden
          ref={imgInputRef}
          onChange={(e) => onAddContent("image", e)}
        />
      </button>
      <button onClick={onDeleteCell} className="cell-menu__button">
        <AiOutlineMinus />
      </button>
      <button onClick={onOpenSettingsModal} className="cell-menu__button">
        <IoIosSettings />
      </button>
    </div>
  );
};

export default CellMenu;
