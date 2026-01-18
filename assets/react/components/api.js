// assets/react/api.js
export async function fetchSubjects() {
  const res = await fetch('/api/subjects');
  return res.json();
}

export async function fetchRandomQuestion(subjectIds = []) {
  const params = new URLSearchParams();
  subjectIds.forEach(id => params.append('subjects[]', id));
  console.log(params);

  const res = await fetch('/api/questions/random?' + params);
  if (!res.ok) return null;
  return res.json();
}
