import { ErrorBoundary } from "react-error-boundary";
import "./CustomErrorBoundary.css";

function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-alert">
      <h2>Something went wrong:</h2>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorBoundaryUI}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
