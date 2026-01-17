import { fetchRandomQuestion } from "../components/api";
import SubjectList from "../components/SubjectList";
import QuestionCard from "../components/QuestionCard";

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
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-50">
                <SubjectList onChange={setSelectedSubjects} />
            </div>
            <div className="flex-1 flex items-center justify-center p-8">
                <QuestionCard question={question} onNext={loadQuestion} />
            </div>
        </div>
    );
}
