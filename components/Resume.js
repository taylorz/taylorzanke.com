import Text from "@/components/Text";

const Resume = ({ resume }) => {
  if (!resume?.groups) return null;

  return (
    <div className="flex flex-col gap-4">
      {resume.groups.map((group, index) => {
        return (
          <div key={index} className="flex flex-col gap-4">
            <Text className="uppercase">{group.groupTitle}</Text>
            <div>
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
    <div className="flex gap-4">
      <Text>{year}</Text>
      <Text>
        {title ? `${title}, ` : null}
        {label ? `${label}` : null}
      </Text>
    </div>
  );
};

export default Resume;
