
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock = ({ code, language = "sql", className }: CodeBlockProps) => {
  return (
    <div className={cn("rounded-md overflow-hidden", className)}>
      <div className="bg-gray-800 px-4 py-2 text-xs text-gray-200 flex justify-between items-center">
        <span>{language.toUpperCase()}</span>
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
