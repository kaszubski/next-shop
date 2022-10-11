interface IRaitingProps {
  raiting: number
}

export function Raiting({ raiting }: IRaitingProps) {
  return <div className="text-blue-500 font-bold">{raiting}</div>;
}
