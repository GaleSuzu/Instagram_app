import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <img
        src="../../../public/assets/instagram-svgrepo-com.svg"
        alt="logo"
        className={styles.logo}
      />
    </div>
  );
};

export default Logo;
