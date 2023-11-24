import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginForm from './landing_page_component/LoginForm';
import LogoutButton from './LogoutButton';
import SignupForm from './landing_page_component/SignupForm';
import LandingPage from './landing_page_component/LandinPage';
import QuizPage from './landing_page_component/QuizPage';
import SummaryGenPage from './landing_page_component/SummaryGenPage';
import CreateStudyPlan from './HomePage/CreateStudyPlans';
import HomePage from './HomePage/Homepage';
import ProfilePage from './HomePage/ProfilePage'
// import UserProfile from './UserProfile';
// import UpdateProfileForm from './UpdateProfileForm';
import DashBoard from './DashBoard/dashboard';
function App() {
  return (
  
      <div className="container">
    

          <BrowserRouter>
          {/* <LandingPage /> */}
          <Routes>
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/logout" component={LogoutButton} />
          <Route path="/signup" component={SignupForm} /> */}
          {/* <Route path="/profile" component={UserProfile} />
          <Route path="/update-profile" component={UpdateProfileForm} /> */}
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/createstudyplan" element={<CreateStudyPlan />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/landingpage" element={<LandingPage />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/quiz" element={<QuizPage />} />
          <Route exact path="/summary" element={<SummaryGenPage />} />
          <Route exact path="/createstudyplan" element={<CreateStudyPlan />} />
          </Routes>
      </BrowserRouter>
      </div>


  );
}

export default App;