export default function RequestPage() {
  return (
    <main>
      <h1>Request consultation</h1>

      <form>
        <textarea
          placeholder="Мәселеңізді жазыңыз..."
          rows={6}
          style={{ width: "100%", marginTop: 16 }}
        />

        <button style={{ marginTop: 16 }}>
          Send request
        </button>
      </form>
    </main>
  );
}
