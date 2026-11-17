module.exports = [
"[project]/src/app/news-and-media/news/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHero$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PageHero.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NewsRow$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NewsRow.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/news.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function NewsPage() {
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const years = [
        'All',
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["news"].map((item)=>item.year))
    ];
    const filteredNews = selectedYear === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["news"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["news"].filter((item)=>item.year === selectedYear);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHero$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                eyebrow: "News & media",
                title: "News Releases",
                lede: "Official regulatory announcements, exploration updates, and corporate disclosures from BluEnergies Ltd."
            }, void 0, false, {
                fileName: "[project]/src/app/news-and-media/news/page.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                background: "warm-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filter-bar",
                            style: {
                                marginBottom: '40px'
                            },
                            children: years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `filter-pill ${selectedYear === year ? 'is-active' : ''}`,
                                    onClick: ()=>setSelectedYear(year),
                                    type: "button",
                                    children: year
                                }, year, false, {
                                    fileName: "[project]/src/app/news-and-media/news/page.jsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/news-and-media/news/page.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "news-list",
                            style: {
                                borderTop: '1px solid var(--line)'
                            },
                            children: filteredNews.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NewsRow$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        date: item.date,
                                        title: item.title,
                                        href: `/news-and-media/news/${item.slug}/`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news-and-media/news/page.jsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                }, item.slug, false, {
                                    fileName: "[project]/src/app/news-and-media/news/page.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/news-and-media/news/page.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/news-and-media/news/page.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news-and-media/news/page.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news-and-media/news/page.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Eyebrow.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Eyebrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Eyebrow({ text, theme = 'light', className = '' }) {
    const waveColor = theme === 'dark' ? '#51C2C9' : '#16A6A6';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `eyebrow eyebrow-${theme} ${className}`.trim(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "eyebrow-wave",
                viewBox: "0 0 34 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 4C5 1 9 1 13 4C17 7 21 7 25 4C28 1.8 31 2 33 4",
                    stroke: waveColor,
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Eyebrow.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Eyebrow.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Eyebrow.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Eyebrow.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/NewsRow.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function NewsRow({ date, title, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "news-row-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                className: "news-row-date",
                children: date
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NewsRow.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "news-row-headline",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NewsRow.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "news-row-arrow",
                "aria-hidden": "true",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NewsRow.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/NewsRow.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/PageHero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Eyebrow.jsx [app-ssr] (ecmascript)");
;
;
function PageHero({ eyebrow = 'BluEnergies', title, lede, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `page-hero ${className}`.trim(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "page-hero-content",
                    children: [
                        eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Eyebrow$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: eyebrow,
                            theme: "dark"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PageHero.jsx",
                            lineNumber: 13,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PageHero.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        lede && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lede",
                            children: lede
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PageHero.jsx",
                            lineNumber: 15,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/PageHero.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PageHero.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "page-hero-wave",
                viewBox: "0 0 1440 28",
                fill: "none",
                preserveAspectRatio: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 14C240 2 480 26 720 14C960 2 1200 26 1440 14V28H0V14Z",
                    fill: "#51C2C9",
                    fillOpacity: "0.12"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PageHero.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PageHero.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PageHero.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Section.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Section({ background = 'warm-white', id, className = '', containerClassName = '', style, children }) {
    const isDark = background === 'abyss' || background === 'navy' || background === 'dark-navy' || background === 'secondary-dark' || background === 'dark';
    const themeClass = isDark ? 'theme-dark' : 'theme-light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `section section-${background} ${themeClass} ${className}`.trim(),
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${containerClassName}`.trim(),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Section.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/news.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "news",
    ()=>news
]);
const news = [
    {
        slug: 'bluenergies-announces-advisory-agreements',
        date: 'September 14, 2026',
        year: '2026',
        title: 'BluEnergies announces advisory agreements',
        summary: 'BluEnergies Ltd. announces that it has entered into advisory service agreements to support corporate development and international capital markets strategies.',
        body: [
            'VANCOUVER, BC — BluEnergies Ltd. (TSXV: BLU) ("BluEnergies" or the "Company") announces that it has entered into corporate advisory agreements with independent international capital markets and technical advisors.',
            'The advisors will provide strategic market consultation, technical review coordination, and corporate advisory services to assist the Company in communicating its exploration milestones across the Harper Basin and evaluating ongoing commercial initiatives.',
            '[CONTENT NEEDED: paste release text]'
        ]
    },
    {
        slug: 'bluenergies-announces-closing-private-placement-20m',
        date: 'July 23, 2026',
        year: '2026',
        title: 'BluEnergies announces closing of non-brokered private placement of units for gross proceeds of C$20.7 million',
        summary: 'BluEnergies Ltd. has completed its previously announced upsized non-brokered private placement, issuing 9,202,027 units at C$2.25 per unit for aggregate gross proceeds of approximately C$20.7 million.',
        body: [
            'VANCOUVER, BC — BluEnergies Ltd. (TSXV: BLU) ("BluEnergies" or the "Company") is pleased to announce that further to its news release of July 21, 2026, it has closed its upsized non-brokered private placement of 9,202,027 units (the "Units") at an issue price of C$2.25 per Unit for aggregate gross proceeds of C$20,704,560.75.',
            'Each Unit consists of one common share of the Company and one-half of one transferable common share purchase warrant. Each whole warrant entitles the holder to purchase one common share at an exercise price of C$3.00 for a period of 24 months from the closing date.',
            'Gross proceeds from the offering will be used to fund the technical work programme across Blocks LB-26, LB-30, and LB-31 in the Harper Basin offshore Liberia, working capital, and general corporate purposes.',
            'All securities issued under the offering are subject to a statutory four-month hold period under applicable Canadian securities legislation.'
        ]
    },
    {
        slug: 'bluenergies-announces-upsize-private-placement',
        date: 'July 21, 2026',
        year: '2026',
        title: 'BluEnergies announces upsize of non-brokered private placement of units for gross proceeds of up to C$20,700,000',
        summary: 'Due to strong demand from institutional and strategic natural resource investors, BluEnergies has upsized its non-brokered private placement to up to C$20.7 million.',
        body: [
            'VANCOUVER, BC — BluEnergies Ltd. (TSXV: BLU) ("BluEnergies" or the "Company") announces that due to strong institutional demand, it has increased the size of its previously announced non-brokered private placement of units at C$2.25 per unit to gross proceeds of up to C$20,700,000.',
            'The net proceeds will be allocated towards the Company’s exploration programs, geological surveys, and general corporate working capital requirements.',
            '[CONTENT NEEDED: paste release text]'
        ]
    },
    {
        slug: 'bluenergies-totalenergies-progress-operations-harper-basin',
        date: 'July 07, 2026',
        year: '2026',
        title: 'BluEnergies and TotalEnergies progress operations, Harper Basin, offshore Liberia',
        summary: 'BluEnergies and operating partner TotalEnergies report substantial progress on the comprehensive technical exploration programme covering Blocks LB-26, LB-30, and LB-31 in the deepwater Harper Basin.',
        body: [
            'VANCOUVER, BC — BluEnergies Ltd. (TSXV: BLU) ("BluEnergies" or the "Company") is pleased to provide an update on exploration operations conducted jointly with TotalEnergies across Reconnaissance License No. RL-003, covering 8,924 km² in the Harper Basin, deepwater offshore Liberia.',
            'TGS ASA is actively reprocessing 6,167 km² of existing 3D seismic data to improve structural resolution and identify amplitude anomalies associated with Cretaceous deepwater fan complexes.',
            'Concurrently, GeoPartners, utilizing TDI-Brooks’ research vessel R/V GYRE, is executing a 4,045 km² multi-beam echo sounder (MBES) seafloor survey, coupled with seabed geochemical coring and heat flow measurements to map potential hydrocarbon seepage anomalies and calibrate thermal maturity modeling.',
            'Results from the 3D reprocessing and seabed geochemical campaigns will directly inform prospect delineation and the selection of candidate drilling locations.'
        ]
    },
    {
        slug: 'totalenergies-partners-with-bluenergies-harper-basin',
        date: 'January 15, 2026',
        year: '2026',
        title: 'TotalEnergies partners with BluEnergies in its Harper Basin fan play, offshore Liberia',
        summary: 'BluEnergies signs Joint Study and Assessment Agreement with TotalEnergies for exploration across deepwater blocks LB-26, LB-30, and LB-31 under Reconnaissance License RL-003.',
        body: [
            'VANCOUVER, BC — BluEnergies Ltd. (TSXV: BLU) ("BluEnergies" or the "Company") is pleased to announce the signing of a Joint Study and Assessment Agreement (JSAA) with TotalEnergies for Reconnaissance License RL-003 granted by the Liberia Petroleum Regulatory Authority (LPRA).',
            'Under the terms of the agreement, TotalEnergies holds a 65% operating interest and BluEnergies holds a 35% participating interest in the licence, which encompasses 8,924 km² (approx. 2.2 million acres) across blocks LB-26, LB-30, and LB-31.',
            'The licence term extends through June 30, 2027. All agreed expenditures under the reconnaissance licence are eligible for recovery upon transition to production sharing contracts.',
            'The Harper Basin represents one of the few remaining lightly explored deepwater Cretaceous fan plays along the West African transform margin, sharing geological affinities with major oil discoveries across Ghana, Côte d’Ivoire, and Namibia.'
        ]
    }
];
}),
];

//# sourceMappingURL=src_0_743tpxrpjsh._.js.map