export default function Home() {
  return (
    <div>
      <h1>Environment Variable Test</h1>
      <p id="output">Value from env: {process.env.NEXT_PUBLIC_TEST_VAR}</p>
    </div>
  );
}
