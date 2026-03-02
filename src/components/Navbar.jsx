import { useState } from "react";
import { CATS } from "../mockData";

/*const Logo = ({ size = 40 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: "linear-gradient(135deg,#1C1C1E,#2C2C2E)", border: "2px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <span style={{ fontFamily: "'Cormorant Garamond',serif", color: "#C9A84C", fontSize: size * 0.38, fontWeight: 600 }}>F</span>
  </div>
);*/

const Logo = ({ size = 40 }) => (
  <img
    src="https://res.cloudinary.com/djrikegql/image/upload/v1772435756/1772289183645_obsyhw.png"
    alt="Faraz Abaya Logo"
    style={{
      width: size,
      height: size,
      objectFit: "contain",
      display: "block"
    }}
  />
);

export default function Navbar({ onNav, search, setSearch, cat, setCat }) {
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar-blur" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <button onClick={() => onNav("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
            <Logo size={42} />
            <div>
              <div className="font-display" style={{ fontSize: 18, fontWeight: 600, color: "var(--charcoal)" }}>Faraz Abaya</div>
              <div style={{ fontSize: 9, color: "var(--gold)", letterSpacing: "0.18em", fontFamily: "'Jost',sans-serif", fontWeight: 600 }}>فراز عبايه</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {/* Category Dropdown */}
            <div style={{ position: "relative" }} onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 14, fontWeight: 500, color: "var(--charcoal)" }}>
                Collections <span style={{ fontSize: 10 }}>▾</span>
              </button>
              {dropOpen && (
                <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8, background: "#fff", borderRadius: 14, boxShadow: "0 8px 40px rgba(0,0,0,0.13)", border: "1px solid rgba(201,168,76,.2)", padding: "6px 0", minWidth: 160, zIndex: 100 }}>
                  {CATS.map(c => (
                    <button key={c} onClick={() => { setCat(c); setDropOpen(false); onNav("home"); }}
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 18px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 13, color: cat === c ? "var(--gold)" : "var(--charcoal)", fontWeight: cat === c ? 600 : 400 }}
                      onMouseEnter={e => e.currentTarget.style.background = "#FFF8EC"}
                      onMouseLeave={e => e.currentTarget.style.background = "none"}>
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: 14 }}>🔍</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..."
                style={{ paddingLeft: 34, paddingRight: 14, paddingTop: 8, paddingBottom: 8, borderRadius: 100, border: "1.5px solid rgba(201,168,76,.3)", background: "var(--pearl-dark)", fontFamily: "'Jost',sans-serif", fontSize: 13, width: 170 }} />
            </div>

            <button onClick={() => onNav("admin")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
              🛡 Admin
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div style={{ display: "none" }} className="mobile-search">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search abayas..."
            style={{ width: "100%", padding: "10px 16px", borderRadius: 100, border: "1.5px solid rgba(201,168,76,.3)", background: "var(--pearl-dark)", fontFamily: "'Jost',sans-serif", fontSize: 13, marginBottom: 12 }} />
        </div>
      </div>
    </nav>
  );
}
