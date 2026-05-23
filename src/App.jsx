import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center w-full pb-10'>
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <Card />
    </div>
  );
}

export default App;