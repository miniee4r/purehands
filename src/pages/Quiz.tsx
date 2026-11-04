import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary role of 10 ml Methanol (CH₃OH) in our hand sanitizer?",
    options: [
      "To act as a thickener and moisturizer",
      "To serve as the main active agent that denatures proteins and dissolves lipid membranes",
      "To add fragrance and perfume",
      "To slow down the evaporation of water"
    ],
    correct: 1,
    explanation: "Methanol acts as the main active alcohol agent that denatures microbial proteins and lyses viral lipid envelopes."
  },
  {
    id: 2,
    question: "Why was 5 ml of Glycerol (C₃H₈O₃) included in the formulation?",
    options: [
      "As an antimicrobial spore inactivator",
      "To act as a humectant/moisturizer to prevent severe skin drying and cracking",
      "To make the liquid change color",
      "To speed up the drying process"
    ],
    correct: 1,
    explanation: "Glycerol is a humectant that draws and seals moisture into the skin, preventing dryness caused by alcohol."
  },
  {
    id: 3,
    question: "What is the purpose of adding 5 ml Hydrogen Peroxide (H₂O₂)?",
    options: [
      "To produce bubbles for cosmetic appeal",
      "To inactivate contaminating bacterial spores in the solution and storage container",
      "To neutralize alcohol smell",
      "To replace distilled water"
    ],
    correct: 1,
    explanation: "H₂O₂ does not sanitize skin directly; rather, it eliminates bacterial spores in the container or during preparation."
  },
  {
    id: 4,
    question: "How much Distilled Water (H₂O) was used in our corrected laboratory prototype?",
    options: [
      "5 ml",
      "10 ml",
      "20 ml",
      "50 ml"
    ],
    correct: 2,
    explanation: "Our corrected formulation uses 20 ml of distilled water to dilute the solution to the proper effective concentration."
  },
  {
    id: 5,
    question: "In what situation is alcohol-based hand sanitizer NOT recommended?",
    options: [
      "After touching public transit handrails",
      "Between patient consultations in a clinic",
      "When hands are visibly soiled, dirty, or greasy",
      "Before entering an office building"
    ],
    correct: 2,
    explanation: "Sanitizer cannot penetrate soil or heavy grease; soap and running water are required for dirty hands."
  },
  {
    id: 6,
    question: "Who were the student co-leads responsible for this chemical prototyping lab project?",
    options: [
      "Nidhi Chaudhari (PPT, Chemical Lab, Report) & Shruti Khauria (Website, Chemical Lab, Report)",
      "Anonymous Lab Assistants",
      "External chemical suppliers",
      "Faculty advisory board only"
    ],
    correct: 0,
    explanation: "Nidhi Chaudhari (PRN: 202501100005) led PPT & research, Shruti Khauria (PRN: 202501100011) led the website platform, and both conducted the lab synthesis and report."
  }
];

export function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentQ = quizQuestions[currentIdx];
  const hasAnsweredCurrent = selectedAnswers[currentIdx] !== undefined;

  const handleSelect = (optionIdx: number) => {
    if (hasAnsweredCurrent) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIdx] = optionIdx;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, i) => {
      if (selectedAnswers[i] === q.correct) score += 1;
    });
    return score;
  };

  const score = calculateScore();

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-primary">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Section 06</span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground md:text-5xl">
          Interactive Lab Quiz
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Test your comprehension on the chemical reagents, exact quantities, biological mechanisms, and lab safety protocols.
        </p>
      </section>

      {/* Quiz Card */}
      <section className="mx-auto max-w-3xl px-4">
        {!showResult ? (
          <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl sm:p-10">
            {/* Progress bar */}
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Question {currentIdx + 1} of {quizQuestions.length}</span>
              <span className="font-bold text-primary">
                {Math.round(((currentIdx + 1) / quizQuestions.length) * 100)}% Completed
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h2 className="mt-8 font-display text-2xl font-bold text-foreground sm:text-3xl">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="mt-8 space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentIdx] === idx;
                const isCorrect = idx === currentQ.correct;

                let btnStyle = "border-border bg-secondary/30 text-card-foreground hover:border-primary/60 hover:bg-secondary/60";

                if (hasAnsweredCurrent) {
                  if (isCorrect) {
                    btnStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold";
                  } else if (isSelected && !isCorrect) {
                    btnStyle = "border-rose-500 bg-rose-500/10 text-rose-400 font-semibold";
                  } else {
                    btnStyle = "border-border/40 bg-secondary/10 text-muted-foreground opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnsweredCurrent}
                    onClick={() => handleSelect(idx)}
                    className={`w-full rounded-2xl border p-4 text-left transition flex items-center justify-between text-sm sm:text-base ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {hasAnsweredCurrent && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                    )}
                    {hasAnsweredCurrent && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 shrink-0 text-rose-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next Button */}
            {hasAnsweredCurrent && (
              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-4 animate-in fade-in">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Explanation:
                </p>
                <p className="mt-1 text-sm text-foreground/90">
                  {currentQ.explanation}
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 font-display text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition"
                  >
                    <span>{currentIdx < quizQuestions.length - 1 ? "Next Question" : "See Final Score"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Results View */
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-2xl sm:p-12 animate-in zoom-in-95">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary border border-primary/20">
              <Award className="h-10 w-10 text-primary" />
            </div>

            <h2 className="mt-6 font-display text-3xl font-extrabold text-foreground">
              Quiz Completed!
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              You scored <span className="font-mono font-bold text-primary text-lg">{score}</span> out of{" "}
              <span className="font-mono font-bold text-foreground text-lg">{quizQuestions.length}</span>
            </p>

            <div className="mt-6 inline-block rounded-full bg-secondary/80 px-4 py-1.5 font-mono text-xs font-semibold text-aqua">
              {score === quizQuestions.length
                ? "🌟 Perfect Score! You mastered the formulation!"
                : score >= 4
                ? "👍 Great job! Strong understanding of the lab chemistry."
                : "💡 Review the reactions and try again!"}
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={restartQuiz}
                className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-display font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Restart Quiz</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Quiz;

