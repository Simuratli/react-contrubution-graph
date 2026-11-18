import { ContributionGraph } from "./lib";

function App() {
  return (
    <div>
      <ContributionGraph
        showMonth={true}
        data={[
          { date: "2026-11-10", count: 3 },
          { date: "2026-11-12", count: 8 },
          { date: "2026-11-15", count: 1 },
          { date: "2026-10-20", count: 5 },
        ]}
      />
    </div>
  );
}

export default App;
