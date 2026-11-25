#include <iostream>

void printResume()
{
    std::cout << "PAUL ALLEN | RESUME \n"
              << "  Information Technology & Web Science @ RPI \n"
              << "  Fanwood, NJ | (908) 591-0650 | allenp5@rpi.edu \n"
              << "  linkedin.com/in/itspaulallen | github.com/Pachrijam \n";

    std::cout << "\n EDUCATION \n"
              << "  Rensselaer Polytechnic Institute | B.S. in ITWS \n"
              << "  Expected May 2030 | Data Structures, Web Development \n";

    std::cout << "\n PROJECTS \n"
              << "  Monte Carlo Simulation Engine | Python, NumPy, Matplotlib \n"
              << "    Eight simulation modes; variance reduction; MCMC sampling \n"
              << "  Personal Portfolio Website | HTML/CSS, JavaScript, Azure \n"
              << "    Responsive portfolio featuring projects and campus work \n"
              << "  Instagram Caption Generator | JavaScript, Gemini API \n"
              << "    Google Developer Group workshop: 1st place, best API use \n";

    std::cout << "\n EXPERIENCE \n"
              << "  Team Member | Nick's Pizza & Deli | Sep 2025 - Jul 2026 \n"
              << "    Customer service, order accuracy, and fast-paced teamwork \n";

    std::cout << "\n LEADERSHIP \n"
              << "  Eagle Scout | Led volunteers rebuilding a 60-foot boardwalk \n"
              << "  Marching Band Section Captain | Led a 30+ person section \n"
              << "  Google Developers, Competitive Programming, Pep Band \n";

    std::cout << "\n SKILLS \n"
              << "  Languages: Java, Python, C++, C#, JavaScript, SQL, HTML/CSS \n"
              << "  Tools: Git, Azure, VS Code, Visual Studio, Unity, Gemini \n"
              << "  Libraries: pandas, NumPy, Matplotlib, PyTorch, Pygame \n";
}

int main()
{
    printResume();
    return 0;
}