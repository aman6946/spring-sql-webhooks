
import { Button } from "@/components/ui/button";

type Step = 'initial' | 'webhook-generated' | 'solution-submitted';

interface ActionButtonsProps {
  step: Step;
  loading: boolean;
  onGenerateWebhook: () => void;
  onSubmitSolution: () => void;
  onReset: () => void;
}

const ActionButtons = ({ 
  step, 
  loading, 
  onGenerateWebhook, 
  onSubmitSolution, 
  onReset 
}: ActionButtonsProps) => {
  if (step === 'initial') {
    return (
      <Button 
        onClick={onGenerateWebhook} 
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Webhook"}
      </Button>
    );
  }
  
  if (step === 'webhook-generated') {
    return (
      <Button 
        onClick={onSubmitSolution} 
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Solution"}
      </Button>
    );
  }
  
  if (step === 'solution-submitted') {
    return (
      <Button 
        onClick={onReset}
        variant="outline"
      >
        Reset
      </Button>
    );
  }
  
  return null;
};

export default ActionButtons;
