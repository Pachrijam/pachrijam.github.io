<?php

$projects = [
    [
        "name" => "Monte Carlo Simulation Engine",
        "date" => "May 2026 - Aug. 2026",
        "technologies" => ["Python", "NumPy", "Matplotlib"],
        "details" => [
            "Built a command-line application with eight simulation modes, including numerical integration, option pricing, and MCMC sampling.",
            "Implemented European call/put pricing with variance reduction and comparisons against the Black-Scholes formula.",
            "Added Metropolis-Hastings and Gibbs sampling, visualizations, and CSV/JSON exports."
        ]
    ],
    [
        "name" => "Personal Portfolio Website",
        "date" => "June 2026 - Present",
        "technologies" => ["HTML/CSS", "JavaScript", "Microsoft Azure"],
        "details" => [
            "Published a responsive website featuring projects, resume, campus involvement, and contact information."
        ]
    ],
    [
        "name" => "Instagram Caption Generator",
        "date" => "Sep. 2026",
        "technologies" => ["JavaScript", "HTML/CSS", "Gemini API"],
        "details" => [
            "Designed and deployed a website that generates context-based Instagram captions using the Google Gemini API.",
            "Won first place and best use of Google Gemini API at a Google Developer Group workshop."
        ]
    ]
];

foreach ($projects as $project) {
    echo "<h2>" . $project["name"] . "</h2>";
    echo "<p>" . implode(" | ", $project["technologies"]) . "</p>";
    echo "<p>" . $project["date"] . "</p>";
    echo "<ul>";

    foreach ($project["details"] as $detail) {
        echo "<li>" . $detail . "</li>";
    }

    echo "</ul>";
}

?>
