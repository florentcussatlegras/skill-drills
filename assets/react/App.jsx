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
        <div className="bg-white flex flex-col h-screen relative">
            <div className="flex h-26 absolute justify-center w-full md:w-auto md:left-2 top-0 bg-white z-30">
                <img
                    src="/images/logo.png"
                    alt="Q/A Tech Logo"
                    className="h-24"
                />
               </div>
            {/* Sidebar */}
            <aside
                className="
                    mt-24 md:mt-0
                    w-full
                    py-8
                    bg-white
                    max-h-[40svh] md:max-h-none
                    overflow-y-auto
                "
            >
                <SubjectList onChange={setSelectedSubjects} />
            </aside>
            {/* Main */}
            <main
                className="
                    bg-gray-100
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
