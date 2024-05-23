import {
  LoginProvider,
  NoticeProvider,
  ParamIdProvider,
  ParamProvider,
} from "./context/Context.provider";
import RouteMain from "./routes/RouteMain";

function App() {
  return (
    <div className="app App">
      <LoginProvider>
      <ParamProvider>
        <NoticeProvider>
          <ParamIdProvider>
            <RouteMain></RouteMain>
          </ParamIdProvider>
        </NoticeProvider>
      </ParamProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
