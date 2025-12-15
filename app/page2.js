"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Brain,
  HeartPulse,
  Car,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "What Is Fatigue?",
    icon: Brain,
    content: [
      "Fatigue is physical or mental exhaustion that reduces alertness and performance.",
      "It develops after long periods of work, stress, or inadequate sleep.",
      "You can be fatigued long before you feel sleepy.",
      "Fatigue is a major contributor to serious road crashes."
    ]
  },
  {
    title: "Common Causes of Fatigue",
    icon: AlertTriangle,
    content: [
      "Alcohol or drug use",
      "Poor sleep or sleep debt",
      "Long driving hours without breaks",
      "Stress, health, and lifestyle factors",
      "Medical or sleep disorders"
    ]
  },
  {
    title: "Physical Symptoms",
    icon: HeartPulse,
    content: [
      "Heavy or sore eyes",
      "Yawning and head nodding",
      "Poor posture or slouching",
      "Indigestion or discomfort",
      "Whole-body tiredness"
    ]
  },
  {
    title: "Non-Physical Symptoms",
    icon: Brain,
    content: [
      "Poor concentration or memory",
      "Slower decision making",
      "Mood changes or irritability",
      "Microsleeps or zoning out",
      "Reduced awareness of surroundings"
    ]
  },
  {
    title: "Effects on Driving",
    icon: Car,
    content: [
      "Slower reaction times",
      "Missed hazards and signals",
      "Poor lane positioning",
      "Inconsistent speed control",
      "Increased crash risk"
    ]
  },
  {
    title: "Managing Fatigue",
    icon: CheckCircle,
    content: [
      "Get adequate sleep before driving",
      "Plan trips and rest breaks",
      "Stay hydrated and eat well",
      "Take short naps when required",
      "Never drive while fatigued"
    ]
  }
];

export default function FatigueLearningModule() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <Card className="w-full max-w-3xl rounded-2xl shadow-xl bg-white/95">
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900 text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-semibold text-slate-900">
                  {slide.title}
                </h1>
              </div>

              <ul className="grid gap-3">
                {slide.content.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setIndex(Math.max(index - 1, 0))}
              disabled={index === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <span className="text-sm text-slate-500">
              {index + 1} / {slides.length}
            </span>

            <Button
              onClick={() =>
                setIndex(Math.min(index + 1, slides.length - 1))
              }
              disabled={index === slides.length - 1}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
