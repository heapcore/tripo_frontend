import React from 'react'

export default function App() {
  const tripoUiUrl = import.meta.env.VITE_TRIPOSR_UI_URL || 'http://localhost:7860'

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 p-4 md:p-6">
      <div className="max-w-6xl mx-auto grid gap-4">
        <div className="rounded-2xl bg-white shadow p-4 md:p-6">
          <h1 className="text-2xl font-bold">tripo_frontend</h1>
          <p className="mt-2 text-sm md:text-base text-slate-700">
            This frontend is a wrapper around the official TripoSR UI.
            Run official TripoSR locally and this page embeds it below.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Connected TripoSR URL:
            {' '}
            <a className="underline text-blue-700" href={tripoUiUrl} target="_blank" rel="noreferrer">
              {tripoUiUrl}
            </a>
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow overflow-hidden">
          <iframe
            title="TripoSR"
            src={tripoUiUrl}
            className="w-full h-[78vh] border-0"
          />
        </div>
      </div>
    </div>
  )
}
