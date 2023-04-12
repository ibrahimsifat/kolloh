import { FC } from "react";

interface TimeProps {
  date: Date;
  title: string;
}

const Time: FC<TimeProps> = ({ date, title }) => {
  const dateTimeString = date.toISOString();
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p className="text-sm text-gray-600 dark:text-gray-400">
      <time title={title} dateTime={dateTimeString}>
        {dateString}
      </time>
    </p>
  );
};

export default Time;
