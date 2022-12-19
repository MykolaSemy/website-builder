import { CellType } from "../../services/interfaces";

interface CellContentProps {
  cell: CellType;
}

const CellContent: React.FC<CellContentProps> = ({ cell }) => {
  const { content, contentType, color, style } = cell;

  switch (contentType) {
    case "text":
      return <p className="text-3xl">{content}</p>;
    case "button":
      return <button style={{ backgroundColor: color }} className="w-1/2 h-1/2">{content}</button>;
    case "image":
      return (
        <img
          src={content}
          className=" object-contain p-1 w-full h-full "
          alt=""
        />
      );
    default:
      return (
        <p className="hover:opacity-50 h-full w-full flex justify-center items-center duration-200 opacity-0">cell is empty</p>
      );
      break;
  }
};

export default CellContent;
