import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const paperData = [
    {
        id: 1,
        title: "AutoGLM: Autonomous Foundation Agents for GUIs",
        year: 2024,
        focus: "Foundation agents for GUI control",
        approach: "Large language models with autonomous control",
        mainResults: "55.2% success rate on VAB-WebArena-Lite, 96.2% on OpenTable tasks"
    },
    {
        id: 2,
        title: "Classifying and Qualifying GUI Defects",
        year: 2017,
        focus: "GUI testing and fault detection",
        approach: "GUI fault model and empirical analysis",
        mainResults: "Comprehensive GUI fault classification framework"
    },
    {
        id: 3,
        title: "You Only Look at Screens",
        year: 2024,
        focus: "Autonomous GUI agents",
        approach: "Multimodal chain-of-action technique",
        mainResults: "90% action type accuracy, 74% overall success rate"
    },
    {
        id: 4,
        title: "Ponder & Press",
        year: 2024,
        focus: "Visual GUI automation",
        approach: "Divide-and-conquer with MLLMs",
        mainResults: "22.5% improvement on ScreenSpot benchmark"
    }
];

const yearData = [
    { year: 2017, count: 1 },
    { year: 2024, count: 3 }
];

const approachCategorization = [
    { name: "LLM-based", value: 2 },
    { name: "Traditional ML", value: 1 },
    { name: "Empirical Analysis", value: 1 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PaperComparisonDashboard() {
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold mb-4">GUI Research Papers Analysis Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Timeline Chart */}
                <Card>
                    <CardHeader>Publication Timeline</CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={yearData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Approach Distribution */}
                <Card>
                    <CardHeader>Research Approach Distribution</CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={approachCategorization}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {approachCategorization.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Paper Details */}
            <Card>
                <CardHeader>Detailed Paper Comparison</CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2">Title</th>
                                    <th className="px-4 py-2">Year</th>
                                    <th className="px-4 py-2">Focus</th>
                                    <th className="px-4 py-2">Approach</th>
                                    <th className="px-4 py-2">Main Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paperData.map((paper) => (
                                    <tr key={paper.id} className="border-b">
                                        <td className="px-4 py-2">{paper.title}</td>
                                        <td className="px-4 py-2">{paper.year}</td>
                                        <td className="px-4 py-2">{paper.focus}</td>
                                        <td className="px-4 py-2">{paper.approach}</td>
                                        <td className="px-4 py-2">{paper.mainResults}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Key Findings */}
            <Card>
                <CardHeader>Key Research Trends & Findings</CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Strong focus on autonomous GUI agents in recent research (2024)</li>
                        <li>Shift towards using large language models and multimodal approaches</li>
                        <li>Increasing emphasis on visual-based methods rather than traditional HTML/accessibility APIs</li>
                        <li>Improved success rates in GUI interaction tasks across different benchmarks</li>
                        <li>Evolution from basic GUI testing to sophisticated autonomous control</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}