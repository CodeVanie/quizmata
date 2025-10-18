import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import QuizMaTaApp from './QuizMaTaApp'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import QuizzesPage from './pages/Quizzes/QuizzesPage'
import ClassesPage from './pages/ClassesPage'
import CreatedTabPage from './pages/Quizzes/Tabs/CreatedTabPage'
import SavedTabPage from './pages/Quizzes/Tabs/SavedTabPage'
import TakenTabPage from './pages/Quizzes/Tabs/TakenTabPage'
import CreateQuizPage from './pages/CreateQuiz/CreateQuizPage'
import CreateClassPage from './pages/CreateClassPage'

const router = createBrowserRouter([
	{
		path: '/',
		Component: QuizMaTaApp,
		errorElement: <NotFoundPage />,
		children: [
			{index: true, element: <Navigate to="home" replace />},
			{path: 'home', Component: HomePage},
			{path: 'quizzes', Component: QuizzesPage, children: [
				{index: true, element: <Navigate to="created" replace />},
				{path: 'created', Component: CreatedTabPage},
				{path: 'starred', Component: SavedTabPage},
				{path: 'taken', Component: TakenTabPage}
			]},
			{path: 'classes', Component: ClassesPage},
			{path: 'create', children: [
				{path: 'quiz', Component: CreateQuizPage},
				{path: 'class', Component: CreateClassPage},
			]},
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
