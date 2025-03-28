'use client'

import { useState, useEffect } from 'react'
import { RedocStandalone } from 'redoc'

// Define available API versions
const API_VERSIONS = [
  { label: 'Latest', value: '/api/openapi.yml' },
  { label: 'v1', value: '/api/v1/openapi.yml' },
  { label: 'v2', value: '/api/v2/openapi.yml' },
]

export default function ApiDocs() {
  const [isMounted, setIsMounted] = useState(false)
  const [selectedVersion, setSelectedVersion] = useState(API_VERSIONS[0].value)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="bg-background min-h-screen w-full">
      {/* Header with version selector and view mode tabs */}
      <div className="sticky top-0 z-10 flex w-full items-center justify-between border-b border-gray-200 bg-white p-4">
        {/* API Version selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="version-select" className="font-medium text-gray-700">
            API Version:
          </label>
          <select
            id="version-select"
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                disableSearch: false,
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
