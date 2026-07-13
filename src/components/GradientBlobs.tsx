export default function GradientBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f2f9f3]" />
      <div
        className="blob absolute -left-[10%] -top-[20%] h-[520px] w-[520px] rounded-full opacity-70 blur-[110px]"
        style={{ background: "#3fb75e", animation: "blob-a 22s ease-in-out infinite" }}
      />
      <div
        className="blob absolute -right-[12%] top-[10%] h-[560px] w-[560px] rounded-full opacity-70 blur-[120px]"
        style={{ background: "#a6e635", animation: "blob-b 26s ease-in-out infinite" }}
      />
      <div
        className="blob absolute bottom-[-25%] left-[20%] h-[500px] w-[500px] rounded-full opacity-60 blur-[110px]"
        style={{ background: "#0d2b16", animation: "blob-c 30s ease-in-out infinite" }}
      />
      <div
        className="blob absolute bottom-[-15%] right-[15%] h-[420px] w-[420px] rounded-full opacity-60 blur-[100px]"
        style={{ background: "#4fd873", animation: "blob-a 18s ease-in-out infinite reverse" }}
      />
    </div>
  );
}
