import { useSelector, useDispatch } from "react-redux";
import FruityCart from "./FruityCart";
import { addOne, removeOne } from "../../features/fruitsCart";

export default function Fruity() {
  const fruitsList = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  console.log(addOne());

  return (
    <>
      <h1 className="text-4xl text-slate-100 font-bold">Fruity</h1>
      <p className="text-xl text-slate-200 mb-10">
        Pick your fruits and get delivered the next day. 🍉
      </p>
      <ul className="flex gap-4 mb-4">
        {fruitsList.list.map((fruit) => (
          <li className="bg-slate-100 p-4 w-full rounded" key={fruit.id}>
            <img className="w-full h-[250px] object-cover mb-3" src={fruit.url} alt={fruit.name} />
            <div className="flex justify-between mb-4 items-baseline">
              <h2 className="text-2xl mb-2 font-semibold"> {fruit.name} </h2>
              <p className="text-lg font-semibold"> Per unit : {fruit.price}$ </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(addOne(fruit))}
                className="w-full bg-green-600 hover:bg-green-500 text-slate-100 rounded p-1 text-lg"
              >
                Add one
              </button>
              <button
                onClick={() => dispatch(removeOne(fruit.id))}
                className="w-full bg-red-600 hover:bg-red-500 text-slate-100 rounded p-1 text-lg"
              >
                Remove one
              </button>
            </div>
          </li>
        ))}
      </ul>
      <FruityCart />
    </>
  );
}
