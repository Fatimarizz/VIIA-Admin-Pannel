import { Loader2 } from "lucide-react";
const ButtonLoader = ({ text}) => {
  return (
    <div className="flex items-center">
      <Loader2 className="mx-2 h-4 w-4 animate-spin" />
      {text}
    </div>
  );
};

export default ButtonLoader;
