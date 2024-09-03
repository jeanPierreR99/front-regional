import {
  GalleryProvider,
  LoginProvider,
  NoticeProvider,
  ParamIdProvider,
  ParamProvider,
  PostProvider,
} from "./context/Context.provider";
import RouteMain from "./routes/RouteMain";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app App">
      <BrowserRouter>
        <LoginProvider>
          <ParamProvider>
            <NoticeProvider>
              <GalleryProvider>
                <PostProvider>
                  <ParamIdProvider>
                    <RouteMain></RouteMain>
                  </ParamIdProvider>
                </PostProvider>
              </GalleryProvider>
            </NoticeProvider>
          </ParamProvider>
        </LoginProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
