import cls from "./InfoBlock.module.scss";

const InfoBlock = () => {
  return (
    <div className={cls.InfoBlock}>
      <div className={cls.label}>Welcome to my channel </div>
      <img className={cls.logoImg} src="/images/logo.jpg" alt="logo" />

      <div className={cls.nameLabel}>ASMR 999 Cutting</div>
      <div className={cls.info}>
        ASMR Slicing Game is a fun and relaxing 3D ASMR simulator in which you
        will cut everything that comes to hand: from kinetic sand to unusual
        shapes. Time to stop and calm down, take a break from the worldly
        bustle. Beautiful cutting of kinetic sand with a pleasant sound
        especially at the end of the day or at bedtime oddly satisfying video
        sleep
      </div>
    </div>
  );
};

export default InfoBlock;
