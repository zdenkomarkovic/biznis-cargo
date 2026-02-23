import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "BIZNIS CARGO DOO – Organizacija drumskog prevoza robe u Srbiji";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1a3a6b",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(249,115,22,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            backgroundColor: "rgba(249,115,22,0.06)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            right: "60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.03)",
            display: "flex",
          }}
        />

        {/* Orange top bar */}
        <div style={{ height: "7px", backgroundColor: "#f97316", width: "100%", display: "flex" }} />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "52px 80px 48px",
            justifyContent: "space-between",
          }}
        >
          {/* Header: Logo + Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "10px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} width={110} height={110} alt="Logo" style={{ display: "flex" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "52px",
                    fontWeight: "900",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                    display: "flex",
                  }}
                >
                  BIZNIS{" "}
                </span>
                <span
                  style={{
                    color: "#f97316",
                    fontSize: "52px",
                    fontWeight: "900",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                    display: "flex",
                  }}
                >
                  CARGO
                </span>
              </div>
              <span
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "22px",
                  fontWeight: "400",
                  letterSpacing: "10px",
                  display: "flex",
                }}
              >
                DOO
              </span>
            </div>
          </div>

          {/* Middle: Tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                width: "64px",
                height: "4px",
                backgroundColor: "#f97316",
                borderRadius: "2px",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#ffffff",
                fontSize: "38px",
                fontWeight: "700",
                lineHeight: 1.25,
                display: "flex",
              }}
            >
              Pouzdan partner u organizaciji
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "38px",
                fontWeight: "400",
                lineHeight: 1.25,
                display: "flex",
              }}
            >
              drumskog prevoza robe u Srbiji
            </span>
          </div>

          {/* Bottom: Tags + Domain */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  backgroundColor: "rgba(249,115,22,0.18)",
                  border: "1px solid rgba(249,115,22,0.45)",
                  color: "#fb923c",
                  padding: "9px 22px",
                  borderRadius: "100px",
                  fontSize: "17px",
                  fontWeight: "600",
                  display: "flex",
                }}
              >
                Transport robe
              </div>
              <div
                style={{
                  backgroundColor: "rgba(249,115,22,0.18)",
                  border: "1px solid rgba(249,115,22,0.45)",
                  color: "#fb923c",
                  padding: "9px 22px",
                  borderRadius: "100px",
                  fontSize: "17px",
                  fontWeight: "600",
                  display: "flex",
                }}
              >
                Logistika
              </div>
              <div
                style={{
                  backgroundColor: "rgba(249,115,22,0.18)",
                  border: "1px solid rgba(249,115,22,0.45)",
                  color: "#fb923c",
                  padding: "9px 22px",
                  borderRadius: "100px",
                  fontSize: "17px",
                  fontWeight: "600",
                  display: "flex",
                }}
              >
                Novi Sad · Srbija
              </div>
            </div>

            <span
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "19px",
                display: "flex",
                letterSpacing: "0.5px",
              }}
            >
              www.bizniscargo.rs
            </span>
          </div>
        </div>

        {/* Orange bottom accent line */}
        <div
          style={{
            height: "4px",
            background: "linear-gradient(to right, #f97316, transparent)",
            width: "60%",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
