import { useState } from "react";
import { BADGE_COLORS } from "../mockData";

const Stars = ({ r }) => (
  <span style={{ display: "flex", gap: 2, alignItems: "center" }}>
    {[1, 2, 3, 4, 5].map(i => (
      <svg key={i} viewBox="0 0 20 20" fill={i <= Math.floor(r) ? "#C9A84C" : "#E5E5E5"} style={{ width: 13, height: 13 }}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </span>
);

export default function ProductCard({ p, onView }) {
  const [liked, setLiked] = useState(false);
  const [bc, tc] = BADGE_COLORS[p.badge] || ["#C9A84C", "#1C1C1E"];

  return (
    <div className="card-hover" style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
      <div className="img-zoom" style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
        <img src={p.imgs[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <span className="badge-pill" style={{ position: "absolute", top: 10, left: 10, background: bc, color: tc }}>{p.badge}</span>
        <button className="like-btn" onClick={() => setLiked(!liked)}>
          <span style={{ fontSize: 15 }}>{liked ? "❤️" : "🤍"}</span>
        </button>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div style={{ fontSize: 10, color: "var(--gold)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "'Jost',sans-serif" }}>{p.category}</div>
        <div className="font-display" style={{ fontSize: 18, fontWeight: 600, color: "var(--charcoal)", marginTop: 2, lineHeight: 1.2 }}>{p.name}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, margin: "6px 0 10px" }}>
          <Stars r={p.rating} />
          <span style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>({p.reviews})</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span className="font-display" style={{ fontSize: 22, fontWeight: 600, color: "var(--charcoal)" }}>₹{p.price.toLocaleString()}</span>
            <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>{p.fabric}</div>
          </div>
          <button className="btn-gold" onClick={() => onView(p)} style={{ padding: "8px 14px", borderRadius: 12, fontSize: 12, fontFamily: "'Jost',sans-serif", letterSpacing: "0.06em" }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
