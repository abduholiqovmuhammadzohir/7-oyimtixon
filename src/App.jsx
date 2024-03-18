import './App.css'
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Error from './pages/Error'
import HEADPHONES from './pages/HEADPHONES'
import Layout from './layout/Layout'
import EARPHONES from './pages/EARPHONES'
import SPEAKERS from './pages/SPEAKERS'
import HEADPHONES1 from './pages/HEADPHONES1'
import HEADPHONES2 from './pages/HEADPHONES2'
import HEADPHONES3 from './pages/HEADPHONES3'
import SPEAKERS1 from './pages/SPEAKERS1'
import SPEAKERS2 from './pages/SPEAKERS2'
import EARPHONES1 from './pages/EARPHONES1'
import Checkout from './pages/Checkout'

function App() {

  const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem("token"))
  const location = useLocation()

  useEffect(() => {
    console.log(21, location);
    if (!localStorage.getItem("token") && location.pathname != "/register") {
      navigate("/login")
    }
  }, [])

  function ProjectedRote({ children, redirectTo = "/login", isAuthentication }) {
    if (!isAuthentication) {
      navigate(redirectTo)
    }
    return children
  }

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        


        <Route path='/' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <Home></Home>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='/headphones' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <HEADPHONES></HEADPHONES>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='/speakers' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <SPEAKERS></SPEAKERS>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='/earphones' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <EARPHONES></EARPHONES>
            </Layout>
          </ProjectedRote>}>
        </Route>


        <Route path='/headphones1' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <HEADPHONES1></HEADPHONES1>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='/headphones2' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <HEADPHONES2></HEADPHONES2>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='/headphones3' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <HEADPHONES3></HEADPHONES3>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='/speakers1' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <SPEAKERS1></SPEAKERS1>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='/speakers2' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <SPEAKERS2></SPEAKERS2>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='/earphones1' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <EARPHONES1></EARPHONES1>
            </Layout>
          </ProjectedRote>}>
        </Route>
        <Route path='/checkout' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Layout>
              <Checkout></Checkout>
            </Layout>
          </ProjectedRote>}>
        </Route>

        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </>
  )
}

export default App
