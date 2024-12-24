import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Muhammad Sami c.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import upworkDark from '../../assets/upworkdark.png';
import githubDark from '../../assets/github-dark.svg';
import upworkLight from '../../assets/upworklight.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/Muhammad Sami Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const upworkIcon = theme === 'light' ? upworkLight : upworkDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Muhammad Sami"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Muhammad
          <br />
          Sami
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://www.upwork.com/freelancers/~0160649c08694ce31b" target="_blank">
            <img src={upworkIcon} alt="Upwork icon" />
          </a>
          <a href="https://github.com/abdulsami-2001" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/muhammadsami2001" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          passionate about creating modern mobile and web applications that help businesses succeed online
        </p>
        <a href={Resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
