// 1. Імпортуємо функцію
import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
// 2. Робимо функцію асинхронною та отримуємо дані
const Notes = async () => {
  const response = await getNotes();
 
// 3. Відображаємо список нотаток
  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}

export default Notes;

