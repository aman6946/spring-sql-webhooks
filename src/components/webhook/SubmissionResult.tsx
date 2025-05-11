
import { CheckCircle2 } from "lucide-react";

interface SubmissionResultProps {
  result: {
    status: boolean;
    result: string;
  } | null;
}

const SubmissionResult = ({ result }: SubmissionResultProps) => {
  if (!result) return null;
  
  return (
    <div className="p-4 bg-green-50 rounded-md">
      <div className="flex items-start">
        <CheckCircle2 className="text-green-600 mr-2 mt-1" size={16} />
        <div>
          <h3 className="font-semibold text-green-800">Solution Submitted Successfully</h3>
          <p className="mt-1">{result.result}</p>
        </div>
      </div>
    </div>
  );
};

export default SubmissionResult;
