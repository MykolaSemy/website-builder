import { useEffect, useState } from "react";

interface ImageComponentProps {
  file: File;
  cellStyle: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ file, cellStyle }) => {
  const [image, setImage] = useState<any>();

  useEffect(() => {
    const objectURL = URL.createObjectURL(file);
    setImage(objectURL);
    return () => URL.revokeObjectURL(objectURL);
  }, [file]);

  return (
    <img
      src={image}
      alt=""
      className={` ${cellStyle} " object-contain p-1 w-full h-full "`}
    />
  );
};

export default ImageComponent;
