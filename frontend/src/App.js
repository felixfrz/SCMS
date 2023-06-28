import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Update from './components/Update';
import AddCom from './components/AddCom';
import ViewCom from './components/ViewCom';
import Footer from './components/Footer';
import Admin from './components/staff/Admin';
import Users from './components/staff/Users';
import Staffs from './components/staff/Staffs';
import Signup from './components/staff/Signup';
import Departs from './components/staff/Departs';
import Complains from './components/staff/Complains';
import Response from './components/staff/Response';
import Attachment from './components/staff/Attachment';
import Department from './components/staff/Department';
import Complains2 from './components/staff/Complains2';
import Query from './components/staff/Query';
import Member from './components/staff/Member';
import Private from './components/Private';
import ChatBot from './components/ChatBot';
import { Routes, Route } from 'react-router-dom';
import MyImg from './components/files/MyImg';
import MyPdf from './components/files/MyPdf';
import MyAud from './components/files/MyAud';
import MyVid from './components/files/MyVid';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route element={<Private />}>
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/addcom/:department' element={<AddCom />} />
          <Route path='/viewcom' element={<ViewCom />} />
          <Route path='/staff/admin' element={<Admin />} />
          <Route path='/staff/users' element={<Users />} />
          <Route path='/staff/staffs' element={<Staffs />} />
          <Route path='/staff/signup' element={<Signup />} />
          <Route path='/staff/departs' element={<Departs />} />
          <Route path='/staff/complains' element={<Complains />} />
          <Route path='/staff/response/:id' element={<Response />} />
          <Route path='/staff/attach/:id' element={<Attachment />} />
          <Route path='/staff/department' element={<Department />} />
          <Route path='/staff/complains2' element={<Complains2 />} />
          <Route path='/staff/query' element={<Query />} />
          <Route path='/staff/member' element={<Member />} />

          <Route path='/files/myimg/:path' element={<MyImg />} />
          <Route path='/files/mypdf/:path' element={<MyPdf />} />
          <Route path='/files/myaud/:path' element={<MyAud />} />
          <Route path='/files/myvid/:path' element={<MyVid />} />
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/chatbot' element={<ChatBot />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
