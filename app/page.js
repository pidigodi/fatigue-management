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
    </div>
  );
}
