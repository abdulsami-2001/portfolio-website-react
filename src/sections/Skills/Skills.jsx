import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h3>Frontend Development</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Redux Toolkit" />
        <SkillList src={checkMarkIcon} skill="Material UI" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
      <h3>Backend Development</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Node js" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="Socket.io" />
        <SkillList src={checkMarkIcon} skill="WebSockets" />
        <SkillList src={checkMarkIcon} skill="JWT" />
        <SkillList src={checkMarkIcon} skill="Nodemon" />
        <SkillList src={checkMarkIcon} skill="PM2" />
        <SkillList src={checkMarkIcon} skill="Bcrypt" />
        <SkillList src={checkMarkIcon} skill="Multer" />
      </div>
      <hr />
      <h3>Databases</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Cassandra" />
        <SkillList src={checkMarkIcon} skill="Firebase Realtime Database" />
      </div>
      <hr />
      <h3>Testing & Code Quality</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Manual Testing" />
        <SkillList src={checkMarkIcon} skill="React Testing Library" />
      </div>
      <hr />
      <h3>Cloud & Deployment</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Azure" />
        <SkillList src={checkMarkIcon} skill="Google Cloud" />
        <SkillList src={checkMarkIcon} skill="Heroku" />
        <SkillList src={checkMarkIcon} skill="Vercel" />
        <SkillList src={checkMarkIcon} skill="Netlify" />
        <SkillList src={checkMarkIcon} skill="Nginx" />
      </div>
      <hr />
      <h3>Version Control & Collaboration</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="GitLab" />
        <SkillList src={checkMarkIcon} skill="Bitbucket" />
      </div>
      <hr />
      <h3>API Development</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="REST APIs with Express.js" />
        <SkillList src={checkMarkIcon} skill="GraphQL" />
        <SkillList src={checkMarkIcon} skill="Apollo" />
      </div>
    </section>
  );
}

export default Skills;
