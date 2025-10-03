interface TitleSectionProps {
  title: string;
  description?: string;
}

export function TitleSection({ title, description }: TitleSectionProps) {
  return (
    <div className="bg-opacity-50 p-8 rounded-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 line-title-section">
        {title}
      </h2>

      {description && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
          {description}
        </p>
      )}
    </div>
  );
}
