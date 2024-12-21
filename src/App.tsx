import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { TrainChoosing } from './components/TrainChoosing/TrainChoosing';
import { PlacesChoosing } from './components/PlacesChoosing/PlacesChoosing';
import { Passengers } from './components/Passengers/Passengers';
import { Payment } from './components/Payment/Payment';
import { OrderConfirmation } from './components/OrderConfirmation/OrderConfirmation';
import { SuccessfulOrder } from './components/SuccessfulOrder/SuccessfulOrder';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/trains' element={<TrainChoosing/>}/>
        <Route path='/seats' element={<PlacesChoosing/>}/>
        <Route path='/passengers' element={<Passengers/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/confirmation' element={<OrderConfirmation/>}/>
        <Route path='/success' element={<SuccessfulOrder/>}/>
      </Routes>
    </>
  )
}

export default App;
