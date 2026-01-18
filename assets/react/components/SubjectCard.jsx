import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid"; // icône par défaut

export default function SubjectCard({ subject, selected, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`
        w-20 h-20 flex flex-col items-center justify-center
        rounded-lg cursor-pointer
        ${selected ? "bg-neutral-200" : "bg-neutral-100"}
        transition-colors duration-200
        relative
      `}
    >
      {/* Icône au centre */}
      <CheckIcon className={`w-6 h-6 ${selected ? "text-black" : "text-black"}`} />

      {/* Nom du sujet en dessous */}
      <span className={`mt-2 text-xs font-medium text-center ${selected ? "text-black" : "text-black"}`}>
        {subject.name}
      </span>
    </div>
  );
}
