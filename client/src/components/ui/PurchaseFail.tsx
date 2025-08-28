import { Button } from "@/components/ui/button";

import { BadgeX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PurchaseFail = () => {
  const navigate = useNavigate();

  const handleNavigateProduct = () => {
    navigate("/");
  };

  return (
    <div className="EnrollSuccessContainer bg-gray-100">
      <div className="EnrollSuccessWrapper min-h-screen  flex justify-center items-center ">
        <div className="confirmationCard bg-red-50 py-8 px-16 rounded-md shadow-md border border-red-300 flex flex-col  justify-center items-center gap-y-3  ">
          {/* icon starts  */}
          <div className="icon  text-center flex justify-center items-center ">
            <BadgeX size={48} strokeWidth={2.5} className="  text-red-600 " />
          </div>
          {/* icon ends  */}

          <p className=" text-3xl font-semibold text-red-500 ">
            Product Purchase failed!!!
          </p>

          <Button
            onClick={() => handleNavigateProduct()}
            className=" mt-3  bg-red-600 hover:bg-red-700 hover:scale-[1.01] hover:shadow-md active:scale-100  "
          >
            Purchase again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFail;
