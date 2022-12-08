interface TitleProps {}

const Title: React.FC<TitleProps> = () => {
  return (
    <header>
      <h1 className="text-blue-600 font-titleFont text-2xl font-extrabold mt-4">
        Simple Website Builder
      </h1>
    </header>
  );
};

export default Title;
