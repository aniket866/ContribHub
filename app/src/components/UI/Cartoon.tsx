import React from "react";

export interface CartoonProps {
  className?: string;
  mood?: "happy" | "coding" | "celebrating";
  size?: number;
}

export default function Cartoon({
  className = "",
  mood = "happy",
  size = 120,
}: CartoonProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-3xl border-2 border-black bg-amber-100 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.1)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Head */}
        <circle cx="50" cy="50" r="38" fill="#FDE047" stroke="#000000" strokeWidth="4" />

        {/* Eyes */}
        <circle cx="38" cy="42" r="5" fill="#000000" />
        <circle cx="62" cy="42" r="5" fill="#000000" />

        {/* Smile / Mouth */}
        {mood === "coding" ? (
          <rect x="36" y="58" width="28" height="6" rx="3" fill="#000000" />
        ) : (
          <path
            d="M 36 56 Q 50 70 64 56"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* Cheeks */}
        <circle cx="28" cy="52" r="4" fill="#F87171" opacity="0.6" />
        <circle cx="72" cy="52" r="4" fill="#F87171" opacity="0.6" />
      </svg>
    </div>
  );
}
