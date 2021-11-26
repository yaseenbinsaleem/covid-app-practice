import home from "./home";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";



function appRouter() {
    return (
      <Routes>
        <Route path="/" element={<home />}>
        <Route path="/details" element={<details />} />
         
        </Route>
      </Routes>
    );
  }
  export default appRouter;