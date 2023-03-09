import '@/App.css'
import { Navbar } from '@/components'
import { Route, Routes } from 'react-router-dom'
import { Company, Contact, CustomerSupport, Products } from '@/pages'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<Products/>} />
        <Route path='/company' element={<Company />} />
        <Route path='/customer-support' element={<CustomerSupport />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  )
}
export default App