    </style>
    <!-- Chosen Palette: Warm Neutrals (Stone/Amber) with Teal/Indigo Accents for professional financial tone. -->
    <!-- Application Structure Plan: 
         1. Hero/Executive Summary: Immediate context setting.
         2. Macro Dashboard: Quantitative "Goldilocks" data visualization.
         3. Fundamental Analysis: Interactive comparison of earnings and valuations.
         4. Strategic Themes: Tabbed interface to explore the 3 pillars (ISM 2.0, Biopharma, Infra) without clutter.
         5. Portfolio Simulator: Functional tool to apply the report's advice to user's capital.
         6. Risk/Footer: Essential caveats.
    -->
    <!-- Gemini Features Added:
         1. AI Risk Simulator: Allows users to test custom economic scenarios.
         2. Smart Investment Memo: Generates personalized strategy explanations for the user's portfolio.
    -->
</head>
<body class="bg-stone-50 text-stone-800">

    <!-- Navigation / Header -->
    <nav class="bg-stone-900 text-white sticky top-0 z-50 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <span class="text-2xl font-bold tracking-tight text-teal-400">STRATEGY 2026</span>
                    <span class="ml-4 text-sm text-stone-400 hidden sm:block">Indian Equity Market Outlook</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <button onclick="scrollToSection('macro')" class="hover:bg-stone-700 px-3 py-2 rounded-md text-sm font-medium transition">Macro</button>
                        <button onclick="scrollToSection('fundamentals')" class="hover:bg-stone-700 px-3 py-2 rounded-md text-sm font-medium transition">Fundamentals</button>
                        <button onclick="scrollToSection('themes')" class="hover:bg-stone-700 px-3 py-2 rounded-md text-sm font-medium transition">Themes</button>
                        <button onclick="scrollToSection('portfolio')" class="bg-teal-700 hover:bg-teal-600 px-3 py-2 rounded-md text-sm font-medium transition shadow">Portfolio Sim</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="bg-white border-b border-stone-200">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-extrabold text-stone-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                The Capex Pivot
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-stone-500">
                Transitioning from liquidity-fueled recovery to structural, earnings-driven growth.
            </p>
            <div class="mt-8 flex justify-center space-x-4 text-sm font-semibold">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800">
                    🚀 GDP FY26: 7.4%
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800">
                    📉 Fiscal Deficit: 4.3%
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                    🏗️ Capex: ₹12.2 Lakh Cr
                </span>
            </div>
        </div>
    </div>

    <!-- Section 1: The Macro Lens -->
    <section id="macro" class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-stone-900">The Macroeconomic Lens</h2>
            <p class="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                India is in a "Goldilocks" scenario—robust growth coexisting with controlled inflation. 
                The economy has effectively decoupled from developed market stagnation, driven by an investment-led shift (GFCF) rather than just consumption.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <!-- Macro Chart -->
            <div class="bg-white p-6 rounded-xl shadow-md card-hover border border-stone-100">
                <h3 class="text-lg font-semibold text-stone-800 mb-4">Growth vs. Fiscal Consolidation</h3>
                <div class="chart-container">
                    <canvas id="macroChart"></canvas>
                </div>
                <p class="text-xs text-stone-500 mt-2 text-center">Source: Economic Survey 2025-26 & Union Budget</p>
            </div>

            <!-- Key Indicators & Policy -->
            <div class="space-y-6">
                <div class="bg-stone-100 p-6 rounded-xl border-l-4 border-teal-500">
                    <h3 class="font-bold text-teal-700 flex items-center">
                        <span class="text-2xl mr-2">🏛️</span> Fiscal Policy
                    </h3>
                    <p class="mt-2 text-stone-700">
                        <strong>The "Quality" Shift:</strong> The government is reducing the deficit (Target 4.3% FY27) while increasing Capex. This improves the "Fiscal Multiplier"—borrowing is used for assets (Roads, Defense), not subsidies.
                    </p>
                    <div class="mt-3 text-sm font-mono text-stone-600">
                        Debt-to-GDP Target: <span class="font-bold text-stone-900">55.6%</span>
                    </div>
                </div>

                <!-- AI Risk Simulator -->
                <div class="bg-red-50 p-6 rounded-xl border border-red-100 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition">
                         <svg class="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="relative z-10">
                        <div class="flex justify-between items-center mb-3">
                            <h3 class="font-bold text-red-800 flex items-center gap-2">
                                <span>⚡</span> AI Risk Simulator
                            </h3>
                            <span class="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded uppercase tracking-wide">Gemini Powered</span>
                        </div>
                        <p class="text-sm text-red-700 mb-3">
                            Simulate economic shocks on the Indian Market context of 2026.
                        </p>
                        <div class="flex gap-2">
                            <input type="text" id="riskInput" placeholder="E.g. US Fed hikes rates to 6%..." class="flex-1 text-sm p-2 rounded border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500">
                            <button onclick="simulateRisk()" id="riskBtn" class="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded transition font-medium whitespace-nowrap">
                                Simulate ✨
                            </button>
                        </div>
                        <div id="riskResult" class="mt-3 text-sm text-red-800 bg-white/50 p-3 rounded hidden border border-red-100">
                            <!-- AI Output Here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 2: Fundamentals -->
    <section id="fundamentals" class="bg-stone-200 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-stone-900">Fundamental Health</h2>
                <p class="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                    Corporate India is in its healthiest shape in a decade. However, recovery is "K-Shaped"—Banks and Manufacturing are surging, while IT Services face a "winter."
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Market Cap Gauge -->
                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <h3 class="text-lg font-semibold text-stone-700 mb-2">Market Cap to GDP</h3>
                    <div class="relative w-40 h-40 mx-auto rounded-full border-8 border-stone-100 flex items-center justify-center">
                        <div class="absolute inset-0 rounded-full border-8 border-amber-500 border-t-transparent border-l-transparent transform -rotate-45"></div>
                        <div class="text-center">
                            <span class="block text-3xl font-bold text-stone-800">111.6%</span>
                            <span class="text-xs text-stone-500">Buffett Indicator</span>
                        </div>
                    </div>
                    <p class="mt-4 text-sm text-stone-600">
                        <strong>Status: Elevated.</strong><br>
                        Justified by rising corporate profits and formalization, but warrants caution.
                    </p>
                </div>

                <!-- Small Cap Opportunity -->
                <div class="bg-white p-6 rounded-xl shadow-md col-span-1 md:col-span-2">
                    <h3 class="text-lg font-semibold text-stone-700 mb-4">The Valuation Dichotomy</h3>
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="flex-1">
                            <div class="chart-container" style="height: 250px;">
                                <canvas id="valuationChart"></canvas>
                            </div>
                        </div>
                        <div class="flex-1 flex flex-col justify-center space-y-4">
                            <div class="p-4 bg-green-50 rounded-lg border border-green-100">
                                <h4 class="font-bold text-green-800">Small Cap Opportunity</h4>
                                <p class="text-sm text-green-700 mt-1">
                                    Nifty Smallcap 250 PE is at <strong>~26.2x</strong> (near 3-year lows). With earnings growth of 15-20%, the PEG ratio is attractive (1.3-1.5).
                                </p>
                            </div>
                            <div class="p-4 bg-orange-50 rounded-lg border border-orange-100">
                                <h4 class="font-bold text-orange-800">IT Services Caution</h4>
                                <p class="text-sm text-orange-700 mt-1">
                                    Facing wage pressures and delayed discretionary spend in US/EU. "AI Revenue" is yet to materialize in EPS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 3: Strategic Themes -->
    <section id="themes" class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-stone-900">High-Conviction Themes (2026-2029)</h2>
            <p class="mt-4 text-stone-600">
                To generate alpha, look beyond broad indices to structural themes benefitting from policy tailwinds (PLI, ISM, Budget).
            </p>
        </div>

        <!-- Tabs -->
        <div class="flex flex-wrap justify-center mb-8 border-b border-stone-200">
            <button onclick="switchTheme('electronics')" id="tab-electronics" class="active-tab px-6 py-3 font-semibold text-lg focus:outline-none transition w-full sm:w-auto">
                Electronics (ISM 2.0)
            </button>
            <button onclick="switchTheme('biopharma')" id="tab-biopharma" class="inactive-tab px-6 py-3 font-semibold text-lg focus:outline-none transition w-full sm:w-auto">
                Biopharma SHAKTI
            </button>
            <button onclick="switchTheme('infra')" id="tab-infra" class="inactive-tab px-6 py-3 font-semibold text-lg focus:outline-none transition w-full sm:w-auto">
                Infra Supercycle
            </button>
        </div>

        <!-- Content Area -->
        <div id="theme-content" class="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 min-h-[300px]">
            <!-- Content injected by JS -->
        </div>
    </section>

    <!-- Section 4: Portfolio Strategy -->
    <section id="portfolio" class="bg-stone-900 text-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <!-- Calculator Controls -->
                <div>
                    <h2 class="text-3xl font-bold text-teal-400 mb-4">Strategic Portfolio Builder</h2>
                    <p class="text-stone-400 mb-8">
                        The era of "rising tides lifting all boats" is over. The 2026 strategy requires a <strong>Core-Satellite</strong> approach: Stability from Flexi-caps and Alpha from Thematic Small-caps.
                    </p>
                    
                    <div class="bg-stone-800 p-6 rounded-xl border border-stone-700">
                        <label class="block text-sm font-medium text-stone-300 mb-2">Monthly Investment Amount (SIP)</label>
                        <div class="flex items-center space-x-4 mb-4">
                            <span class="text-2xl text-stone-400">₹</span>
                            <input type="number" id="sipAmount" value="50000" class="bg-stone-700 text-white text-xl px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-teal-500 focus:outline-none" oninput="calculatePortfolio()">
                        </div>
                        
                        <!-- AI Memo Feature -->
                        <div class="bg-stone-900/50 p-4 rounded-lg border border-teal-900/50">
                            <button onclick="generateMemo()" id="memoBtn" class="w-full bg-teal-700 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded transition flex items-center justify-center gap-2">
                                <span>✨</span> Generate Investment Memo
                            </button>
                            <div id="memoResult" class="mt-3 text-sm text-teal-100 italic hidden border-l-2 border-teal-500 pl-3">
                                <!-- AI Output Here -->
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 space-y-4">
                        <h4 class="font-semibold text-stone-300">Allocation Strategy:</h4>
                        <div class="flex items-center">
                            <div class="w-4 h-4 rounded bg-teal-500 mr-3"></div>
                            <span class="text-stone-300 w-32">Core Equity</span>
                            <span class="text-white font-mono">50% (Stability)</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-4 h-4 rounded bg-amber-500 mr-3"></div>
                            <span class="text-stone-300 w-32">Satellite Equity</span>
                            <span class="text-white font-mono">30% (Alpha)</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-4 h-4 rounded bg-indigo-500 mr-3"></div>
                            <span class="text-stone-300 w-32">Thematic</span>
                            <span class="text-white font-mono">10% (Cyclical)</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-4 h-4 rounded bg-rose-500 mr-3"></div>
                            <span class="text-stone-300 w-32">Dynamic</span>
                            <span class="text-white font-mono">10% (Safety)</span>
                        </div>
                    </div>
                </div>

                <!-- Dynamic Output -->
                <div class="bg-stone-800 rounded-xl p-6 shadow-xl relative">
                    <div class="chart-container" style="height: 300px;">
                        <canvas id="portfolioChart"></canvas>
                    </div>
                    
                    <!-- Breakdown Table -->
                    <div class="mt-6 overflow-hidden rounded-lg border border-stone-700">
                        <table class="min-w-full divide-y divide-stone-700">
                            <thead class="bg-stone-900">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Fund Category</th>
                                    <th class="px-4 py-3 text-right text-xs font-medium text-stone-400 uppercase tracking-wider">Amount</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider hidden sm:table-cell">Rationale</th>
                                </tr>
                            </thead>
                            <tbody id="allocationTableBody" class="bg-stone-800 divide-y divide-stone-700 text-sm">
                                <!-- JS Populated -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer / Risks -->
    <footer class="bg-stone-950 text-stone-500 py-10 border-t border-stone-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h4 class="text-stone-300 font-bold mb-4">Critical Risks</h4>
                <ul class="space-y-2 text-sm">
                    <li>⚠️ <strong>Oil Shock:</strong> Prices >$90/bbl due to Middle East tension.</li>
                    <li>🌦️ <strong>Monsoon:</strong> Sub-par rains impacting rural demand.</li>
                    <li>🏛️ <strong>Policy Gridlock:</strong> Stalling of Capex pipeline.</li>
                </ul>
            </div>
            <div>
                <h4 class="text-stone-300 font-bold mb-4">Final Verdict</h4>
                <p class="text-sm">
                    <strong>Overweight Equities</strong> with a 4-year view. Focus on Domestic Cyclicals (Banks, Infra) over Global Cyclicals. Use SIPs to navigate volatility.
                </p>
            </div>
            <div>
                <h4 class="text-stone-300 font-bold mb-4">Source</h4>
                <p class="text-xs">
                    Based on "Strategic Market Outlook 2026: The Capex Pivot and the Maturation of the Indian Bull Market".<br>
                    Data cut-off: February 2026.
                </p>
            </div>
        </div>
    </footer>
