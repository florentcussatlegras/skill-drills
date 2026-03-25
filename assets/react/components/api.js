// assets/react/api.js
export async function fetchSubjects() {
  const res = await fetch('/api/subjects');
  return res.json();
}

export async function fetchRandomQuestion(subjectIds = []) {
  const params = new URLSearchParams();
  subjectIds.forEach(id => params.append('subjects[]', id));

  try {
    const res = await fetch('/api/questions/random?' + params);
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Erreur API:', errorData);
      return null;
    }
    return res.json();
  } catch (err) {
    console.error('Erreur fetch:', err);
    return null;
  }
}
