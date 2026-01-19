export default function SubjectCard({ subject, selected, onToggle }) {
    return (
        <div
            onClick={onToggle}
            className={`
        w-full md:w-20 h-20 flex flex-col items-center justify-center
        rounded-lg cursor-pointer
        ${selected ? "bg-neutral-200" : "bg-neutral-100"}
        transition-colors duration-200
        relative hover:bg-neutral-200
      `}
        >
            <img
                src={subject.logo}
                alt={subject.name}
                className={`w-8 h-8 ${selected ? "opacity-100" : "opacity-70"}`}
            />

            {/* Nom du sujet en dessous */}
            <span
                className={`mt-2 text-xs font-medium text-center ${selected ? "text-black" : "text-black"}`}
            >
                {subject.name}
            </span>
        </div>
    );
}
