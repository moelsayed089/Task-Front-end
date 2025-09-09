import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorkSummary = () => {
  const sections = [
    {
      title: "🖥️ Dashboard Layout & Components",
      points: [
        "Built a responsive layout with sidebar and main content area",
        "Developed reusable UI components like buttons, modals, and tables",
      ],
    },
    {
      title: "🔗 Data Integration",
      points: [
        "Integrated data from JSONPlaceholder REST API",
        "Displayed posts in a paginated & searchable data table",
      ],
    },
    {
      title: "📑 Forms & State Management",
      points: [
        "Implemented forms to create and edit entries",
        "Managed state across components using React Hooks & Redux",
      ],
    },
    {
      title: "⚡ Notifications & Error Handling",
      points: [
        "Handled loading and error states during API calls",
        "Added notifications system for success and error messages",
      ],
    },
  ];

  return (
    <section className="py-8   ">
      <div className="  grid gap-6 md:grid-cols-2">
        {sections.map((section, idx) => (
          <Card
            key={idx}
            className="rounded-2xl shadow hover:shadow-lg transition"
          >
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkSummary;
