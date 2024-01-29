export function NumBtn({ number }: { number: number }) {
  return (
    <button className="number" name={`${number}`}>
      {`${number}`}
    </button>
  );
}
