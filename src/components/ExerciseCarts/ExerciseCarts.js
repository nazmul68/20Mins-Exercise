import Cart from "../../Cart/Cart";

const ExerciseCarts = (props) => {
  const { exerciseCarts, handleExerciseTime } = props;
  //   const [exerciseTime, setExerciseTime] = useState(0);

  //   const calculateExerciseTime = (cart) => {
  //     const newExerciseTime = exerciseTime + { cart };
  //     setExerciseTime(newExerciseTime);
  //   };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 ms-3 mb-5">
      {exerciseCarts.map((cart) => (
        <Cart
          key={cart.id}
          cart={cart}
          handleExerciseTime={handleExerciseTime}
        ></Cart>
      ))}
    </div>
  );
};

export default ExerciseCarts;
