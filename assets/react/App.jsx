import { useEffect, useState } from "react";

import { fetchRandomQuestion } from "./components/api";
import SubjectList from "./components/SubjectList";
import QuestionCard from "./components/QuestionCard";

export default function App() {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [question, setQuestion] = useState([]);

    const loadQuestion = async () => {
        if (selectedSubjects.length === 0) {
            setQuestion(null);
            return;
        }
        const q = await fetchRandomQuestion(selectedSubjects);
        console.log(selectedSubjects);
        console.log(q);
        setQuestion(q);
    };

    useEffect(() => {
        loadQuestion();
    }, [selectedSubjects]);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-96 flex flex-col items-center bg-white p-4 overflow-y-auto">
                <h1 className="font-nunito-sans text-6xl font-bold mb-24 text-gray-900">
                    SkillDrill
                </h1>
                <SubjectList onChange={setSelectedSubjects} />
            </aside>

            {/* Main */}
            <main className="flex-1 flex items-center justify-center p-6">
                <QuestionCard question={question} onNext={loadQuestion} />
            </main>
        </div>
    );
}
