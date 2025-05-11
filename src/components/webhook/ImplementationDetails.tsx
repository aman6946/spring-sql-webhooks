
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ImplementationDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Implementation Details</CardTitle>
        <CardDescription>
          How the Spring Boot application would work in production
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold">1. Application Startup Flow</h3>
          <p className="text-gray-600 text-sm">
            The Spring Boot application would use an <code>@EventListener(ApplicationReadyEvent.class)</code> to 
            trigger the webhook generation process automatically when the application starts.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">2. REST API Integration</h3>
          <p className="text-gray-600 text-sm">
            The application would use Spring's <code>WebClient</code> or <code>RestTemplate</code> to make HTTP requests to the 
            webhook generation endpoint and later to submit the solution.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">3. SQL Problem Solving</h3>
          <p className="text-gray-600 text-sm">
            Based on the registration number, the application would determine which SQL problem to solve,
            then generate the appropriate SQL query solution.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">4. JWT Authentication</h3>
          <p className="text-gray-600 text-sm">
            For the submission request, the application would include the access token as a JWT in the Authorization header.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImplementationDetails;
