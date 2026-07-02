import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import {
  Search,
  ChevronDown,
  LayoutGrid,
  List,
  Bookmark,
  ExternalLink,
  ClipboardList,
  GraduationCap,
  Newspaper,
  Compass,
} from "lucide-react";

type ResourceType = "Cheat Sheet" | "Research Paper" | "Blog";

const TYPE_META: Record<
  ResourceType,
  { icon: typeof ClipboardList; iconBg: string; iconColor: string; badge: string }
> = {
  "Cheat Sheet": {
    icon: ClipboardList,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badge: "text-emerald-600",
  },
  "Research Paper": {
    icon: GraduationCap,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badge: "text-violet-600",
  },
  Blog: {
    icon: Newspaper,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badge: "text-blue-600",
  },
};

const RESOURCES: {
  type: ResourceType;
  title: string;
  description: string;
  source: string;
  url: string;
  tags: string[];
}[] = [
  {
    type: "Cheat Sheet",
    title: "Python for Data Science",
    description: "Core syntax, NumPy, and Pandas commands on a single page.",
    source: "DataCamp",
    url: "https://www.datacamp.com/cheat-sheet/python-for-data-science",
    tags: ["Python", "Pandas"],
  },
  {
    type: "Cheat Sheet",
    title: "Choosing the Right Estimator",
    description: "Flowchart for picking the right scikit-learn model for your data.",
    source: "scikit-learn",
    url: "https://scikit-learn.org/stable/machine_learning_map.html",
    tags: ["Scikit-learn", "Model Selection"],
  },
  {
    type: "Cheat Sheet",
    title: "Pandas Cheat Sheet",
    description: "Official quick reference for indexing, reshaping, and grouping data.",
    source: "pandas.pydata.org",
    url: "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf",
    tags: ["Pandas", "Data Wrangling"],
  },
  {
    type: "Research Paper",
    title: "Attention Is All You Need",
    description: "The paper that introduced the Transformer architecture.",
    source: "arXiv",
    url: "https://arxiv.org/abs/1706.03762",
    tags: ["Transformers", "NLP"],
  },
  {
    type: "Research Paper",
    title: "Deep Residual Learning for Image Recognition",
    description: "Introduces ResNet and residual connections for very deep networks.",
    source: "arXiv",
    url: "https://arxiv.org/abs/1512.03385",
    tags: ["Deep Learning", "Computer Vision"],
  },
  {
    type: "Research Paper",
    title: "Adam: A Method for Stochastic Optimization",
    description: "The optimizer behind most modern deep learning training runs.",
    source: "arXiv",
    url: "https://arxiv.org/abs/1412.6980",
    tags: ["Optimization", "Deep Learning"],
  },
  {
    type: "Blog",
    title: "The Illustrated Transformer",
    description: "A visual, intuitive walkthrough of how Transformers work.",
    source: "Jay Alammar",
    url: "https://jalammar.github.io/illustrated-transformer/",
    tags: ["Transformers", "NLP"],
  },
  {
    type: "Blog",
    title: "A Recipe for Training Neural Networks",
    description: "Practical, hard-won advice for actually getting models to train.",
    source: "Andrej Karpathy",
    url: "http://karpathy.github.io/2019/04/25/recipe/",
    tags: ["Deep Learning", "Best Practices"],
  },
  {
    type: "Blog",
    title: "Distill.pub Archive",
    description: "Interactive, visual explanations of machine learning research.",
    source: "Distill",
    url: "https://distill.pub/",
    tags: ["Deep Learning", "Visualization"],
  },
];

const FILTERS = ["All Types", "All Topics"];
const TAGS = [
  "Python",
  "Pandas",
  "Transformers",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Optimization",
];
const TABS = ["All Resources", "Cheat Sheets", "Research Papers", "Blogs"];

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAFB]">
      <Sidebar active="Resources" promo="learning" />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          mode="breadcrumb"
          crumbs={[{ label: "Resources" }]}
          showProgressButton
        />

        <main className="flex-1 px-6 lg:px-10 pb-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Resources
              </h1>
              <p className="text-[15px] text-gray-500">
                Cheat sheets, research papers, and blogs to deepen your ML
                knowledge.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Compass size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Resources</p>
                <p className="text-2xl font-bold text-brand leading-tight">
                  {RESOURCES.length}
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
                placeholder="Search resources..."
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

          {/* Resource grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {RESOURCES.map((resource) => {
              const meta = TYPE_META[resource.type];
              return (
                <div
                  key={resource.title}
                  className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${meta.iconBg} ${meta.iconColor}`}
                    >
                      <meta.icon size={19} />
                    </div>
                    <button
                      aria-label="Save resource"
                      className="text-gray-300 hover:text-brand"
                    >
                      <Bookmark size={17} />
                    </button>
                  </div>

                  <p className={`text-xs font-medium mb-1 ${meta.badge}`}>
                    {resource.type}
                  </p>
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5 leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-500 mb-4 flex-1">
                    {resource.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <span className="text-xs text-gray-400">
                      {resource.source}
                    </span>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
                    >
                      Read
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
