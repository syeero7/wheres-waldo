import { Navigate } from "react-router-dom";
import App from "./App";
import PuzzleList from "./components/PuzzleList";
import Puzzle, {
  saveHighScore,
  loader as puzzleLoader,
} from "./components/Puzzle";
import HighScores, { loader as highScoreLoader } from "./components/HighScores";
import Fallback from "./components/Fallback/";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    element: <App />,
    hydrateFallbackElement: <Fallback />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PuzzleList />,
      },
      {
        path: "puzzle/:puzzleId",
        element: <Puzzle />,
        loader: puzzleLoader,
        children: [{ path: "save", action: saveHighScore }],
      },
      {
        path: "high-scores",
        element: <Navigate to="/high-scores/1" replace />,
      },
      {
        path: "high-scores/:puzzleId",
        element: <HighScores />,
        loader: highScoreLoader,
        hydrateFallbackElement: <Fallback />,
      },
    ],
  },
];

export default routes;
