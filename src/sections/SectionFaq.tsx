type Prop = {
  items: any;
};

export default function SectionFaq({ items }: Prop) {
  return (
    <div>
      <h1>FAQ</h1>
      {items.map((item: any) => (
        <h1 key={item.name}>{item.name}</h1>
      ))}
    </div>
  );
}
