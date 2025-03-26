'use client';

import { useState, useEffect } from 'react';
import { RedocStandalone } from 'redoc';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

// Define available API versions
const API_VERSIONS = [
  { label: 'Latest', value: '/api/openapi.yml' },
  { label: 'v1', value: '/api/v1/openapi.yml' },
  { label: 'v2', value: '/api/v2/openapi.yml' },
  // Add more versions as needed
];

// Define documentation view modes
const VIEW_MODES = [
  { label: 'Documentation', value: 'docs' },
  { label: 'Try API', value: 'test' }
];

export default function ApiDocs() {
  // State to handle whether component is mounted (for client-side rendering)
  const [isMounted, setIsMounted] = useState(false);
  // State to track the selected API version
  const [selectedVersion, setSelectedVersion] = useState(API_VERSIONS[0].value);
  // State to track the selected view mode (docs or test)
  const [viewMode, setViewMode] = useState(VIEW_MODES[0].value);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Header with version selector and view mode tabs */}
      <div className="w-full p-4 bg-white border-b border-gray-200 sticky top-0 z-10 flex justify-between items-center">
        {/* View mode tabs */}
        <div className="flex space-x-1">
          {VIEW_MODES.map((mode) => (
            <button
              key={mode.value}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                viewMode === mode.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setViewMode(mode.value)}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* API Version selector */}
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

      {/* Content area */}
      <div className="w-full">
        {isMounted && (
          <>
            {/* Render Redoc when in docs mode */}
            {viewMode === 'docs' && (
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

            {/* Render SwaggerUI when in test mode */}
            {viewMode === 'test' && (
              <div className="p-4">
                <SwaggerUI
                  url={selectedVersion}
                  docExpansion="list"
                  deepLinking={true}
                  defaultModelsExpandDepth={1}
                  displayOperationId={false}
                  filter={true}
                  showExtensions={false}
                  showCommonExtensions={false}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}