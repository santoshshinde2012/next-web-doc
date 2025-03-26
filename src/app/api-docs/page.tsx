'use client';

import { useState, useEffect } from 'react';
import { RedocStandalone } from 'redoc';

// Define available API versions
const API_VERSIONS = [
  { label: 'Latest', value: '/api/openapi.yml' },
  { label: 'v1', value: '/api/v1/openapi.yml' },
  { label: 'v2', value: '/api/v2/openapi.yml' },
];

export default function ApiDocs() {
  // State to handle whether component is mounted (for client-side rendering)
  const [isMounted, setIsMounted] = useState(false);
  // State to track the selected API version
  const [selectedVersion, setSelectedVersion] = useState(API_VERSIONS[0].value);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Version selector */}
      <div className="w-full p-4 bg-white border-b border-gray-200 sticky top-0 z-10 flex justify-end">
        <div className="flex items-center gap-2">
          <label htmlFor="version-select" className="font-medium text-gray-700">
            API Version:
          </label>
          <select
            id="version-select"
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}
          >
            {API_VERSIONS.map((version) => (
              <option key={version.value} value={version.value}>
                {version.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full">
        {/* Render Redoc only after component is mounted (client-side) */}
        {isMounted && (
          <div className="w-full">
            <RedocStandalone
              specUrl={selectedVersion}
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