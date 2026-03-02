const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
  :root {
    --gold: #C9A84C; --gold-light: #E8C96A;
    --charcoal: #1C1C1E; --pearl: #FAF8F5;
    --pearl-dark: #F0EDE8; --text-muted: #8A8A8E;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Jost', sans-serif; background: var(--pearl); }
  .font-display { font-family: 'Cormorant Garamond', serif !important; }
  .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.13)!important; }
  .img-zoom { overflow: hidden; }
  .img-zoom img { transition: transform 0.5s ease; }
  .img-zoom:hover img { transform: scale(1.07); }
  .btn-wa { background: linear-gradient(135deg,#25D366,#128C7E); color:#fff; border:none; cursor:pointer; transition:all .3s; box-shadow:0 4px 15px rgba(37,211,102,.35); }
  .btn-wa:hover { transform:translateY(-2px); box-shadow:0 8px 25px rgba(37,211,102,.45); }
  .btn-gold { background: linear-gradient(135deg,#C9A84C,#E8C96A); color:#1C1C1E; border:none; cursor:pointer; font-weight:600; transition:all .3s; box-shadow:0 4px 15px rgba(201,168,76,.3); }
  .btn-gold:hover { transform:translateY(-2px); }
  .btn-outline { background:transparent; color:var(--gold); border:1.5px solid var(--gold); cursor:pointer; transition:all .3s; }
  .btn-outline:hover { background:var(--gold); color:var(--charcoal); }
  .size-btn { border:1.5px solid #D1CDC7; cursor:pointer; transition:all .2s; background:#fff; font-family:'Jost',sans-serif; font-size:14px; font-weight:500; }
  .size-btn.active { border-color:var(--gold); background:var(--charcoal); color:#fff; }
  .thumb { border:2px solid transparent; cursor:pointer; transition:all .2s; border-radius:8px; overflow:hidden; }
  .thumb.active { border-color:var(--gold); }
  .divider { height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin:16px 0; }
  .modal-bg { position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);z-index:200;display:flex;align-items:center;justify-content:center;padding:16px; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  .fade-up { animation: fadeUp .45s ease forwards; }
  input:focus,select:focus,textarea:focus { outline:none; border-color:var(--gold)!important; box-shadow:0 0 0 3px rgba(201,168,76,.15); }
  .navbar-blur { backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px); background:rgba(250,248,245,.93); border-bottom:1px solid rgba(201,168,76,.2); }
  .cat-pill { white-space:nowrap; cursor:pointer; transition:all .25s; border:1.5px solid rgba(201,168,76,.3); font-family:'Jost',sans-serif; font-size:13px; font-weight:500; padding:8px 18px; border-radius:100px; }
  .badge-pill { font-family:'Jost',sans-serif; font-size:9px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; padding:3px 10px; border-radius:100px; }
  .like-btn { position:absolute;top:10px;right:10px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border:none;cursor:pointer;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;transition:all .2s; }
  .like-btn:hover{transform:scale(1.1)}
  .trust-card { text-align:center;padding:14px;border-radius:14px;background:var(--pearl-dark); }
  .admin-row:hover { background: rgba(201,168,76,.05)!important; }
  .float-wa { position:fixed;bottom:24px;right:24px;z-index:99;width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#25D366,#128C7E);box-shadow:0 4px 20px rgba(37,211,102,.5);cursor:pointer;border:none;transition:transform .2s; }
  .float-wa:hover{transform:scale(1.1)}
  ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-thumb{background:var(--gold);border-radius:3px}
`;

export default globalStyles;
