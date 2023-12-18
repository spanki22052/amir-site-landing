import cls from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={cls.Navbar}>
      <div className={cls.logo}>
        <img src="/images/logo.jpg" alt="logo" />
        <div className={cls.logoLayout}>ASMR 999 Cutting</div>
      </div>
      <div className={cls.linksContainer}>
        <a href="#">Mainpage</a>
        <a href="#videos-layout">Videos</a>
      </div>
    </div>
  );
};

export default Navbar;
