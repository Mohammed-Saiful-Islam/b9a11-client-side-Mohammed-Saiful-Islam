
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Features from './components/Features';
import FAQ from './components/FAQ';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees);

  return (
    <div className='bg-orange-300 space-y-4'>
      <Navbar/>
      <Banner/>
<div className='m-20 max-w-6xl mx-auto'>

      <h1 className='text-6xl text-center my-20 text-purple-600'>Created Assignmets: {coffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}></CoffeeCard>)
        }
        
      </div>
    </div>
    <Features/>
    <FAQ/>
    <Footer/>
    </div>
    
  )
}

export default App
