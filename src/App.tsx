import {
  LoginProvider,
  NoticeProvider,
  ParamIdProvider,
  ParamProvider,
  PostProvider,
} from "./context/Context.provider";
import RouteMain from "./routes/RouteMain";

function App() {
  return (
    <div className="app App">
      <LoginProvider>
      <ParamProvider>
        <NoticeProvider>
          <PostProvider>
          <ParamIdProvider>
            <RouteMain></RouteMain>
          </ParamIdProvider>
          </PostProvider>
        </NoticeProvider>
      </ParamProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
