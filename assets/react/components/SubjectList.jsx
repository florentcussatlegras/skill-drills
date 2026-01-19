import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import SubjectCard from "./SubjectCard";

export default function SubjectList({ onChange }) {
    const [subjects, setSubjects] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch("/api/subjects")
            .then((res) => res.json())
            .then((data) => {
                setSubjects(data);
            });
    }, []);

    const toggle = useCallback(
        (id) => {
            let newSelected;
            if (selected.includes(id)) {
                newSelected = selected.filter((sid) => sid != id);
            } else {
                newSelected = [...selected, id];
            }
            setSelected(newSelected);
            onChange(newSelected);
        },
        [selected, onChange],
    );

    return (
        <div className="flex flex-col p-2 gap-2 items-center overflow-y-auto max-h-screen pb-8">
            <div className="flex gap-2 mb-2">
                <Button
                    className={`px-3 py-1 rounded border transition
        ${
            selected.length === subjects.length
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
                    onClick={() => {
                        const allIds = subjects.map((s) => s.id);
                        setSelected(allIds);
                        onChange(allIds);
                    }}
                >
                    Tous
                </Button>

                <Button
                    className={`px-3 py-1 rounded border transition
        ${
            selected.length === 0
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
                    onClick={() => {
                        setSelected([]);
                        onChange([]);
                    }}
                >
                    Aucun
                </Button>
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-4 w-full md:max-w-xl">
                {subjects.map((s) => (
                    <SubjectCard
                        key={s.id}
                        subject={s}
                        selected={selected.includes(s.id)}
                        onToggle={() => toggle(s.id)}
                    />
                ))}
            </div>
        </div>
    );
}
