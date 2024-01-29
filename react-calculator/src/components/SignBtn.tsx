export function SignBtn({ symbol }: { symbol: string }) {
  return (
    <button className="sign" name={symbol}>
      {symbol}
    </button>
  );
}
