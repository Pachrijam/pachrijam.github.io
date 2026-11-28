# My Blog
<em>Computer Science, Engineering, and my Professional Career!</em>

## My Posts

### <strong>My High School Programming Experience</strong>
<em>August 23, 2026</em>
<p>
    My coding journey started in my junior year of high school, I had the option to 
    drop my language elective. It was 2024 at the time and the hype of Artificial 
    Intelligence was beginning to die down a bit. However, AI was present in my daily
    life everywhere, and you couldn't escape it no matter where you where.

</p>
<p>
    That wasn't a problem for me though. While some people feared AI and what it could
    do, I was instead intruiged by it. The fourth grade version of myself that wanted 
    to become a computer engineer, (not joking, I have a research project to back this up)
    felt more present in me than ever.

</p>
<p>
    So instead of pursing Italian III like my peers, I decided to take the introduction to
    python elective offered by my school. There I learned everything from strings to lists,
    and even did a small game project using Unity! I'll include a small C# snippet down below!

</p>

```C#
using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;

public class winScreen : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
     void Start()
    {
        StartCoroutine(sixamLoad());
    }

    // Update is called once per frame
    IEnumerator sixamLoad()
    {
        yield return new WaitForSeconds(360f);
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex+1);
    }
}
```
<p>
    After taking this introductionary level class, I decided to take 
    Advanced Placement Computer Science A my senior year of high school.
    This was a great choice because it set me up for success for my
    first semester college class "Data Structures".

</p>
<p>
    In this class I learned basic Java and everything from object oriented programming 
    to recursion! Recursion was not that fun. 
    This class was in some ways harder than AP Calculus, 
    the class in which I was taking at the same time. 
    It challenged the way I approached problems and taught me more about how 
    computers actually worked with less abstraction. 
    I'll include a snippet of my APCSA final project code down below!

</p>

```java
public static void main(String[] args) throws FileNotFoundException {
     Scanner scan = new Scanner(System.in);
     String fileToLoad = (args != null && args.length > 0) ? args[0] : DEFAULT_DATA_FILE;
     ArrayList<Warrant> warrants = loadData(fileToLoad);

    System.out.println("Search by license plate or premise code? (Enter 'plate' or 'premise')");
    String searchType = scan.nextLine().toLowerCase();

    if (searchType.equals("plate")) {
        searchByPlate(warrants, scan);
    } else if (searchType.equals("premise")) {
        searchByPremise(warrants, scan);
    } else {
        System.out.println("Invalid search type. Please enter 'plate' or 'premise'.");
    }
}
```
<p>
    As far as the Advanced Placement test goes, I scored a 4 on the exam. 
    I was happy with the solutions I provided and I was able to skip Computer 
    Science I at Rensselaer Polytechnic with this score. 
    In the fall, I will begin learning C++ along with Data Structures 
    and I am very excitied to see what lies ahead on my journey!

</p>