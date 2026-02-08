export default function Header({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-semibold tracking-tight text-white">
      {title}
    </h1>
  );
}
