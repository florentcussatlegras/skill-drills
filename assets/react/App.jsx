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
        setQuestion(q);
    };

    useEffect(() => {
        loadQuestion();
    }, [selectedSubjects]);

    return (
        <div className="bg-gray-100 flex flex-col h-screen relative">

            <img
                src="/images/logo.png"
                alt="Q/A Tech Logo"
                className="h-24 w-auto absolute left-2 top-2"
            />

            {/* Sidebar */}
            <aside
                className="
        w-full
        py-8
        bg-white
        max-h-[40svh] md:max-h-none
        overflow-y-auto
        border-b md:border-b-0 md:border-r
    "
            >
                <SubjectList onChange={setSelectedSubjects} />
            </aside>

            {/* Main */}
            <main
                className="
        w-full
        h-full
        flex flex-col items-center justify-center
        md:p-6
        min-h-[60svh] md:min-h-0
    "
            >
                <QuestionCard question={question} onNext={loadQuestion} />
            </main>
        </div>
    );
}
