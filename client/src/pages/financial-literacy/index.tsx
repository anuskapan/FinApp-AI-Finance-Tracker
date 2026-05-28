import { useState } from "react";
import { BookOpen, Search } from "lucide-react";
import PageLayout from "@/components/page-layout";

const articles = [
  {
    id: 1,
    category: "Budgeting",
    title: "The 50/30/20 Rule",
    summary: "A simple budgeting method to manage your income effectively.",
    content: `The 50/30/20 rule is a simple budgeting framework:
    
• 50% of your income goes to NEEDS — rent, groceries, utilities, transport.
• 30% goes to WANTS — dining out, entertainment, shopping.
• 20% goes to SAVINGS & DEBT — emergency fund, investments, loan repayments.

For example, if you earn ₹50,000/month:
- ₹25,000 for needs
- ₹15,000 for wants
- ₹10,000 for savings

This rule helps you stay financially balanced without feeling deprived.`,
  },
  {
    id: 2,
    category: "Investing",
    title: "What is SIP?",
    summary: "Learn how Systematic Investment Plans help you build wealth gradually.",
    content: `A Systematic Investment Plan (SIP) lets you invest a fixed amount in mutual funds every month.

Key benefits:
• Rupee Cost Averaging — you buy more units when prices are low
• Power of Compounding — your returns generate more returns over time
• Disciplined Investing — automates your investment habit
• Start small — you can start with as little as ₹500/month

Example: Investing ₹5,000/month in an index fund for 10 years at 12% returns could grow to over ₹11 lakhs!

SIP is one of the best ways for beginners to start investing in India.`,
  },
  {
    id: 3,
    category: "Saving",
    title: "Building an Emergency Fund",
    summary: "Why you need 3-6 months of expenses saved up and how to do it.",
    content: `An emergency fund is money set aside for unexpected expenses like job loss, medical bills, or urgent repairs.

How much to save:
• Minimum: 3 months of monthly expenses
• Ideal: 6 months of monthly expenses

Where to keep it:
• High-interest savings account
• Liquid mutual funds
• Fixed deposits with easy withdrawal

How to build it:
1. Calculate your monthly expenses
2. Set a target (3x or 6x that amount)
3. Save a fixed amount every month until you reach the goal
4. Don't touch it unless it's a real emergency!

Having an emergency fund gives you peace of mind and financial security.`,
  },
  {
    id: 4,
    category: "Tax",
    title: "Save Tax with Section 80C",
    summary: "How to save up to ₹1.5 lakh in taxes using Section 80C investments.",
    content: `Section 80C of the Income Tax Act allows you to claim deductions up to ₹1,50,000 per year.

Popular 80C investment options:
• PPF (Public Provident Fund) — safe, 7.1% returns, 15-year lock-in
• ELSS Mutual Funds — market-linked, 3-year lock-in, higher returns
• EPF (Employee Provident Fund) — automatic through salary
• NSC (National Savings Certificate) — post office scheme
• Life Insurance Premiums
• Home Loan Principal Repayment
• Children's Tuition Fees

Tax saved example:
If you're in the 30% tax bracket and invest ₹1.5 lakh in 80C:
You save ₹46,350 in taxes!

Plan your 80C investments at the start of the financial year for maximum benefit.`,
  },
  {
    id: 5,
    category: "Debt",
    title: "How to Pay Off Debt Faster",
    summary: "Two proven strategies to become debt-free — Avalanche and Snowball methods.",
    content: `Being in debt is stressful. Here are two proven strategies to pay it off faster:

1. AVALANCHE METHOD (saves more money):
• List all debts by interest rate (highest first)
• Pay minimum on all debts
• Put extra money toward the highest interest debt first
• Once paid, move to the next highest

2. SNOWBALL METHOD (builds motivation):
• List all debts by balance (smallest first)
• Pay minimum on all debts
• Put extra money toward the smallest debt first
• Once paid, move to the next smallest

Which is better?
• Avalanche saves more interest overall
• Snowball gives psychological wins faster

Tips to pay off debt faster:
• Stop taking new debt
• Use windfalls (bonus, gifts) to pay off debt
• Cut unnecessary expenses and redirect to debt payment`,
  },
  {
    id: 6,
    category: "Investing",
    title: "Fixed Deposit vs Mutual Funds",
    summary: "Compare two popular Indian investment options to decide what's right for you.",
    content: `Both FDs and Mutual Funds are popular in India. Here's how they compare:

FIXED DEPOSIT (FD):
• Returns: 6-7% per year (fixed)
• Risk: Very low (guaranteed returns)
• Lock-in: Flexible (7 days to 10 years)
• Tax: Interest fully taxable
• Best for: Short-term goals, senior citizens, risk-averse investors

MUTUAL FUNDS:
• Returns: 10-15% per year (market-linked, not guaranteed)
• Risk: Low to High (depends on fund type)
• Lock-in: None (except ELSS - 3 years)
• Tax: LTCG tax applies after 1 year
• Best for: Long-term wealth creation, beating inflation

Which to choose?
• For safety and short-term: FD
• For long-term wealth creation: Mutual Funds
• For tax saving: ELSS Mutual Funds

A smart investor uses both based on their goals!`,
  },
  {
    id: 7,
    category: "Budgeting",
    title: "How to Track Your Expenses",
    summary: "Simple habits to track where your money goes every month.",
    content: `Most people don't know where their money goes. Here's how to track it:

Step 1: Categorize your expenses
• Fixed: Rent, EMI, subscriptions
• Variable: Food, transport, entertainment
• Irregular: Medical, repairs, travel

Step 2: Choose a tracking method
• Apps like FinApp (this app!)
• Spreadsheet
• Notebook

Step 3: Review weekly
• Check if you're overspending in any category
• Identify patterns (e.g., too much on food delivery)

Step 4: Set spending limits
• Decide a monthly budget for each category
• Stop spending when you hit the limit

Benefits of tracking:
✅ Awareness of spending habits
✅ Find areas to cut back
✅ Reach savings goals faster
✅ Reduce financial stress`,
  },
  {
    id: 8,
    category: "Saving",
    title: "Power of Compound Interest",
    summary: "Why starting to save early makes a huge difference in the long run.",
    content: `Compound interest is earning interest on your interest — it's the most powerful force in personal finance!

Simple example:
• You invest ₹1,00,000 at 10% per year
• After year 1: ₹1,10,000
• After year 2: ₹1,21,000 (not ₹1,20,000!)
• After 10 years: ₹2,59,374
• After 20 years: ₹6,72,750
• After 30 years: ₹17,44,940

The earlier you start, the more powerful it becomes!

Starting early vs late:
• Start at 25, invest ₹5,000/month → ₹3.5 crore at 60
• Start at 35, invest ₹5,000/month → ₹1.2 crore at 60

The 10-year head start makes a ₹2.3 crore difference!

Key takeaway: Start investing TODAY, even if it's a small amount.`,
  },
];

