export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] bg-white flex flex-col mx-auto min-h-screen">
      {children}
    </div>
  );
}
