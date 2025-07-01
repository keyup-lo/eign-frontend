interface WWBProps {
    key: number;
    title: string;
    description: string;
  }
  
  export default function WWB({
    key,
    title,
    description
  }: WWBProps) {
      return (
          <div 
              key={key}
              className="bg-gray-100 rounded-lg p-4 transition-colors cursor-pointer outline outline-gray-300 flex flex-col gap-2"
              >
                <h4 className="font-semibold text-gray-700">{title}</h4>
                <p className="text-xs text-light">{description}</p>
          </div>
      );
    }