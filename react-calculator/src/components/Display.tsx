export function Display({ display }: { display: string }) {
  return (
    <div id="screen">
      <div id="user-input"></div>
      <div id="result">{display}</div>
    </div>
  );
}
