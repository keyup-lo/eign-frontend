interface AboutButtonProps {
    children: string;
}

export default function AboutButton({ children }: AboutButtonProps) {
    return (
      <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
        {children}
      </button>
    );
  }