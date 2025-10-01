import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import QuizMaTaApp from './QuizMaTaApp'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import QuizzesPage from './pages/Quizzes/QuizzesPage'
import ClassesPage from './pages/ClassesPage'

const router = createBrowserRouter([
	{
		path: '/',
		Component: QuizMaTaApp,
		errorElement: <NotFoundPage />,
		children: [
		{index: true, element: <Navigate to="/home" replace />},
		{path: 'home', Component: HomePage},
		{path: 'quizzes', Component: QuizzesPage},
		{path: 'classes', Component: ClassesPage},
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
