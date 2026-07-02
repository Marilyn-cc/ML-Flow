import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import {
  Search,
  ChevronDown,
  RotateCcw,
  LayoutGrid,
  List,
  Bookmark,
  Clock,
  FileStack,
  Play,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Database,
  Table,
  LineChart,
  ScatterChart,
  Sigma,
  CircleDot,
  TreePine,
} from "lucide-react";

const NOTEBOOKS = [
  {
    title: "Python Basics Refresher",
    description: "Revisit Python fundamentals with hands-on examples.",
    tags: [{ label: "Beginner", color: "emerald" }, { label: "Python", color: "gray" }],
    cells: 12,
    minutes: 15,
    icon: BarChart3,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Numpy Essentials",
    description: "Learn array operations, broadcasting and more with numpy.",
    tags: [{ label: "Beginner", color: "emerald" }, { label: "Numpy", color: "gray" }],
    cells: 18,
    minutes: 20,
    icon: Database,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Pandas Data Handling",
    description: "Load, clean and manipulate data like a pro.",
    tags: [{ label: "Beginner", color: "emerald" }, { label: "Pandas", color: "gray" }],
    cells: 22,
    minutes: 25,
    icon: Table,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Data Visualization with Matplotlib",
    description: "Visualize your data with clear and beautiful plots.",
    tags: [{ label: "Beginner", color: "emerald" }, { label: "Visualization", color: "gray" }],
    cells: 16,
    minutes: 20,
    icon: LineChart,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Linear Regression from Scratch",
    description: "Build a linear regression model step by step.",
    tags: [{ label: "Intermediate", color: "amber" }, { label: "Regression", color: "gray" }],
    cells: 24,
    minutes: 30,
    icon: ScatterChart,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    title: "Logistic Regression in Practice",
    description: "Solve classification problems with logistic regression.",
    tags: [{ label: "Intermediate", color: "amber" }, { label: "Classification", color: "gray" }],
    cells: 20,
    minutes: 25,
    icon: Sigma,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "K-Means Clustering",
    description: "Group similar data points using K-Means algorithm.",
    tags: [{ label: "Intermediate", color: "amber" }, { label: "Clustering", color: "gray" }],
    cells: 18,
    minutes: 25,
    icon: CircleDot,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Random Forest Classifier",
    description: "Use ensemble learning to improve prediction accuracy.",
    tags: [{ label: "Advanced", color: "rose" }, { label: "Ensemble", color: "gray" }],
    cells: 28,
    minutes: 35,
    icon: TreePine,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

const FILTERS = ["All Topics", "All Levels", "All Types", "All Languages"];
const TAGS = [
  "Beginner",
  "Numpy",
  "Pandas",
  "Visualization",
  "Classification",
  "Regression",
  "Clustering",
];
const TABS = ["All Notebooks", "Beginner", "Intermediate", "Advanced"];

const TAG_COLORS: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  rose: "bg-rose-50 text-rose-600",
  gray: "bg-gray-100 text-gray-500",
};

export default function PracticePage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAFB]">
      <Sidebar active="Practice" promo="practicing" />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          mode="breadcrumb"
          crumbs={[
            { label: "Practice", href: "/practice" },
            { label: "Notebooks" },
          ]}
          showProgressButton
        />

        <main className="flex-1 px-6 lg:px-10 pb-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Practice Notebooks
              </h1>
              <p className="text-[15px] text-gray-500">
                Learn by doing. Explore notebooks, solve problems, and build
                real skills.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <FileStack size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Notebooks</p>
                <p className="text-2xl font-bold text-brand leading-tight">
                  28
                </p>
                <p className="text-xs text-gray-400">Across all topics</p>
              </div>
            </div>
          </div>

          {/* Search + filters */}
          <div className="rounded-xl border border-gray-100 bg-white p-5 mb-6">
            <div className="relative mb-4">
              <Search
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search notebooks..."
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/10"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 px-3.5 py-2 text-sm text-gray-600 hover:bg-gray-50"
                >
                  {filter}
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
              ))}
              <button className="flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark ml-auto">
                <RotateCcw size={14} />
                Clear Filters
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-400 mr-1">Popular tags:</span>
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:border-brand/30 hover:text-brand hover:bg-brand/5"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Tabs + view controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-6 border-b border-gray-100 sm:border-none">
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  className={`relative pb-3 sm:pb-0 text-sm font-medium ${
                    i === 0
                      ? "text-brand"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab}
                  {i === 0 && (
                    <span className="absolute -bottom-[1px] sm:hidden left-0 right-0 h-0.5 bg-brand" />
                  )}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1 w-fit">
              <button className="flex items-center gap-1.5 rounded-md bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand">
                <LayoutGrid size={15} />
                Grid
              </button>
              <button className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-50">
                <List size={15} />
                List
              </button>
            </div>
          </div>

          {/* Notebook grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {NOTEBOOKS.map((nb) => (
              <div
                key={nb.title}
                className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg ${nb.iconBg} ${nb.iconColor}`}
                  >
                    <nb.icon size={19} />
                  </div>
                  <button
                    aria-label="Save notebook"
                    className="text-gray-300 hover:text-brand"
                  >
                    <Bookmark size={17} />
                  </button>
                </div>

                <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5 leading-snug">
                  {nb.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-500 mb-4 flex-1">
                  {nb.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {nb.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${TAG_COLORS[tag.color]}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <FileStack size={13} />
                      {nb.cells} cells
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {nb.minutes} min
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark">
                    <Play size={13} fill="currentColor" />
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Showing 1 to 8 of 28 notebooks
            </p>
            <div className="flex items-center gap-1.5">
              <button
                aria-label="Previous page"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50"
              >
                <ChevronLeft size={16} />
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium ${
                    page === 1
                      ? "bg-brand text-white"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                aria-label="Next page"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3.5 py-2 text-sm text-gray-600 hover:bg-gray-50">
              8 per page
              <ChevronDown size={14} className="text-gray-400" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
