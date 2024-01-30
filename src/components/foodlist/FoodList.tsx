import React from "react";

interface foodData_list {
  id: number;
  title: string;
  imgUrl: string;
  dec: string;
  category: string;
}

interface foodDataProps {
  foodData: foodData_list[];
}

const FoodList: React.FC<foodDataProps> = ({ foodData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch lg:grid-cols-3 gap-6">
        {foodData.map((item) => (
          <div key={item.id} className="flex flex-col bg-gray-500 rounded-xl">
            <div className="flex-grow">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="h-full object-cover rounded-xl w-full"
              />
            </div>

            <div className="p-4">
              <h1 className="font-bold text-xl mb-4">{item.title}</h1>
              <p className="text-sm text-gray-700">{item.dec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
