
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import WebhookSteps from "@/components/webhook/WebhookSteps";
import WebhookInfo from "@/components/webhook/WebhookInfo";
import SqlSolution from "@/components/webhook/SqlSolution";
import SubmissionResult from "@/components/webhook/SubmissionResult";
import ActionButtons from "@/components/webhook/ActionButtons";
import ImplementationDetails from "@/components/webhook/ImplementationDetails";
import { generateSqlSolution } from "@/utils/sqlGenerator";

interface WebhookResponse {
  webhook: string;
  accessToken: string;
  question: string;
  regNo: string;
}

interface SubmissionResponse {
  status: boolean;
  result: string;
}

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [webhookData, setWebhookData] = useState<WebhookResponse | null>(null);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);
  const [sqlSolution, setSqlSolution] = useState<string>("");
  const [step, setStep] = useState<'initial' | 'webhook-generated' | 'solution-submitted'>('initial');
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Mock function to generate webhook - in a real app this would be a server call
  const generateWebhook = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // This is just a simulation - in a real app this would call your Spring Boot backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response data
      const regNo = "REG12347";
      const isOdd = parseInt(regNo.slice(-2)) % 2 !== 0;
      
      const mockWebhookData: WebhookResponse = {
        webhook: "https://bfhldevapigw.healthrx.co.in/hiring/testWebhook/JAVA",
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        question: isOdd ? "Question 1: Find all customers who placed orders..." : "Question 2: Calculate the average transaction amount...",
        regNo
      };
      
      setWebhookData(mockWebhookData);
      setStep('webhook-generated');
      
      // Generate SQL solution based on question
      const solution = generateSqlSolution(isOdd);
      setSqlSolution(solution);
      
      toast({
        title: "Webhook Generated",
        description: "Successfully generated webhook and prepared solution.",
        variant: "default",
      });
    } catch (err) {
      setError("Failed to generate webhook. Please try again.");
      toast({
        title: "Error",
        description: "Failed to generate webhook.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Mock function to submit solution - in a real app this would be a server call
  const submitSolution = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // This is just a simulation - in a real app this would call your Spring Boot backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock submission response
      const mockSubmissionResult: SubmissionResponse = {
        status: true,
        result: "Solution successfully submitted! Your SQL query was correct."
      };
      
      setSubmissionResult(mockSubmissionResult);
      setStep('solution-submitted');
      
      toast({
        title: "Solution Submitted",
        description: "Your SQL solution was successfully submitted.",
        variant: "default",
      });
    } catch (err) {
      setError("Failed to submit solution. Please try again.");
      toast({
        title: "Error",
        description: "Failed to submit solution.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetApplication = () => {
    setStep('initial');
    setWebhookData(null);
    setSubmissionResult(null);
    setSqlSolution("");
  };

  useEffect(() => {
    // This effect would represent the Spring Boot app's automatic startup behavior
    // In a real implementation, the server would handle this automatically
    console.log("Application started - in a real app, the Spring Boot application would automatically generate the webhook on startup");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-800">Spring Boot Webhook Application</h1>
          <p className="text-gray-600 mt-2">Automatic webhook generation, SQL problem solving, and solution submission</p>
        </div>

        <div className="space-y-6">
          {/* Progress Steps */}
          <WebhookSteps currentStep={step} />

          {/* Action Card */}
          <Card>
            <CardHeader>
              <CardTitle>Application Actions</CardTitle>
              <CardDescription>
                This UI simulates the actions performed by the Spring Boot application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Error display */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              {/* Webhook information display */}
              <WebhookInfo webhookData={webhookData} />
              
              {/* SQL solution display */}
              <SqlSolution sqlSolution={sqlSolution} visible={step === 'webhook-generated'} />
              
              {/* Result display */}
              <SubmissionResult result={submissionResult} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <ActionButtons 
                step={step} 
                loading={loading} 
                onGenerateWebhook={generateWebhook}
                onSubmitSolution={submitSolution}
                onReset={resetApplication}
              />
            </CardFooter>
          </Card>

          {/* Implementation Details */}
          <ImplementationDetails />
        </div>
      </div>
    </div>
  );
};

export default Index;
