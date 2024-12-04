import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout/>} >
          <Route index element={<About />} />
          <Route path=":id" element={<AboutDetails />} />
        </Route> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }

function About() { return <h1>About</h1>; }

function AboutLayout() {
  return (
    <div>
      <h2>About</h2>
      <Outlet />
    </div>
  );
}

function AboutDetails() { return <h1>About Details</h1>; }

function NotFound() { return <h1>404 Not Found</h1>; }