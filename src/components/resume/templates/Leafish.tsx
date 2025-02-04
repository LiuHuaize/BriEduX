import { useResumeStore } from '@/lib/stores/resume';
import { cn } from '@/lib/utils';

interface LeafishTemplateProps {
  isFirstPage: boolean;
  columns: string[][];
}

const Header = () => {
  const basics = useResumeStore((state) => state.resume?.data.basics);
  const section = useResumeStore((state) => state.resume?.data.sections.summary);
  const primaryColor = useResumeStore((state) => state.resume?.data.metadata.theme.primary);
  
  if (!basics) return null;

  return (
    <div>
      <div
        className="p-8 flex items-center space-x-8"
        style={{ backgroundColor: `${primaryColor}20` }}
      >
        <div className="space-y-3">
          <div>
            <div className="text-3xl font-bold">{basics.name}</div>
            <div className="text-base font-medium text-primary">{basics.headline}</div>
          </div>

          {section?.content && (
            <div
              dangerouslySetInnerHTML={{ __html: section.content }}
              style={{ columns: section.columns }}
              className="prose prose-sm max-w-none"
            />
          )}
        </div>

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
      </div>

      <div
        className="p-4 space-y-3 flex flex-wrap items-center gap-x-4 gap-y-2"
        style={{ backgroundColor: `${primaryColor}40` }}
      >
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
  );
};

const Experience = () => {
  const experience = useResumeStore((state) => state.resume?.data.sections.experience);

  if (!experience?.visible || !experience.items.length) return null;

  return (
    <section id="experience">
      <h2 className="mb-4 text-lg font-bold">{experience.name}</h2>
      <div className="space-y-4">
        {experience.items.map((item) => (
          <div key={item.id} className="space-y-2">
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
      <h2 className="mb-4 text-lg font-bold">{education.name}</h2>
      <div className="space-y-4">
        {education.items.map((item) => (
          <div key={item.id} className="space-y-2">
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
      <h2 className="mb-4 text-lg font-bold">{skills.name}</h2>
      <div className="space-y-4">
        {skills.items.map((item) => (
          <div key={item.id} className="space-y-1">
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

export const LeafishTemplate = ({ isFirstPage, columns }: LeafishTemplateProps) => {
  return (
    <div className="space-y-6">
      {isFirstPage && <Header />}
      
      <div className="grid grid-cols-1 gap-6 p-8">
        {columns.map((sections, columnIndex) => (
          <div key={columnIndex} className="space-y-6">
            {sections.map((sectionId) => {
              switch (sectionId) {
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