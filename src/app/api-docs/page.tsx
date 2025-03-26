'use client';

import { useState, useEffect } from 'react';
import { RedocStandalone } from 'redoc';

export default function ApiDocs() {
  // State to handle whether component is mounted (for client-side rendering)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="w-full">
        {/* Render Redoc only after component is mounted (client-side) */}
        {isMounted && (
          <div className="w-full">
            <RedocStandalone
              specUrl="/api/openapi.yml"
              options={{
                hideHostname: false,
                pathInMiddlePanel: true,
                theme: {
                  colors: {
                    primary: {
                      main: '#3b82f6', // Tailwind blue-500
                    },
                  },
                  typography: {
                    fontFamily: 'Inter, system-ui, sans-serif',
                  },
                  // Use full width for the API docs
                  rightPanel: {
                    width: '40%',
                  },
                },
                expandResponses: '200,201',
                jsonSampleExpandLevel: 3,
                sortPropsAlphabetically: false,
                hideDownloadButton: false,
                disableSearch: false
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}