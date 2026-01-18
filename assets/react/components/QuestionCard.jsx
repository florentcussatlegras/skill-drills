import { useState } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function QuestionCard({ question, onNext }) {
    const [showAnswer, setShowAnswer] = useState(false);

    if (!question) {
        return (
            <div className="text-gray-500 text-lg">Sélectionne une matière</div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl w-full">
            <h2 className="text-2xl font-semibold text-gray-900" dangerouslySetInnerHTML={{ __html: question.label }} />

            <p className="my-8 text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: question.answer }} />
            </p>

            <div className="mt-6 flex justify-end gap-3">
                <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                    Masquer
                </button>

                <button
                    onClick={onNext}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                    Suivante
                </button>
            </div>
        </div>
    );
}
