interface ICloseBackground {
  sideMenuToggleHandler: () => void;
}

function CloseBackground({ sideMenuToggleHandler }: ICloseBackground) {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-screen h-screen"
      onClick={sideMenuToggleHandler}
    ></div>
  );
}

export default CloseBackground;
