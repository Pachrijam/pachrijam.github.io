#include <iostream>
#include <cassert>
#include <string>

void printResume(const std::string& resume_file)
{
    
}

/*
    This program takes in a resume.txt file and displays 
    the contents of the file to the main display in a 
    more appealing format.
*/

int main(int argc, char* argv[])
{
    assert(argv > 0 && argv[1] == "resume.txt");
    printResume(argv[1]);
    return 0;
}