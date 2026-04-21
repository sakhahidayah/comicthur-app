import { cn } from "../../lib/utils";
import { Loader2Icon } from "lucide-react";

function Spinner({ className, ...props }) {
  return <Loader2Icon role="status" aria-label="Loading" className={cn("size-20 animate-spin ", className)} {...props} />;
}

export default Spinner;
