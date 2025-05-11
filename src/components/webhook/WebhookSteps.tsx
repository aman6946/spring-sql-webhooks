
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import StatusBadge from "@/components/StatusBadge";

type Step = 'initial' | 'webhook-generated' | 'solution-submitted';

interface WebhookStepsProps {
  currentStep: Step;
}

const WebhookSteps = ({ currentStep }: WebhookStepsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`rounded-full p-2 ${currentStep !== 'initial' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
            {currentStep !== 'initial' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
          </div>
          <div>
            <h3 className="font-medium">Generate Webhook</h3>
            <p className="text-sm text-gray-500">POST request to create webhook</p>
          </div>
        </div>
        <StatusBadge 
          status={currentStep !== 'initial' ? "success" : "pending"} 
          text={currentStep !== 'initial' ? "Completed" : "Pending"} 
        />
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`rounded-full p-2 ${currentStep === 'solution-submitted' ? 'bg-green-100 text-green-600' : currentStep === 'webhook-generated' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
            {currentStep === 'solution-submitted' ? <CheckCircle2 size={20} /> : currentStep === 'webhook-generated' ? <Clock size={20} /> : <ArrowRight size={20} />}
          </div>
          <div>
            <h3 className="font-medium">Submit Solution</h3>
            <p className="text-sm text-gray-500">POST solution to webhook URL</p>
          </div>
        </div>
        <StatusBadge 
          status={currentStep === 'solution-submitted' ? "success" : currentStep === 'webhook-generated' ? "processing" : "pending"} 
          text={currentStep === 'solution-submitted' ? "Completed" : currentStep === 'webhook-generated' ? "Ready" : "Waiting"} 
        />
      </div>
    </div>
  );
};

export default WebhookSteps;
