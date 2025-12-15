<<<<<<< HEAD
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";

const slides = [
  {
    title: "What Is Fatigue?",
    content: [
      "Fatigue is tiredness, weariness or exhaustion which eventually ends in sleep. It results from long periods of physical or mental activity.",
      "Fatigue leads to lower performance at work and is one of the main causes of death on our roads.",
      "Falling asleep at the wheel is often thought of as a common sign of driver fatigue. But falling asleep is an extreme stage of fatigue. You can be fatigued long before you nod off at the wheel.",
      "You can reduce the risk of being killed or injured on the roads, or killing or injuring others, by putting in place some actions to help you manage fatigue."
    ]
  },
  {
    title: "Common Causes of Fatigue",
    content: [
    "Alcohol and drugs",
    "Poor sleep or sleep debt",
    "Long driving hours and lack of breaks",
    "Health, stress, and lifestyle factors",
    "Sleep disorders",
    "Medical conditions",
    "Emotional issues",
    "Conditions on the road and in the vehicle",
    "Over Doing It"
    ]
    },
      {
        title: "Symptoms of Fatigue - Physical",
        content: [
        "Heavy or sore eyes",
        "Head",
        "Mouth, jaw and shoulders",
        "Abdomen (stomach)",
        "Whole body",
        "Hunching forward",
        "Indigestion",
        "Yawning"
        ]
        },
        {
          title: "Symptoms of Fatigue - Non-Physical",
          content: [
          "Becoming forgetful",
          "Not being able to weigh up situations",
          "Poor concentration and forgetfulness",
          "Mood swings and irritability",
          "Microsleeps and lane drifting",
          "Becoming unaware of time",
          "Making more mistakes",
          "Finding it difficult to concentrate",
          "Apathy",
          "Seeing things that are not there",
          "Poor communication",
          "Poor decision making"
          ]
          },
        {
          title: "Effects on Driving",
          content: [
          "Slower reaction time",
          "Missed hazards and intersections",
          "Poor speed control",
          "Tailgating and lane drifting",
          "Position on the road",
          "Navigation",
          "Perception",
          "Gear changes",
          "Overreaction and irritability",
          "Response to hazards",
          "Alertness",
          "Speed of vehicle",
          "Poor judgement"
          ]
          },
          {
            title: "Managing Fatigue when you are not at work",
            content: [
            "Manage sleep. Get enough sleep before you start a new shift",
            "Maintain a healthy diet.",
            "Do exercise when possible",
            "Manage personal issues",
            "Relax in your leisure time",
            "Get a medical check-up"
            ]
            },
            {
              title: "Managing Fatigue when you are at work",
              content: [
              "Sleep, shifts and rosters",
              "Plan your trip",
              "Take a power nap",
              "Leave your vehicle to stretch and exercise",
              "Drink plenty of fluids",
              "Eat healthy food",
              "No alcohol or drugs",
              "Ventilate the vehicle"
              ]
              },
            {
              title: "End of Section",
              content: [
              "Fatigue can be managed",
              "Recognise symptoms early",
              "Never drive while fatigued",
              "Complete the self-check questions"
              ]
              }
];

export default function FatigueSlideshow() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>{slide.title}</h1>

        <ul className={styles.list}>
          {slide.content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className={styles.controls}>
          <button
            onClick={() => setIndex(Math.max(index - 1, 0))}
            disabled={index === 0}
            className={styles.button}
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <span className={styles.counter}>
            Slide {index + 1} of {slides.length}
          </span>

          <button
            onClick={() =>
              setIndex(Math.min(index + 1, slides.length - 1))
            }
            disabled={index === slides.length - 1}
            className={`${styles.button} ${styles.primary}`}
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
=======
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
>>>>>>> 8e7ef640a05c83531762343cd65021f28da9d168
    </div>
  );
}
