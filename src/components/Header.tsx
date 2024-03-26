import Emoji from "a11y-react-emoji";

const Header = () => {
  return (
    <header className=" font-quicksand flex items-center px-8 py-4 justify-center md:justify-between ">
      <span className="text-3xl font-semibold">YTEmbedder</span>
      <span className="text-md hidden md:inline-block font-light">
        Made with <Emoji symbol="💕" label="love" /> by Harsh Shah
      </span>
    </header>
  );
};

export default Header;
