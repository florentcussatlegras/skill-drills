import { useState } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";


export default function QuestionCard({ question, onNext }) {
    const [showAnswer, setShowAnswer] = useState(false);

    if (!question) return <p>Aucune question trouvée</p>;

    return (
        <>Question here</>
        // <Card className="p-4 w-full">
        //     <CardHeader>
        //         <CardTitle>{question.subject.name}</CardTitle>
        //     </CardHeader>
        //     <CardContent>
        //         <p className="text-lg font-medium">{question.label}</p>
        //         <Separator className="my-4" />
        //         <div className={`overflow-hidden transition-all duration-300 ${
        //             showAnswer ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        //         }`}>
        //             {showAnswer && (
        //                 <p className="text-gray-700 mt-2">{question.answer}</p>
        //             )}
        //         </div>
        //         <div className="mt-4 flex gap-2">
        //             <Button onClick={() => setShowAnswer(!showAnswer)}>
        //                 {showAnswer ? "Masquer la réponse" : "Voir la réponse"}
        //             </Button>
        //             <Button onClick={onNext}>Question suivante</Button>
        //         </div>
        //     </CardContent>
        // </Card>
    );
}
