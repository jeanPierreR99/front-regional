import {
  NoticeProvider,
  ParamIdProvider,
  ParamProvider,
} from "./context/Context.provider";
import RouteMain from "./routes/RouteMain";

function App() {
  return (
    <div className="app App">
      <ParamProvider>
        <NoticeProvider>
          <ParamIdProvider>
            <RouteMain></RouteMain>
          </ParamIdProvider>
        </NoticeProvider>
      </ParamProvider>
    </div>
  );
}

export default App;
