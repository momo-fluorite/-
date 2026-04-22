interface PanelProps {
  title: string;
  extra?: any;
  children?: any;
}

export default function Panel({ title, extra, children }: PanelProps) {
  return (
    <section className="panel" title={title}>
      <header className="panel-header">
        <h3>{title}</h3>
        {extra}
      </header>
      <div className="panel-body">{children}</div>
    </section>
  );
}
