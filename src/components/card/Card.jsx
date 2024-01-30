import { useState } from "react";
import { FOOD_LIST } from "../../utils/Data";
import FoodList from "../foodlist/FoodList";

const Card = () => {
  const [foodData, setFootData] = useState(FOOD_LIST);
  const [selectedType, setSelectType] = useState("");

  const filterFood = (foodType) => {
    const filteredFood = FOOD_LIST.filter(
      (category) => category.category === foodType
    );
    setFootData(filteredFood);
    setSelectType(foodType);
  };

  const showAll = () => {
    setFootData(FOOD_LIST);
    setSelectType("");
  };

  return (
    <div className="max-w-screen-2xl mx-auto container px-20 lg:py-14">
      <div className="flex justify-center w-full">
        <h1 className="text-2xl font-bold uppercase my-4">Food Filter List</h1>
      </div>
      <div className="flex flex-col gap-6 md:flex-row justify-center mb-8 ">
        <button onClick={showAll} className="bg-blue-300 h-10 px-4 rounded-md ">
          All
        </button>
        <button
          onClick={() => filterFood("japanese")}
          className={`bg-blue-300 h-10 px-4 rounded-md ${
            selectedType === "japanese" ? "active" : ""
          }`}
        >
          japanese
        </button>
        <button
          onClick={() => filterFood("Thai")}
          className={`bg-blue-300 h-10 px-4 rounded-md ${
            selectedType === "Thai" ? "active" : ""
          }`}
        >
          Thai
        </button>
        <button
          onClick={() => filterFood("chinese")}
          className={`bg-blue-300 h-10 px-4 rounded-md ${
            selectedType === "chinese" ? "active" : ""
          }`}
        >
          chinese
        </button>
        <button
          onClick={() => filterFood("indian")}
          className={`bg-blue-300 h-10 px-4 rounded-md ${
            selectedType === "indian" ? "active" : ""
          }`}
        >
          indian
        </button>
      </div>
      <div>
        <FoodList foodData={foodData} />
      </div>
    </div>
  );
};

export default Card;
