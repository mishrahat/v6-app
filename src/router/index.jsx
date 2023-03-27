import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Doc from "../container/Doc/Doc";
import Home from "../container/Home/Home";
import AppLayout from "./AppLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/doc" element={<Doc />}></Route>
    </Route>
  )
);
