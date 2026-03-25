// assets/react/api.js
export async function fetchSubjects() {
  const res = await fetch('/api/subjects');
  return res.json();
}

export async function fetchRandomQuestion(subjectIds = []) {
  const params = new URLSearchParams();
  subjectIds.forEach(id => params.append('subjects[]', id));

  try {
    const res = await fetch('https://qa-tech.up.railway.app/api/questions/random?' + params);

    if (!res.ok) {
      const text = await res.text(); // lire la réponse brute
      console.error('Erreur API:', res.status, text);
      return null;
    }

    // OK, on peut parser le JSON
    return res.json();
  } catch (err) {
    console.error('Erreur fetch:', err);
    return null;
  }
}
