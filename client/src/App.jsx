import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
} from 'react-router-dom';

// route protection utility
import PrivateRoute from './utility/PrivateRoute';

// Layouts
import RootLayout from './layouts/RootLayout';

//Checklist Pages, Actions, & Loaders
import ViewChecklist, {
    saveChecklistAction,
    checklistLoader,
} from './pages/student/checklist/ViewChecklist';
import ViewAllChecklists, {
    viewAllChecklistsLoader,
} from './pages/student/checklist/ViewAllChecklists';

//Preceptor Pages, Actions & Loaders
import PreceptorHome, { evalsLoader } from './pages/preceptor/PreceptorHome';
import ViewEvaluation, {
    editEvaluationAction,
    viewEvaluationLoader,
} from './pages/preceptor/ViewEvaluation';

//Instructor Pages
import InstructorHome, { instructorHomeLoader } from './pages/instructor/InstructorHome';
import ManageJoinCode, { joinCodeLoader } from './pages/instructor/ManageJoinCode';

//Admin Pages
import AdminHome from './pages/admin/AdminHome';
import AdminManageJoinCode from './pages/admin/AdminManageJoinCode';

//Schedule Pages, Actions & Loaders
import ViewSchedule from './pages/student/schedule/ViewSchedule';

//Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Request from './pages/Request';
import Reset from './pages/Reset';

//Other Pages
import NotFound from './pages/NotFound';
import RequestPreceptorEvaluation, {
    evaluationRequestAction,
    preceptorListLoader,
} from './pages/student/evaluation/RequestPreceptorEvaluation';
import PreceptorSchedulePage from './pages/preceptor/PreceptorSchedulePage';
import InstructorSchedulePage from './pages/instructor/InstructorSchedulePage';
import PreceptorViewChecklist, {
    preceptorSaveChecklistAction,
} from './pages/preceptor/checklist/PreceptorViewChecklist';
import InstructorViewChecklist, {
    instructorSaveGradeAction,
} from './pages/instructor/InstructorViewChecklist';
import InstructorViewPeval, {
    instructorEvaluationLoader,
} from './pages/instructor/InstructorViewPeval';
import ViewStudentDocs, { studentDocsLoader } from './pages/instructor/ViewStudentDocs';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/* START OF AUTHENTICATION ROUTES */}
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/request" element={<Request />} />
            <Route path="/reset/:id" element={<Reset />} />
            {/* END OF AUTHENTICATION ROUTES */}

            {/* START OF STUDENT ROUTES */}
            <Route path="/student">
                <Route
                    index
                    element={
                        <PrivateRoute roles={['student']}>
                            <ViewAllChecklists />
                        </PrivateRoute>
                    }
                    loader={viewAllChecklistsLoader}
                />
                <Route
                    path="home"
                    element={
                        <PrivateRoute roles={['student']}>
                            <ViewAllChecklists />
                        </PrivateRoute>
                    }
                    loader={viewAllChecklistsLoader}
                />
                <Route
                    path="checklist/:checklistID"
                    element={
                        <PrivateRoute roles={['student']}>
                            <ViewChecklist />
                        </PrivateRoute>
                    }
                    loader={checklistLoader}
                    action={saveChecklistAction}
                />
                <Route
                    path="schedule"
                    element={
                        <PrivateRoute roles={['student']}>
                            <ViewSchedule />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="evaluation"
                    element={
                        <PrivateRoute roles={['student']}>
                            <RequestPreceptorEvaluation />
                        </PrivateRoute>
                    }
                    loader={preceptorListLoader}
                    action={evaluationRequestAction}
                />
            </Route>
            {/* END OF STUDENT ROUTES */}

            {/* START OF PRECEPTOR ROUTES */}
            <Route path="/preceptor">
                <Route
                    index
                    element={
                        <PrivateRoute roles={['preceptor']}>
                            <PreceptorHome />
                        </PrivateRoute>
                    }
                    loader={evalsLoader}
                />
                <Route
                    path="home"
                    element={
                        <PrivateRoute roles={['preceptor']}>
                            <PreceptorHome />
                        </PrivateRoute>
                    }
                    loader={evalsLoader}
                />
                <Route
                    path="checklist/:checklistID"
                    element={
                        <PrivateRoute roles={['preceptor']}>
                            <PreceptorViewChecklist />
                        </PrivateRoute>
                    }
                    loader={checklistLoader}
                    action={preceptorSaveChecklistAction}
                />
                <Route
                    path="schedule"
                    element={
                        <PrivateRoute roles={['preceptor']}>
                            <PreceptorSchedulePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="evaluation"
                    element={
                        <PrivateRoute roles={['preceptor']}>
                            <ViewEvaluation />
                        </PrivateRoute>
                    }
                    action={editEvaluationAction}
                    loader={viewEvaluationLoader}
                />
                <Route
                    path="evaluation/:evaluationID"
                    element={
                        <PrivateRoute roles={['preceptor']}>
                            <ViewEvaluation />
                        </PrivateRoute>
                    }
                    action={editEvaluationAction}
                    loader={viewEvaluationLoader}
                />
            </Route>
            {/* END OF PRECEPTOR ROUTES */}

            {/* START OF INSTRUCTOR ROUTES */}
            <Route path="/instructor">
                <Route
                    index
                    element={
                        <PrivateRoute roles={['instructor']}>
                            <InstructorHome />
                        </PrivateRoute>
                    }
                    loader={instructorHomeLoader}
                />
                <Route
                    path="home"
                    element={
                        <PrivateRoute roles={['instructor']}>
                            <InstructorHome />
                        </PrivateRoute>
                    }
                    loader={instructorHomeLoader}
                />
                <Route
                    path="join-codes"
                    element={<ManageJoinCode />}
                    loader={joinCodeLoader}
                />
                <Route
                    path="documents/:studentID"
                    element={<ViewStudentDocs />}
                    loader={studentDocsLoader}
                />
                <Route
                    path="documents/:studentID/checklist/:checklistID"
                    element={
                        <PrivateRoute roles={['instructor']}>
                            <InstructorViewChecklist />
                        </PrivateRoute>
                    }
                    loader={checklistLoader}
                    action={instructorSaveGradeAction}
                />
                <Route
                    path="documents/:studentID/evaluation/:evaluationID"
                    element={
                        <PrivateRoute roles={['instructor']}>
                            <InstructorViewPeval />
                        </PrivateRoute>
                    }
                    loader={instructorEvaluationLoader}
                />
                <Route
                    path="schedule"
                    element={
                        <PrivateRoute roles={['instructor']}>
                            <InstructorSchedulePage />
                        </PrivateRoute>
                    }
                />
            </Route>
            {/* END OF INSTRUCTOR ROUTES */}

            {/* START OF ADMIN ROUTES */}
            <Route path="/admin">
                <Route path="home" element={
                    <PrivateRoute roles={['administrator']}>
                        <AdminHome />
                    </PrivateRoute>
                    }
                />

                <Route path="join-codes" element={
                <PrivateRoute roles={['administrator']}>
                    <AdminManageJoinCode />
                </PrivateRoute> 
            } 
            />
            </Route>
            {/* END OF ADMIN ROUTES */}

            {/* START OF OTHER ROUTES */}
            <Route path="*" element={<NotFound />} />
            {/* END OF OTHER ROUTES */}
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
