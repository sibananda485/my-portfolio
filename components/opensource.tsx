import { ExternalLink, GitPullRequest, Bug, Star, Trophy } from "lucide-react";

export default function OpenSource() {
  const contributions = [
    {
      org: "MUI-X",
      orgUrl: "https://github.com/mui/mui-x",
      badge: "Featured Contributor",
      title: "Fix clipboard paste issue in portal — DataGridPremium",
      description:
        "Identified and fixed a bug in @mui/x-data-grid-premium where keyboard paste shortcuts caused unexpected DOM behaviour when triggered inside a Portal (e.g. a Dialog). The issue resulted in duplicate hidden inputs being injected into the document and focus being lost from the target field. The fix was merged into the v8.x release branch and shipped in v8.28.2.",
      impact:
        "Shipped in MUI-X v8.28.2 — received a special shoutout in the official release notes.",
      package: "@mui/x-data-grid-premium",
      version: "v8.28.2",
      links: [
        {
          label: "Issue #21891",
          url: "https://github.com/mui/mui-x/issues/21891",
          icon: "bug",
        },
        {
          label: "PR #21931",
          url: "https://github.com/mui/mui-x/pull/21931",
          icon: "pr",
        },
        {
          label: "Release Notes",
          url: "https://github.com/mui/mui-x/releases/tag/v8.28.2",
          icon: "star",
        },
      ],
      tags: ["React", "MUI-X", "DataGrid", "Bug Fix", "Open Source"],
    },
  ];

  return (
    <section id="opensource" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Open Source</span>{" "}
            <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Contributions
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Giving back to the community — real-world fixes shipped to
            production libraries used by thousands of developers.
          </p>
        </div>

        <div className="space-y-8">
          {contributions.map((item, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 relative group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glow accent */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-500/10 rounded-xl border border-primary-500/20">
                    <Trophy className="size-5 text-primary-400" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest">
                      {item.org}
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.package}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-linear-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold rounded-full">
                    {item.badge}
                  </span>
                  <span className="px-3 py-1 bg-green-500/15 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
                    Merged ✓
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-300 leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Impact callout */}
              <div className="flex items-start gap-3 p-4 bg-accent-500/10 border border-accent-500/20 rounded-xl mb-6">
                <Star className="size-4 text-accent-400 mt-0.5 shrink-0" />
                <p className="text-accent-300 text-sm leading-relaxed">
                  {item.impact}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full hover:bg-neutral-700 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-neutral-700 text-neutral-300 text-sm font-medium rounded-full hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
                  >
                    {link.icon === "bug" && <Bug className="size-3.5" />}
                    {link.icon === "pr" && (
                      <GitPullRequest className="size-3.5" />
                    )}
                    {link.icon === "star" && <Star className="size-3.5" />}
                    {link.label}
                    <ExternalLink className="size-3" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
