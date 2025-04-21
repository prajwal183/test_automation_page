import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Test Automation Practice Page"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#3b82f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 24,
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 7h-9"></path>
            <path d="M14 17H5"></path>
            <circle cx="17" cy="17" r="3"></circle>
            <circle cx="7" cy="7" r="3"></circle>
          </svg>
        </div>
        <h1 style={{ fontSize: 48, fontWeight: "bold", margin: 0 }}>Test Automation Practice</h1>
      </div>
      <p style={{ fontSize: 24, color: "#666", textAlign: "center", margin: 0 }}>
        A comprehensive playground for QA engineers and test automation specialists
      </p>
      <div
        style={{
          display: "flex",
          marginTop: 48,
          gap: 16,
        }}
      >
        <div
          style={{
            padding: "8px 16px",
            background: "#f3f4f6",
            borderRadius: 8,
            fontSize: 20,
          }}
        >
          Playwright
        </div>
        <div
          style={{
            padding: "8px 16px",
            background: "#f3f4f6",
            borderRadius: 8,
            fontSize: 20,
          }}
        >
          Selenium
        </div>
        <div
          style={{
            padding: "8px 16px",
            background: "#f3f4f6",
            borderRadius: 8,
            fontSize: 20,
          }}
        >
          Cypress
        </div>
      </div>
    </div>,
    { ...size },
  )
}
