import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fecthGetCoctailByName } from "../../redux/coctailsSlice";

function App() {
  const dispatch = useDispatch()

  const coctail = useSelector(state => state.coctails.drinks)

  //получение первичных данных по коктейлям
  useEffect(()=>{
    dispatch(fecthGetCoctailByName("margarita"))
  }, [])

  console.log(coctail)

  return (
   <div>1231</div>
  );
}

export default App;
