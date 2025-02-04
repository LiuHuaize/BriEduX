import { useResumeStore } from '@/lib/stores/resume';
import { cn } from '@/lib/utils';

interface GlalieTemplateProps {
  isFirstPage: boolean;
  columns: string[][];
}

const Header = () => {
  const basics = useResumeStore((state) => state.resume?.data.basics);
  
  if (!basics) return null;

  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      {basics.picture.url && !basics.picture.effects.hidden && (
        <img
          src={basics.picture.url}
          alt={basics.name}
          className={cn(
            'object-cover',
            basics.picture.effects.border && 'border-2 border-primary',
            basics.picture.effects.grayscale && 'grayscale'
          )}
          style={{
            width: `${basics.picture.size}px`,
            height: `${basics.picture.size}px`,
            borderRadius: `${basics.picture.borderRadius}px`,
          }}
        />
      )}

      <div className="space-y-4">
        <div>
          <div className="text-2xl font-bold">{basics.name}</div>
          <div className="text-base">{basics.headline}</div>
        </div>

        <div className="flex flex-col items-start gap-y-1.5 rounded border border-primary px-3 py-4 text-left text-sm">
          {basics.location && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-map-pin text-primary" />
              <div>{basics.location}</div>
            </div>
          )}
          {basics.phone && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-phone text-primary" />
              <a href={`tel:${basics.phone}`} target="_blank" rel="noreferrer">
                {basics.phone}
              </a>
            </div>
          )}
          {basics.email && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-at text-primary" />
              <a href={`mailto:${basics.email}`} target="_blank" rel="noreferrer">
                {basics.email}
              </a>
            </div>
          )}
          {basics.url.href && (
            <div className="flex items-center gap-x-1.5">
              <i className="ph ph-link text-primary" />
              <a href={basics.url.href} target="_blank" rel="noreferrer">
                {basics.url.label || basics.url.href}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  const summary = useResumeStore((state) => state.resume?.data.sections.summary);

  if (!summary?.visible || !summary.content) return null;

  return (
    <section id="summary" className="text-center">
      <h2 className="mb-2 text-lg font-bold">{summary.name}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: summary.content }}
        style={{ columns: summary.columns }}
        className="prose prose-sm max-w-none"
      />
    </section>
  );
};

const Experience = () => {
  const experience = useResumeStore((state) => state.resume?.data.sections.experience);

  if (!experience?.visible || !experience.items.length) return null;

  return (
    <section id="experience">
      <h2 className="mb-4 text-lg font-bold text-center">{experience.name}</h2>
      <div className="space-y-4">
        {experience.items.map((item) => (
          <div key={item.id} className="space-y-2 rounded border border-primary p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium">{item.company}</div>
                <div className="text-sm">{item.position}</div>
              </div>
              <div className="text-sm text-gray-500">{item.date}</div>
            </div>
            {item.location && (
              <div className="text-sm text-gray-500">{item.location}</div>
            )}
            {item.summary && (
              <div
                dangerouslySetInnerHTML={{ __html: item.summary }}
                className="prose prose-sm max-w-none"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  const education = useResumeStore((state) => state.resume?.data.sections.education);

  if (!education?.visible || !education.items.length) return null;

  return (
    <section id="education">
      <h2 className="mb-4 text-lg font-bold text-center">{education.name}</h2>
      <div className="space-y-4">
        {education.items.map((item) => (
          <div key={item.id} className="space-y-2 rounded border border-primary p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium">{item.institution}</div>
                <div className="text-sm">{item.studyType}</div>
              </div>
              <div className="text-sm text-gray-500">{item.date}</div>
            </div>
            {item.area && (
              <div className="text-sm text-gray-500">{item.area}</div>
            )}
            {item.score && (
              <div className="text-sm text-gray-500">Score: {item.score}</div>
            )}
            {item.summary && (
              <div
                dangerouslySetInnerHTML={{ __html: item.summary }}
                className="prose prose-sm max-w-none"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = useResumeStore((state) => state.resume?.data.sections.skills);

  if (!skills?.visible || !skills.items.length) return null;

  return (
    <section id="skills">
      <h2 className="mb-4 text-lg font-bold text-center">{skills.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.items.map((item) => (
          <div key={item.id} className="space-y-1 rounded border border-primary p-4">
            <div className="font-medium">{item.name}</div>
            {item.description && (
              <div className="text-sm text-gray-500">{item.description}</div>
            )}
            {item.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.keywords.map((keyword) => (
                  <div
                    key={keyword}
                    className="rounded bg-gray-100 px-2 py-1 text-xs"
                  >
                    {keyword}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export const GlalieTemplate = ({ isFirstPage, columns }: GlalieTemplateProps) => {
  return (
    <div className="p-8 space-y-6">
      {isFirstPage && <Header />}
      
      <div className="grid grid-cols-1 gap-6">
        {columns.map((sections, columnIndex) => (
          <div key={columnIndex} className="space-y-6">
            {sections.map((sectionId) => {
              switch (sectionId) {
                case 'summary':
                  return <Summary key={sectionId} />;
                case 'experience':
                  return <Experience key={sectionId} />;
                case 'education':
                  return <Education key={sectionId} />;
                case 'skills':
                  return <Skills key={sectionId} />;
                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}; 