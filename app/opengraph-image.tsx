import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          color: "#0f172a",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "12px",
              background: "#020617",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 900,
            }}
          >
            KB
          </div>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#0f766e" }}>Full-Stack Developer</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "82px", lineHeight: 1.02, fontWeight: 900, letterSpacing: "-2px" }}>{SITE_NAME}</div>
          <div style={{ marginTop: "28px", maxWidth: "900px", fontSize: "34px", lineHeight: 1.35, color: "#475569" }}>
            {SITE_DESCRIPTION}
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", fontSize: "24px", fontWeight: 800, color: "#0f766e" }}>
          <span>React.js</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Django</span>
          <span>Android Apps</span>
        </div>
      </div>
    ),
    size,
  );
}
