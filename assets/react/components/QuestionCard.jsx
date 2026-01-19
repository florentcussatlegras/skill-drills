import { useState } from "react";

export default function QuestionCard({ question, onNext }) {
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        setShowAnswer(false);
    }, [question]);

    if (!question) {
        return (
            <div className="text-gray-500 text-lg">Sélectionnez une matière</div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full xl:w-1/2">
            <h2 className="text-xl font-semibold text-gray-500">{ question.subjectName }</h2>
            <h2
                className="text-2xl font-semibold text-gray-900"
                dangerouslySetInnerHTML={{ __html: question.label }}
            />

            <div
                className={`my-8 text-gray-700 leading-relaxed transition-all duration-500 ${
                    showAnswer ? "blur-0 opacity-100" : "blur-sm opacity-50"
                }`}
            >
                <div dangerouslySetInnerHTML={{ __html: question.answer }} />
            </div>

            <div className="mt-6 flex justify-end gap-3">
                <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="px-4 py-2 rounded-lg bg-[#4FC3F7] hover:bg-[#29B0E0] text-white cursor-pointer"
                >
                    {showAnswer ? "Masquer" : "Afficher"}
                </button>

                <button
                    onClick={onNext}
                    className="px-4 py-2 rounded-lg bg-[#0F3D91] text-white hover:bg-[#0B2C6D] cursor-pointer"
                >
                    Question suivante
                </button>
            </div>
        </div>
    );
}
