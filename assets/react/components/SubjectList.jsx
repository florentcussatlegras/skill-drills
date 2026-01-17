import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/Button";

export default function SubjectList({ onChange }) {
    const [subjects, setSubjects] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch("/api/subjects")
            .then((res) => res.json())
            .then((data) => {
                setSubjects(data);
                setSelected(data.map((s) => s.id));
                onChange(data.map((s) => s.id));
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
        <div className="flex flex-col p-2 gap-2 items-center border-r border-gray-300 overflow-y-auto max-h-screen">
            <h3 className="font-bold mb-2">Matières</h3>
            <div className="flex gap-2 mb-2">
                <Button
                    className="px-2 py-1 border rounded"
                    onClick={() => {
                        const allIds = subjects.map((s) => s.id);
                        setSelected(allIds);
                        onChange(allIds);
                    }}
                >
                    Tous
                </Button>
                <Button
                    className="px-2 py-1 border rounded"
                    onClick={() => {
                        setSelected([]);
                        onChange([]);
                    }}
                >
                    Aucun
                </Button>
            </div>
            {subjects.map((s) => (
                <label key={s.id} className="flex items-center gap-2">
                    <Checkbox
                        key={s.id}
                        label={s.name}
                        checked={selected.includes(s.id)}
                        onToggle={() => toggle(s.id)}
                    />
                </label>
            ))}
            ;
        </div>
    );
}