const categories = ["All", "Budgeting", "Saving", "Investing", "Tax", "Debt"];

const FinancialLiteracy = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = articles.filter((a) => {
    const matchCategory = activeCategory === "All" || a.category === activeCategory;
    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <PageLayout>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="text-green-500 w-6 h-6" />
          <h1 className="text-2xl font-bold">Financial Literacy</h1>
        </div>
        <p className="text-muted-foreground text-sm">
          Learn smart money habits and financial concepts — India focused 🇮🇳
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-500"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-green-500 text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      {filtered.length === 0 ? (
        <div className="text-center text-muted-foreground py-20">No articles found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-green-500/50 transition-all"
            >
              <span className="text-xs font-semibold text-green-500 uppercase tracking-wide">
                {article.category}
              </span>
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-muted-foreground text-sm">{article.summary}</p>

              {expandedId === article.id && (
                <pre className="text-foreground text-sm whitespace-pre-wrap bg-muted rounded-lg p-3 mt-1">
                  {article.content}
                </pre>
              )}

              <button
                onClick={() =>
                  setExpandedId(expandedId === article.id ? null : article.id)
                }
                className="mt-auto text-green-500 text-sm font-medium hover:text-green-400 transition-colors text-left"
              >
                {expandedId === article.id ? "Show Less ↑" : "Read More →"}
              </button>
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
};

export default FinancialLiteracy;
