
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

type StatusType = "pending" | "processing" | "success" | "error";

interface StatusBadgeProps {
  status: StatusType;
  text?: string;
}

const StatusBadge = ({ status, text }: StatusBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "pending":
        return {
          icon: <Clock className="h-3 w-3 mr-1" />,
          variant: "outline" as const,
          defaultText: "Pending",
          className: "text-gray-500 border-gray-300",
        };
      case "processing":
        return {
          icon: <Clock className="h-3 w-3 mr-1" />,
          variant: "outline" as const,
          defaultText: "Processing",
          className: "text-blue-500 border-blue-300",
        };
      case "success":
        return {
          icon: <CheckCircle className="h-3 w-3 mr-1" />,
          variant: "secondary" as const,
          defaultText: "Success",
          className: "text-green-500 bg-green-100 border-green-300",
        };
      case "error":
        return {
          icon: <AlertCircle className="h-3 w-3 mr-1" />,
          variant: "destructive" as const,
          defaultText: "Error",
          className: "text-red-500",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <Badge variant={config.variant} className={`flex items-center ${config.className}`}>
      {config.icon}
      <span>{text || config.defaultText}</span>
    </Badge>
  );
};

export default StatusBadge;
