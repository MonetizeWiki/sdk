export default function Button({ label }: { label: string }) {
  return (
    <button className="px-4 py-2 border rounded">
      {label}
    </button>
  );
}
