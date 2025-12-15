import styles from "./page.module.css";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern web applications.",
      level: "Beginner",
      duration: "8 weeks",
      students: 2847
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      description: "Master advanced React concepts including hooks, context, and performance optimization.",
      level: "Advanced",
      duration: "6 weeks",
      students: 1523
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "Build complete applications from frontend to backend with modern frameworks and databases.",
      level: "Intermediate",
      duration: "12 weeks",
      students: 3241
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      description: "Create beautiful, user-friendly interfaces with modern design principles and tools.",
      level: "Beginner",
      duration: "5 weeks",
      students: 1876
    },
    {
      id: 5,
      title: "Database Design & SQL",
      description: "Master database concepts, SQL queries, and design patterns for scalable applications.",
      level: "Intermediate",
      duration: "7 weeks",
      students: 2103
    },
    {
      id: 6,
      title: "DevOps & Cloud Computing",
      description: "Learn deployment strategies, CI/CD pipelines, and cloud infrastructure management.",
      level: "Advanced",
      duration: "10 weeks",
      students: 1654
    }
  ];

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>LearnHub</div>
          <div className={styles.navLinks}>
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className={styles.loginBtn}>Sign In</button>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Unlock Your Potential Through Learning
          </h1>
          <p className={styles.heroDescription}>
            Access world-class courses designed by industry experts. Learn at your own pace and advance your career with practical, hands-on education.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.primaryBtn}>Start Learning</button>
            <button className={styles.secondaryBtn}>Browse Courses</button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10,000+</div>
              <div className={styles.statLabel}>Active Students</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Expert Instructors</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Satisfaction Rate</div>
            </div>
          </div>
        </section>

        <section className={styles.coursesSection} id="courses">
          <h2 className={styles.sectionTitle}>Popular Courses</h2>
          <p className={styles.sectionDescription}>
            Explore our most popular courses and start your learning journey today
          </p>
          <div className={styles.coursesGrid}>
            {courses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseHeader}>
                  <span className={styles.courseLevel}>{course.level}</span>
                  <span className={styles.courseDuration}>{course.duration}</span>
                </div>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
                <div className={styles.courseFooter}>
                  <span className={styles.studentCount}>{course.students.toLocaleString()} students</span>
                  <button className={styles.enrollBtn}>Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>LearnHub</h4>
            <p>Empowering learners worldwide with quality education.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <a href="#courses">Courses</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <a href="#help">Help Center</a>
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 LearnHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
