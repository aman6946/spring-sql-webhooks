
import React from 'react';

interface WebhookData {
  webhook: string;
  accessToken: string;
  question: string;
  regNo: string;
}

interface WebhookInfoProps {
  webhookData: WebhookData | null;
}

const WebhookInfo = ({ webhookData }: WebhookInfoProps) => {
  if (!webhookData) return null;

  return (
    <div className="p-4 bg-blue-50 rounded-md">
      <h3 className="font-semibold text-blue-800 mb-2">Webhook Generated</h3>
      <div className="space-y-2 text-sm">
        <p><span className="font-medium">Webhook URL:</span> {webhookData.webhook}</p>
        <p><span className="font-medium">Access Token:</span> {webhookData.accessToken.substring(0, 20)}...</p>
        <p><span className="font-medium">Registration Number:</span> {webhookData.regNo}</p>
        <div>
          <p className="font-medium">Question:</p>
          <p className="mt-1">{webhookData.question}</p>
        </div>
      </div>
    </div>
  );
};

export default WebhookInfo;
