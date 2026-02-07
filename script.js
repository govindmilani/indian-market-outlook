    <!-- Scripts -->
    <script>
        // --- API Config ---
        const apiKey = ""; // Set your API Key here

        // --- Data & State ---
        const themeData = {
            electronics: {
                title: "Electronics Manufacturing (ISM 2.0)",
                icon: "📱",
                pivot: "From 'Assembly' (PLI 1.0) to 'Value Creation/Components' (ISM 2.0).",
                thesis: "ISM 2.0 and ECMS (₹40,000 cr outlay) target components, PCBs, and semiconductor packaging (OSAT). Backward integration is critical to capture value.",
                beneficiaries: "EMS Companies (Dixon, Kaynes, Amber), Chemical Suppliers, Industrial Real Estate.",
                color: "teal"
            },
            biopharma: {
                title: "Biopharma Renaissance (SHAKTI)",
                icon: "🧬",
                pivot: "From 'Generic Pharmacy' to 'Biologics Hub'.",
                thesis: "Biopharma SHAKTI scheme (₹10,000 cr) funds clinical trials and R&D. Biologics offer higher barriers to entry and higher margins than generics.",
                beneficiaries: "Research-driven majors (Biocon, Syngene), Vertically Integrated players (Sun Pharma).",
                color: "indigo"
            },
            infra: {
                title: "Capital Goods Supercycle",
                icon: "🏗️",
                pivot: "From 'Consumption' to 'Investment-Led' Growth.",
                thesis: "Record ₹12.2 lakh crore capex creates 3-5 year order visibility. Focus on Tier-2/3 city development expands addressable market.",
                beneficiaries: "EPC (L&T), Building Materials (UltraTech), Industrial Automation (Siemens/ABB), Power (NTPC).",
                color: "amber"
            }
        };

        const portfolioModel = [
            { category: "Flexi Cap (Growth)", allocation: 0.30, name: "HDFC Flexi Cap", rationale: "Banking exposure for credit cycle." },
            { category: "Flexi Cap (Value)", allocation: 0.20, name: "Parag Parikh Flexi", rationale: "Downside protection/Hedge." },
            { category: "Large Cap", allocation: 0.20, name: "Nippon India Large", rationale: "Bedrock stability (GARP)." },
            { category: "Small Cap", allocation: 0.20, name: "Bandhan Small Cap", rationale: "Alpha from Mfg themes." },
            { category: "Balanced Adv.", allocation: 0.10, name: "ICICI Pru BAF", rationale: "Dynamic volatility management." }
        ];

        // --- Gemini Integration Functions ---
        
        async function callGemini(promptText) {
             const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            const payload = {
                contents: [{ parts: [{ text: promptText }] }]
            };

            // Exponential backoff strategy
            const delays = [1000, 2000, 4000, 8000, 16000];
            for (let i = 0; i < 5; i++) {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) {
                        if (response.status === 429) throw new Error('Too Many Requests');
                        throw new Error(`API Error: ${response.statusText}`);
                    }

                    const data = await response.json();
                    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
                } catch (error) {
                    if (i === 4) return "Error generating response. Please try again later.";
                    await new Promise(resolve => setTimeout(resolve, delays[i]));
                }
            }
        }

        async function simulateRisk() {
            const input = document.getElementById('riskInput').value;
            const btn = document.getElementById('riskBtn');
            const resultDiv = document.getElementById('riskResult');

            if (!input) return;

            // UI Loading State
            btn.disabled = true;
            btn.innerHTML = 'Analyzing... <span class="animate-spin inline-block">⏳</span>';
            resultDiv.classList.remove('hidden');
            resultDiv.innerHTML = '<span class="typing-cursor">Connecting to Gemini...</span>';

            const prompt = `You are a financial strategist for the Indian Market in 2026. 
            Context: India has high Capex, Fiscal deficit target 4.3%, GDP 7.4%.
            User Scenario: "${input}"
            Task: Analyze the specific impact of this scenario on the Indian Equity Market (Banking, Infra, IT sectors) and the Rupee.
            Constraint: Keep it strictly under 50 words. Be direct and professional.`;

            const response = await callGemini(prompt);

            resultDiv.innerHTML = `<strong>Analysis:</strong> ${response}`;
            btn.disabled = false;
            btn.innerHTML = 'Simulate ✨';
        }

        async function generateMemo() {
            const amount = document.getElementById('sipAmount').value;
            const btn = document.getElementById('memoBtn');
            const resultDiv = document.getElementById('memoResult');

            // UI Loading State
            btn.disabled = true;
            btn.innerHTML = 'Drafting... <span class="animate-spin inline-block">✍️</span>';
            resultDiv.classList.remove('hidden');
            resultDiv.innerHTML = '<span class="typing-cursor">Analyzing portfolio structure...</span>';

            const prompt = `You are a savvy investment advisor in India (2026).
            User Data: Monthly SIP of ₹${amount}.
            Strategy: Core-Satellite (50% Core Stability, 30% Small Cap Alpha, 20% others).
            Task: Write a short, motivating 2-sentence "Investment Memo" to the client. Explain why this specific split allows them to capture the "Capex Pivot" growth while staying safe.
            Constraint: Keep it under 40 words. Tone: Professional yet encouraging.`;

            const response = await callGemini(prompt);

            resultDiv.innerHTML = `"${response}"`;
            btn.disabled = false;
            btn.innerHTML = '<span>✨</span> Regenerate Investment Memo';
        }

        // --- Core Functions ---

        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Theme Switcher Logic
        function switchTheme(themeKey) {
            const data = themeData[themeKey];
            const contentDiv = document.getElementById('theme-content');
            
            // Update Tab Styles
            ['electronics', 'biopharma', 'infra'].forEach(k => {
                const btn = document.getElementById(`tab-${k}`);
                if (k === themeKey) {
                    btn.className = `active-tab px-6 py-3 font-semibold text-lg focus:outline-none transition w-full sm:w-auto`;
                } else {
                    btn.className = `inactive-tab px-6 py-3 font-semibold text-lg focus:outline-none transition w-full sm:w-auto hover:bg-stone-200`;
                }
            });

            // Update Content with Fade Effect
            contentDiv.style.opacity = 0;
            setTimeout(() => {
                contentDiv.innerHTML = `
                    <div class="flex flex-col lg:flex-row gap-8 items-center">
                        <div class="flex-1 space-y-4">
                            <div class="inline-block p-3 rounded-full bg-${data.color}-100 text-${data.color}-800 text-4xl mb-2">${data.icon}</div>
                            <h3 class="text-2xl font-bold text-stone-800">${data.title}</h3>
                            <div class="p-4 bg-${data.color}-50 border-l-4 border-${data.color}-500 rounded-r-lg">
                                <span class="font-bold text-${data.color}-900 block mb-1">STRATEGIC PIVOT</span>
                                <span class="text-${data.color}-800">${data.pivot}</span>
                            </div>
                            <p class="text-stone-600 leading-relaxed">${data.thesis}</p>
                        </div>
                        <div class="flex-1 bg-stone-50 p-6 rounded-xl border border-stone-200 w-full">
                            <h4 class="font-semibold text-stone-700 mb-3 border-b pb-2">Key Beneficiaries & Opportunity</h4>
                            <p class="text-stone-600 mb-4">${data.beneficiaries}</p>
                            <div class="flex items-center text-sm text-stone-500">
                                <span class="mr-2">💡</span>
                                <em>Why now? Policy tailwinds + Global supply chain shifts.</em>
                            </div>
                        </div>
                    </div>
                `;
                contentDiv.style.opacity = 1;
            }, 200);
        }

        // Portfolio Calculator Logic
        let portfolioChartInstance = null;

        function calculatePortfolio() {
            const amountInput = document.getElementById('sipAmount');
            let amount = parseFloat(amountInput.value);
            if (isNaN(amount) || amount < 0) amount = 0;

            const tableBody = document.getElementById('allocationTableBody');
            tableBody.innerHTML = '';

            const chartData = [];
            const chartLabels = [];
            const chartColors = ['#14b8a6', '#0d9488', '#6366f1', '#f59e0b', '#f43f5e']; // teal-500, teal-600, indigo-500, amber-500, rose-500

            portfolioModel.forEach((item, index) => {
                const allocatedAmount = Math.round(amount * item.allocation);
                chartData.push(allocatedAmount);
                chartLabels.push(item.category);

                const row = `
                    <tr>
                        <td class="px-4 py-3 text-stone-300 font-medium">
                            <div class="flex items-center">
                                <div class="w-3 h-3 rounded-full mr-2" style="background-color: ${chartColors[index]}"></div>
                                ${item.category}
                                <span class="ml-2 text-xs text-stone-500 hidden sm:inline">(${item.name})</span>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-right text-stone-100 font-bold">₹${allocatedAmount.toLocaleString()}</td>
                        <td class="px-4 py-3 text-stone-400 text-xs hidden sm:table-cell">${item.rationale}</td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML('beforeend', row);
            });

            updatePortfolioChart(chartLabels, chartData, chartColors);
        }

        function updatePortfolioChart(labels, data, colors) {
            if (portfolioChartInstance) {
                portfolioChartInstance.data.datasets[0].data = data;
                portfolioChartInstance.update();
            } else {
                const ctx = document.getElementById('portfolioChart').getContext('2d');
                portfolioChartInstance = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: colors,
                            borderWidth: 0,
                            hoverOffset: 10
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false // Custom legend built in HTML
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return ' ₹' + context.raw.toLocaleString();
                                    }
                                }
                            }
                        },
                        cutout: '65%'
                    }
                });
            }
        }

        // --- Initialization & Charts ---

        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Macro Chart
            const ctxMacro = document.getElementById('macroChart').getContext('2d');
            new Chart(ctxMacro, {
                type: 'bar',
                data: {
                    labels: ['FY15', 'FY26 (Est)', 'FY27 (Proj)'],
                    datasets: [
                        {
                            label: 'Govt Capex (Lakh Cr)',
                            data: [2.0, 11.1, 12.2],
                            backgroundColor: '#f59e0b', // Amber
                            yAxisID: 'y',
                            order: 2
                        },
                        {
                            label: 'Fiscal Deficit (%)',
                            data: [null, 4.9, 4.3], // Approximate past, current, target
                            borderColor: '#111827', // Stone 900
                            backgroundColor: '#111827',
                            type: 'line',
                            yAxisID: 'y1',
                            order: 1,
                            tension: 0.1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { mode: 'index', intersect: false },
                    scales: {
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            title: { display: true, text: 'Capex (Lakh Cr)' }
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            grid: { drawOnChartArea: false },
                            title: { display: true, text: 'Deficit (%)' },
                            min: 0,
                            max: 6
                        }
                    }
                }
            });

            // Initialize Valuation Chart
            const ctxVal = document.getElementById('valuationChart').getContext('2d');
            new Chart(ctxVal, {
                type: 'line',
                data: {
                    labels: ['2021 Peak', '2023', '2024', '2025', 'Feb 2026'],
                    datasets: [{
                        label: 'Nifty Smallcap 250 PE Ratio',
                        data: [48.2, 35.0, 29.0, 32.5, 26.2],
                        borderColor: '#0f766e', // Teal 700
                        backgroundColor: 'rgba(15, 118, 110, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: ['#0f766e', '#0f766e', '#0f766e', '#0f766e', '#f59e0b'], // Highlight last point
                        pointRadius: [4, 4, 4, 4, 8]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        annotation: {
                            annotations: {
                                label1: {
                                    type: 'label',
                                    xValue: 'Feb 2026',
                                    yValue: 28,
                                    backgroundColor: '#fff',
                                    content: ['Attractive Entry'],
                                    font: { size: 10 }
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            min: 20,
                            title: { display: true, text: 'Price to Earnings (PE)' }
                        }
                    }
                }
            });

            // Initialize Components
            switchTheme('electronics');
            calculatePortfolio();
            
            // Note: Replaced static Risk Toggle with AI Risk Simulator
        });
    </script>
</body>
</html><
