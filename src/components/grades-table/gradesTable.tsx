import { type GradeItem } from "../../types";

type TableProps = {
  data: GradeItem[];
};

const tableHeaders = ["Предмет", "ПІБ викладача", "Оцінка (нац/бал/ECTS)"];

export const GradesTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="border-collapse rounded-lg overflow-hidden shadow-xl">
      <thead className="text-center bg-secondary">
        <tr>
          {tableHeaders.map((header) => (
            <th key={header} className="p-3 text-center font-bold">
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="even:bg-bg-surface">
            <td className="p-3 text-center">{item.subject}</td>
            <td className="p-3 text-center">{item.teacher}</td>
            <td className="p-3 text-center">{item.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
