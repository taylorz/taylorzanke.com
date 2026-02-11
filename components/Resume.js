import Text from "@/components/Text";

const Resume = ({ resume }) => {
  if (!resume?.groups) return null;

  return (
    <div className="flex flex-col gap-6">
      {resume.groups.map((group, index) => {
        return (
          <div key={index}>
            <Text>{group.groupTitle}</Text>
            <div className="pl-2">
              {group.items.map((item, itemIndex) => {
                return (
                  <ResumeItem
                    key={`${item.year}-${itemIndex}`}
                    year={item.year}
                    title={item.title}
                    label={item.label}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ResumeItem = ({ year, title, label }) => {
  return (
    <div>
      <Text>
        {year} {title ? `${title}, ` : null}
        {label ? `${label}` : null}
      </Text>
    </div>
  );
};

export default Resume;
